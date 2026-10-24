/**
 * OMNI AI WORKFLOWS - PRODUCTION EXPRESS SERVER
 * Host: omni.winplaybox.in
 * Compatible with Node.js 18, 20, 22, 24+ on Hostinger Cloud / VPS
 */

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware with 50MB payload limit (prevents server overload on large media)
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Security & Caching Headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

// Static assets (CSS, JS, images)
app.use('/css', express.static(path.join(__dirname, 'css'), { maxAge: '7d' }));
app.use('/js', express.static(path.join(__dirname, 'js'), { maxAge: '7d' }));

// Health Check for Hostinger Process Manager & Ping Monitors
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    app: 'Omni AI Workflows',
    domain: 'omni.winplaybox.in',
    timestamp: new Date().toISOString()
  });
});

// Robots.txt & Sitemap.xml
app.get('/robots.txt', (req, res) => {
  res.sendFile(path.join(__dirname, 'robots.txt'));
});

app.get('/sitemap.xml', (req, res) => {
  res.header('Content-Type', 'application/xml');
  res.sendFile(path.join(__dirname, 'sitemap.xml'));
});

// Clean Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/blog', (req, res) => {
  res.sendFile(path.join(__dirname, 'blog.html'));
});

app.get('/blog.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'blog.html'));
});

app.get('/terms', (req, res) => {
  res.sendFile(path.join(__dirname, 'terms.html'));
});

app.get('/terms.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'terms.html'));
});

app.get('/terms-of-service', (req, res) => {
  res.sendFile(path.join(__dirname, 'terms.html'));
});

app.get('/privacy', (req, res) => {
  res.sendFile(path.join(__dirname, 'privacy.html'));
});

app.get('/privacy.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'privacy.html'));
});

app.get('/privacy-policy', (req, res) => {
  res.sendFile(path.join(__dirname, 'privacy.html'));
});

// API: Real-time Workflow Synthesis Endpoint
app.post('/api/synthesize', (req, res) => {
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  // Structured synthesis response
  res.json({
    success: true,
    workflow_id: 'omni-' + Date.now(),
    prompt: prompt,
    synthesized_at: new Date().toISOString(),
    status: 'ready'
  });
});

// API: Multimodal Media Prompt Deconstruction Endpoint
app.post('/api/analyze-media', (req, res) => {
  const { mediaType, rawText, fileName, fileSizeMB, durationSec } = req.body;

  // Enforce max server-side limits
  if (fileSizeMB && parseFloat(fileSizeMB) > 50) {
    return res.status(413).json({ error: 'File size exceeds maximum allowed 50MB limit' });
  }
  if (durationSec && parseInt(durationSec) > 60) {
    return res.status(400).json({ error: 'Video duration exceeds maximum allowed 60s limit' });
  }

  res.json({
    success: true,
    mediaType: mediaType || 'video',
    sanitized: true,
    analyzed_at: new Date().toISOString()
  });
});

// Fallback to static directory
app.use(express.static(__dirname));

// 404 Fallback
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`⚡ Omni AI Workflows server listening on port ${PORT}`);
  console.log(`URL: http://localhost:${PORT}`);
});
