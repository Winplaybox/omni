require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// In-memory user store (use DB in production)
const users = new Map();
const chatSessions = new Map();

// Model registry
const MODELS = {
  'claude-3.5-sonnet': { provider: 'anthropic', model: 'claude-3-5-sonnet-20241022' },
  'claude-3-haiku': { provider: 'anthropic', model: 'claude-3-haiku-20240307' },
  'gpt-4o': { provider: 'openai', model: 'gpt-4o' },
  'gpt-4o-mini': { provider: 'openai', model: 'gpt-4o-mini' },
  'gemini-1.5-pro': { provider: 'google', model: 'gemini-1.5-pro' },
  'gemini-1.5-flash': { provider: 'google', model: 'gemini-1.5-flash' },
  'claude-bedrock': { provider: 'bedrock', model: 'anthropic.claude-3-5-sonnet-20241022-v2:0' }
};

// Smart router — picks best model based on prompt
function routeModel(prompt, preferredModel) {
  if (preferredModel && MODELS[preferredModel]) return preferredModel;
  
  const len = prompt.length;
  if (len < 100) return 'gpt-4o-mini';        // Short = cheap model
  if (len > 5000) return 'gemini-1.5-pro';     // Long context = Gemini
  if (prompt.match(/code|function|debug|error|programming/i)) return 'claude-3.5-sonnet';
  return 'gpt-4o';                             // Default
}

// Provider handlers
async function callAnthropic(model, messages, apiKey) {
  const res = await axios.post('https://api.anthropic.com/v1/messages', {
    model: model,
    max_tokens: 4096,
    messages: messages
  }, {
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json'
    }
  });
  return res.data.content[0].text;
}

async function callOpenAI(model, messages, apiKey) {
  const res = await axios.post('https://api.openai.com/v1/chat/completions', {
    model: model,
    messages: messages,
    max_tokens: 4096
  }, {
    headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' }
  });
  return res.data.choices[0].message.content;
}

async function callGoogle(model, messages, apiKey) {
  const lastMsg = messages[messages.length - 1].content;
  const res = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
    { contents: [{ parts: [{ text: lastMsg }] }] }
  );
  return res.data.candidates[0].content.parts[0].text;
}

async function callBedrock(model, messages, region, accessKey, secretKey) {
  // AWS Bedrock requires AWS SDK
  const { BedrockRuntimeClient, InvokeModelCommand } = require('@aws-sdk/client-bedrock-runtime');
  const client = new BedrockRuntimeClient({
    region: region || 'us-east-1',
    credentials: { accessKeyId: accessKey, secretAccessKey: secretKey }
  });
  const body = JSON.stringify({
    anthropic_version: "bedrock-2023-05-31",
    max_tokens: 4096,
    messages: messages
  });
  const command = new InvokeModelCommand({ modelId: model, body, contentType: 'application/json' });
  const response = await client.send(command);
  const result = JSON.parse(new TextDecoder().decode(response.body));
  return result.content[0].text;
}

// Register user with their API keys
app.post('/api/register', (req, res) => {
  const { username, keys } = req.body;
  const userId = uuidv4();
  users.set(userId, { username, keys: keys || {} });
  res.json({ userId, message: 'Registered. Add your API keys.' });
});

// Update API keys
app.post('/api/keys', (req, res) => {
  const { userId, keys } = req.body;
  const user = users.get(userId);
  if (!user) return res.status(404).json({ error: 'User not found' });
  user.keys = { ...user.keys, ...keys };
  res.json({ message: 'Keys updated' });
});

// Chat endpoint — the core router
app.post('/api/chat', async (req, res) => {
  try {
    const { userId, message, model: preferredModel, sessionId } = req.body;
    const user = users.get(userId);
    if (!user) return res.status(401).json({ error: 'Register first' });

    // Route to best model
    const selectedModel = routeModel(message, preferredModel);
    const modelConfig = MODELS[selectedModel];

    // Build messages
    const sid = sessionId || uuidv4();
    if (!chatSessions.has(sid)) chatSessions.set(sid, []);
    const history = chatSessions.get(sid);
    history.push({ role: 'user', content: message });

    let response;
    const keys = user.keys;

    switch (modelConfig.provider) {
      case 'anthropic':
        if (!keys.anthropic) return res.status(400).json({ error: 'Add Anthropic API key' });
        response = await callAnthropic(modelConfig.model, history, keys.anthropic);
        break;
      case 'openai':
        if (!keys.openai) return res.status(400).json({ error: 'Add OpenAI API key' });
        response = await callOpenAI(modelConfig.model, history, keys.openai);
        break;
      case 'google':
        if (!keys.google) return res.status(400).json({ error: 'Add Google API key' });
        response = await callGoogle(modelConfig.model, history, keys.google);
        break;
      case 'bedrock':
        if (!keys.aws_access || !keys.aws_secret) return res.status(400).json({ error: 'Add AWS keys' });
        response = await callBedrock(modelConfig.model, history, keys.aws_region, keys.aws_access, keys.aws_secret);
        break;
    }

    history.push({ role: 'assistant', content: response });

    res.json({
      sessionId: sid,
      model: selectedModel,
      provider: modelConfig.provider,
      response: response
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// List available models
app.get('/api/models', (req, res) => {
  res.json(Object.keys(MODELS));
});

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'OmniRoute running', models: Object.keys(MODELS).length });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`OmniRoute running on port ${PORT}`));
