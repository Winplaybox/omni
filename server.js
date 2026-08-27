require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

const { OpenAI } = require("openai");
const Anthropic = require("@anthropic-ai/sdk");
const { GoogleGenerativeAI } = require("@google/generative-ai");

// --- Clients ---
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const google = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

// --- Router: pick model based on prompt ---
function classifyPrompt(prompt, requestedModel) {
  if (requestedModel) return requestedModel;

  const lower = prompt.toLowerCase();
  const len = prompt.length;

  // Code tasks → Claude
  if (/\b(code|debug|function|refactor|error|bug|script|api|sql|regex)\b/.test(lower)) return "claude";
  // Creative/writing → GPT
  if (/\b(write|story|essay|creative|blog|poem|email|summarize)\b/.test(lower)) return "gpt";
  // Long/complex analysis → Gemini (big context)
  if (len > 4000) return "gemini";
  // Math/reasoning → GPT
  if (/\b(math|calculate|solve|equation|proof)\b/.test(lower)) return "gpt";
  // Default
  return "claude";
}

// --- Model Callers ---
async function callGPT(messages) {
  const res = await openai.chat.completions.create({
    model: "gpt-4o",
    messages,
    max_tokens: 4096,
  });
  return { model: "gpt-4o", content: res.choices[0].message.content, usage: res.usage };
}

async function callClaude(messages) {
  const system = messages.find(m => m.role === "system")?.content || "";
  const userMsgs = messages.filter(m => m.role !== "system").map(m => ({ role: m.role, content: m.content }));
  const res = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 4096,
    system,
    messages: userMsgs,
  });
  return { model: "claude-sonnet-4-20250514", content: res.content[0].text, usage: res.usage };
}

async function callGemini(messages) {
  const model = google.getGenerativeModel({ model: "gemini-1.5-pro" });
  const prompt = messages.map(m => `${m.role}: ${m.content}`).join("\n");
  const res = await model.generateContent(prompt);
  const text = res.response.text();
  return { model: "gemini-1.5-pro", content: text, usage: null };
}

// --- Fallback chain ---
const fallbackOrder = { claude: [callClaude, callGPT, callGemini], gpt: [callGPT, callClaude, callGemini], gemini: [callGemini, callClaude, callGPT] };

async function routeWithFallback(route, messages) {
  const chain = fallbackOrder[route] || fallbackOrder.claude;
  for (const caller of chain) {
    try {
      return await caller(messages);
    } catch (e) {
      console.error(`${caller.name} failed: ${e.message}`);
    }
  }
  throw new Error("All models failed");
}

// --- API Endpoint (OpenAI-compatible) ---
app.post("/v1/chat/completions", async (req, res) => {
  try {
    const { messages, model: requestedModel } = req.body;
    if (!messages || !messages.length) return res.status(400).json({ error: "messages required" });

    const lastMsg = messages[messages.length - 1].content;
    const route = classifyPrompt(lastMsg, requestedModel);
    console.log(`Routing → ${route}`);

    const result = await routeWithFallback(route, messages);

    // OpenAI-compatible response format
    res.json({
      id: `omni-${Date.now()}`,
      object: "chat.completion",
      created: Math.floor(Date.now() / 1000),
      model: result.model,
      routed_from: route,
      choices: [{ index: 0, message: { role: "assistant", content: result.content }, finish_reason: "stop" }],
      usage: result.usage,
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// --- Health ---
app.get("/", (req, res) => res.json({ status: "omni running", routes: ["claude", "gpt", "gemini"] }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`OmniRoute on :${PORT}`));
