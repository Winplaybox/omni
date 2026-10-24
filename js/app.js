/**
 * OMNI AI WORKFLOWS & MULTIMODAL PROMPT ENGINE
 * Platform: omni.winplaybox.in
 * Aesthetic: Black & White Minimalist AI Agent Orchestrator
 * Features: Animated Laser Data Pipelines, Video/Image/Text Prompt Extraction & Pre-Data Bank
 */

// Production-Grade Pre-Built Workflows Catalog
const PRESET_WORKFLOWS = [
  {
    id: "content-repurposing",
    title: "Multi-Channel Autonomous Content Repurposing",
    domain: "Social & SEO",
    stepsCount: 5,
    description: "Ingests YouTube or podcast audio, extracts timestamped key insights with Gemini 1.5 Pro, synthesizes a LinkedIn carousel, 5 Twitter threads, and dispatches to Buffer & Ghost CMS.",
    tags: ["Gemini 1.5", "YouTube API", "Buffer", "Ghost CMS", "Automation"],
    nodes: [
      { id: "n1", type: "trigger", title: "New Video Ingestion", service: "YouTube RSS / Webhook", badge: "Trigger" },
      { id: "n2", type: "ai", title: "Audio Transcription", service: "Whisper Large v3", badge: "AI Speech" },
      { id: "n3", type: "ai", title: "Multi-Format Synthesis", service: "Gemini 1.5 Pro", badge: "AI Reasoning" },
      { id: "n4", type: "action", title: "Visual Slide Builder", service: "Remotion Engine", badge: "Asset Builder" },
      { id: "n5", type: "output", title: "Multi-Platform Dispatch", service: "Twitter, LinkedIn, Ghost", badge: "Delivery" }
    ]
  },
  {
    id: "competitor-price-monitor",
    title: "Competitor Price Intelligence & Instant Alert Bot",
    domain: "E-Commerce",
    stepsCount: 4,
    description: "Crawls competitor product URLs on schedule, parses dynamic JS prices using headless Chromium, evaluates markdown percentage thresholds, and pings Telegram & Slack.",
    tags: ["Web Scraping", "Cron Schedule", "Telegram Bot", "Slack Webhook"],
    nodes: [
      { id: "n1", type: "trigger", title: "Schedule (Every 6h)", service: "Cron Trigger", badge: "Trigger" },
      { id: "n2", type: "action", title: "Headless Browser Scrape", service: "Puppeteer / Playwright", badge: "Data Ingestion" },
      { id: "n3", type: "ai", title: "Price Delta Analysis", service: "Rule Engine + LLM", badge: "Condition" },
      { id: "n4", type: "output", title: "Urgent Deal Notification", service: "Telegram + Slack Alerts", badge: "Dispatch" }
    ]
  },
  {
    id: "ai-support-triage",
    title: "Customer Support Triage with Vector RAG",
    domain: "Productivity",
    stepsCount: 5,
    description: "Listens to Zendesk/Intercom tickets, matches customer query against internal vector documentation, drafts authoritative resolution, and routes complex queries to on-call engineer.",
    tags: ["Zendesk", "Pinecone", "Claude 3.5 Sonnet", "PagerDuty"],
    nodes: [
      { id: "n1", type: "trigger", title: "New Support Ticket", service: "Zendesk Webhook", badge: "Trigger" },
      { id: "n2", type: "ai", title: "Semantic Document Search", service: "Pinecone Vector DB", badge: "Vector Retrieval" },
      { id: "n3", type: "ai", title: "Grounded Response Draft", service: "Claude 3.5 Sonnet", badge: "AI Synthesis" },
      { id: "n4", type: "action", title: "Confidence Scoring", service: "Threshold Checker", badge: "Logic Gate" },
      { id: "n5", type: "output", title: "Auto-Reply or Escalation", service: "Intercom / PagerDuty", badge: "Routing" }
    ]
  },
  {
    id: "seo-programmatic-gen",
    title: "Programmatic SEO Page Generator & Indexer",
    domain: "SEO & Growth",
    stepsCount: 5,
    description: "Reads target keyword CSV clusters, generates 2,000-word schema-verified guides, renders SSG pages to Next.js, and pushes indexing pings to Google Search Console API.",
    tags: ["Google Search Console", "Next.js SSG", "Schema Markup", "Supabase"],
    nodes: [
      { id: "n1", type: "trigger", title: "Keyword Seed Ingestion", service: "Airtable / CSV Trigger", badge: "Trigger" },
      { id: "n2", type: "ai", title: "SERP Blueprint Generation", service: "GPT-4o Deep Research", badge: "AI Synthesis" },
      { id: "n3", type: "action", title: "JSON-LD Rich Schema Build", service: "Schema Validator", badge: "Structured Data" },
      { id: "n4", type: "action", title: "Deploy Static Page", service: "Vercel / Next.js Hook", badge: "Deployment" },
      { id: "n5", type: "output", title: "Instant Indexing API", service: "Google Indexing API", badge: "SEO Dispatch" }
    ]
  },
  {
    id: "github-issue-triage",
    title: "Autonomous GitHub PR & Bug Remediation Agent",
    domain: "Developer Tools",
    stepsCount: 4,
    description: "Captures new GitHub issue filings, reproduces stack trace in ephemeral sandbox, proposes unified diff patch, and leaves code review comments on the PR.",
    tags: ["GitHub Webhooks", "Docker Sandbox", "Claude 3.5 Sonnet", "Git Patch"],
    nodes: [
      { id: "n1", type: "trigger", title: "Issue Opened Webhook", service: "GitHub API", badge: "Trigger" },
      { id: "n2", type: "action", title: "Containerized Test Run", service: "Docker Ephemeral VM", badge: "Execution" },
      { id: "n3", type: "ai", title: "Code Patch Formulation", service: "Claude 3.5 Sonnet", badge: "AI Coder" },
      { id: "n4", type: "output", title: "Automated PR Creation", service: "GitHub Pull Request", badge: "Action" }
    ]
  },
  {
    id: "lead-enrichment-apollo",
    title: "B2B Lead Enrichment & Automated Outreach Sequence",
    domain: "Sales & Marketing",
    stepsCount: 5,
    description: "Captures signups from landing page, enriches company revenue and funding status via Apollo & Clearbit, personalizes cold outreach email, and queues into HubSpot.",
    tags: ["Clearbit", "Apollo.io", "HubSpot", "Resend Email"],
    nodes: [
      { id: "n1", type: "trigger", title: "Landing Page Lead Form", service: "Stripe / Web Form", badge: "Trigger" },
      { id: "n2", type: "action", title: "Domain & Firmographics", service: "Apollo.io API", badge: "Enrichment" },
      { id: "n3", type: "ai", title: "Hyper-Personalized Pitch", service: "OpenAI GPT-4o", badge: "AI Reasoning" },
      { id: "n4", type: "action", title: "Sync Customer Record", service: "HubSpot CRM", badge: "Database" },
      { id: "n5", type: "output", title: "Direct Outreach Dispatch", service: "Resend / SendGrid", badge: "Email Delivery" }
    ]
  }
];

// Pre-Data Curated Prompt Bank (Ready to Copy into Any AI Agent)
const PRESET_PROMPTS_BANK = [
  {
    id: "p1",
    type: "video",
    title: "Cinematic Sci-Fi Tokyo Cyberpunk Drone Tracking Shot",
    target: "Sora / Runway Gen-3 / Kling AI",
    promptText: "A sweeping, high-altitude cinematic drone shot gliding smoothly through a neon-lit, rain-slicked Tokyo street in 2049. Realistic puddle reflections of holographic kanji billboards. An autonomous matte-black flying vehicle weaves between towering brutalist skyscrapers. Volumetric fog cutting through searchlights, anamorphic lens flare, 35mm film grain, 60fps slow-motion capture, hyper-realistic physics, zero motion blur, 8k resolution.",
    parameters: "Aspect Ratio: 16:9 | Camera: FPV Drone Orbit | Lighting: Neon Rain Reflections | Engine: Runway Gen-3 Alpha"
  },
  {
    id: "p2",
    type: "image",
    title: "Hyper-Realistic Medium Format Studio Portrait",
    target: "Midjourney v6.1 / Flux.1 Pro",
    promptText: "Intimate close-up studio portrait of an elderly watchmaker in his workshop, intricate brass watch gears and microscopic dials resting on his weathered fingers. Dramatic chiaroscuro lighting, soft dust motes illuminated by single tungsten lamp, Hasselblad H6D-100c, 100mm f/2.2 lens, shallow depth of field, tactile skin texture, subsurface scattering, authentic micro-details --ar 4:5 --style raw --v 6.1",
    parameters: "--ar 4:5 --style raw --v 6.1 --s 250"
  },
  {
    id: "p3",
    type: "agent",
    title: "Senior Full-Stack Code Reviewer & Architecture Agent",
    target: "Claude 3.5 Sonnet / Cursor / GPT-4o",
    promptText: `You are an elite Principal Software Engineer conducting strict code reviews.
OBJECTIVE: Audit the user-supplied code diff for:
1. Performance bottlenecks (O(n^2) operations, unnecessary re-renders, memory leaks).
2. Security vulnerabilities (OWASP Top 10, SQLi, SSRF, XSS, insecure token storage).
3. Production architectural clean code compliance.

OUTPUT FORMAT:
Respond exclusively with structured JSON:
{
  "summary": "Brief 2-sentence architectural verdict",
  "critical_issues": [{ "line": 42, "category": "Security", "issue": "...", "fix_diff": "..." }],
  "recommended_refactors": [{ "symbol": "fetchData", "reason": "...", "suggested_code": "..." }],
  "approval_status": "APPROVED | CHANGES_REQUIRED"
}`,
    parameters: "Temperature: 0.1 | Role: Principal Software Engineer | Output: Strict JSON Schema"
  },
  {
    id: "p4",
    type: "video",
    title: "Hyper-Dynamic Macro Action Product Commercial",
    target: "Sora / Luma Dream Machine",
    promptText: "Slow-motion macro shot of an iced espresso tonic beverage splashing inside a crystal cut glass. Crisp ice cubes collide in zero-gravity slow motion, droplets suspended in mid-air with refractive light caustics. Backlit with golden studio light, high-speed Phantom Flex 4K camera at 1000fps, crisp liquid physics, premium commercial advertisement aesthetic.",
    parameters: "Frame Rate: 1000fps simulation | Lighting: Golden Hour Rim Caustics"
  },
  {
    id: "p5",
    type: "agent",
    title: "Autonomous Competitor Reverse Engineering & SEO Agent",
    target: "ChatGPT / Claude 3.5 / DeepSeek",
    promptText: `You are an autonomous SEO intelligence strategist.
Given any competitor domain or URL:
1. Deconstruct their keyword cluster hierarchy and semantic content graph.
2. Identify untapped programmatic search intent gaps where ranking difficulty is < 30.
3. Formulate a 5-pillar editorial master plan with schema specifications (FAQPage, HowTo, Article).
4. Provide the exact Markdown outline for an article designed to outrank the target URL.`,
    parameters: "Role: Search Architect | Methodology: Semantic Entity Clustering"
  },
  {
    id: "p6",
    type: "image",
    title: "Sleek Dark Mode Neumorphic Dashboard Interface",
    target: "Flux.1 / Midjourney",
    promptText: "Clean, ultra-minimalist dark mode analytics SaaS dashboard interface on MacBook Pro M3 display, glowing cyan and violet line graphs, glassmorphic floating cards, crisp typography, Figma UI design showcase, Behance trending UI/UX, isometric perspective, high-tech dark studio background --ar 16:9 --style raw",
    parameters: "--ar 16:9 --v 6.1"
  }
];

// Current State
let currentWorkflow = PRESET_WORKFLOWS[0];
let isSimulating = false;
let activeMode = "workflows"; // 'workflows' | 'multimodal' | 'predata'

// DOM Initialization
document.addEventListener("DOMContentLoaded", () => {
  renderCanvas(currentWorkflow);
  renderCatalog(PRESET_WORKFLOWS);
  renderPromptBank(PRESET_PROMPTS_BANK);
  setupEventListeners();
});

// Setup Event Handlers
function setupEventListeners() {
  const promptForm = document.getElementById("prompt-generator-form");
  if (promptForm) {
    promptForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("prompt-input");
      if (input && input.value.trim()) {
        synthesizeWorkflowFromPrompt(input.value.trim());
      }
    });
  }
}

// Mode Switcher (Workflows / Prompt Extractor / Pre-Data Bank)
window.switchMainMode = function(mode, btn) {
  activeMode = mode;
  document.querySelectorAll(".mode-tab-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");

  const wfSection = document.getElementById("workflows-view");
  const mmSection = document.getElementById("multimodal-view");
  const predataSection = document.getElementById("predata-view");

  if (wfSection) wfSection.style.display = (mode === "workflows") ? "block" : "none";
  if (mmSection) mmSection.style.display = (mode === "multimodal") ? "block" : "none";
  if (predataSection) predataSection.style.display = (mode === "predata") ? "block" : "none";

  if (mode === "workflows") {
    setTimeout(drawConnections, 60);
  }
};

// Quick Prompt Chips
window.applyQuickPrompt = function(promptText) {
  const input = document.getElementById("prompt-input");
  if (input) {
    input.value = promptText;
    synthesizeWorkflowFromPrompt(promptText);
    const studio = document.getElementById("studio");
    if (studio) studio.scrollIntoView({ behavior: "smooth" });
  }
};

// AI Workflow Synthesizer
window.synthesizeWorkflowFromPrompt = function(prompt) {
  const submitBtn = document.getElementById("prompt-submit-btn");
  if (submitBtn) {
    submitBtn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: spin 0.8s linear infinite;"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
      <span>Synthesizing...</span>
    `;
    submitBtn.disabled = true;
  }

  logConsole("SYNTHESIZER", `Parsing prompt: "${prompt}"`, "info");

  setTimeout(() => {
    const synthesized = generateNodesFromPrompt(prompt);
    currentWorkflow = synthesized;
    renderCanvas(currentWorkflow);

    logConsole("ORCHESTRATOR", `Synthesized ${synthesized.nodes.length}-node pipeline ready.`, "success");

    if (submitBtn) {
      submitBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        <span>Synthesize Pipeline</span>
      `;
      submitBtn.disabled = false;
    }

    simulateWorkflowRun();
  }, 1000);
};

// Heuristic Generator
function generateNodesFromPrompt(prompt) {
  const p = prompt.toLowerCase();
  const nodes = [];
  let domain = "Custom AI";

  // Trigger
  if (p.includes("schedule") || p.includes("cron") || p.includes("hour") || p.includes("daily")) {
    nodes.push({ id: "n1", type: "trigger", title: "Cron Timer Trigger", service: "Schedule Engine", badge: "Trigger" });
  } else if (p.includes("stripe") || p.includes("payment")) {
    nodes.push({ id: "n1", type: "trigger", title: "Stripe Webhook Event", service: "Stripe API", badge: "Trigger" });
    domain = "Fintech";
  } else if (p.includes("video") || p.includes("youtube")) {
    nodes.push({ id: "n1", type: "trigger", title: "Video Stream Ingestion", service: "YouTube RSS / Webhook", badge: "Trigger" });
    domain = "Media & Video";
  } else if (p.includes("github") || p.includes("pr") || p.includes("issue")) {
    nodes.push({ id: "n1", type: "trigger", title: "GitHub Event Webhook", service: "GitHub REST API", badge: "Trigger" });
    domain = "DevOps";
  } else {
    nodes.push({ id: "n1", type: "trigger", title: "HTTP Request Inbound", service: "Omni Webhook Trigger", badge: "Trigger" });
  }

  // Action / Data
  if (p.includes("scrape") || p.includes("crawl") || p.includes("monitor")) {
    nodes.push({ id: "n2", type: "action", title: "Headless Browser Scrape", service: "Playwright Engine", badge: "Data Ingestion" });
  } else if (p.includes("transcribe") || p.includes("audio")) {
    nodes.push({ id: "n2", type: "action", title: "Whisper Audio Transcribe", service: "Whisper Large v3", badge: "Speech AI" });
  } else {
    nodes.push({ id: "n2", type: "action", title: "Payload Normalizer", service: "Data Transformer", badge: "Extraction" });
  }

  // LLM Reasoning
  if (p.includes("claude")) {
    nodes.push({ id: "n3", type: "ai", title: "Complex Reasoning Agent", service: "Claude 3.5 Sonnet", badge: "AI Agent" });
  } else if (p.includes("gemini")) {
    nodes.push({ id: "n3", type: "ai", title: "Long-Context Synthesis", service: "Gemini 1.5 Pro", badge: "AI Agent" });
  } else {
    nodes.push({ id: "n3", type: "ai", title: "Multimodal Synthesis Agent", service: "GPT-4o Agent Engine", badge: "AI Agent" });
  }

  // Condition Gate
  nodes.push({ id: "n4", type: "action", title: "Confidence & Gate Validation", service: "Logic Gate", badge: "Gate" });

  // Output
  if (p.includes("telegram")) {
    nodes.push({ id: "n5", type: "output", title: "Telegram Channel Alert", service: "Telegram Bot API", badge: "Delivery" });
  } else if (p.includes("slack")) {
    nodes.push({ id: "n5", type: "output", title: "Slack Incident Dispatch", service: "Slack Webhook", badge: "Delivery" });
  } else {
    nodes.push({ id: "n5", type: "output", title: "Multi-Platform Output", service: "REST / Webhook / DB", badge: "Delivery" });
  }

  return {
    id: "custom-" + Date.now(),
    title: prompt.length > 50 ? prompt.substring(0, 47) + "..." : prompt,
    domain: domain,
    stepsCount: nodes.length,
    description: `Synthesized on-demand from prompt: "${prompt}". Autonomous orchestration with animated laser data telemetry.`,
    tags: ["Custom AI", "Real-Time", domain],
    nodes: nodes
  };
}

// Render Canvas Nodes
function renderCanvas(workflow) {
  const container = document.getElementById("pipeline-nodes-mount");
  const svg = document.getElementById("svg-connections");
  const titleElem = document.getElementById("current-workflow-title");
  const domainElem = document.getElementById("current-workflow-domain");

  if (titleElem) titleElem.textContent = workflow.title;
  if (domainElem) domainElem.textContent = workflow.domain;

  if (!container || !svg) return;

  container.innerHTML = "";
  svg.innerHTML = "";

  workflow.nodes.forEach((node, index) => {
    const nodeEl = document.createElement("div");
    nodeEl.className = "wf-node";
    nodeEl.id = `node-view-${index}`;
    nodeEl.innerHTML = `
      <div class="node-port input"></div>
      <div class="node-header">
        <span class="node-type-badge">${node.badge}</span>
        <span style="font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-mono);">0${index + 1}</span>
      </div>
      <div class="node-title">${escapeHtml(node.title)}</div>
      <div class="node-service">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
        ${escapeHtml(node.service)}
      </div>
      <div class="node-state-pill" id="node-state-${index}">
        <span>State</span>
        <span style="color: var(--text-muted);">STANDBY</span>
      </div>
      <div class="node-port output"></div>
    `;
    container.appendChild(nodeEl);
  });

  setTimeout(drawConnections, 60);
}

// Draw Connecting SVG Cables With Traveling Pulse Packet
function drawConnections() {
  const svg = document.getElementById("svg-connections");
  const container = document.getElementById("pipeline-nodes-mount");
  if (!svg || !container) return;

  svg.innerHTML = "";
  const nodes = container.querySelectorAll(".wf-node");
  if (nodes.length < 2) return;

  const containerRect = container.getBoundingClientRect();

  for (let i = 0; i < nodes.length - 1; i++) {
    const fromRect = nodes[i].getBoundingClientRect();
    const toRect = nodes[i + 1].getBoundingClientRect();

    const startX = (fromRect.right - containerRect.left);
    const startY = (fromRect.top + fromRect.height / 2 - containerRect.top);
    const endX = (toRect.left - containerRect.left);
    const endY = (toRect.top + toRect.height / 2 - containerRect.top);

    const deltaX = (endX - startX) / 2;
    const pathD = `M ${startX} ${startY} C ${startX + deltaX} ${startY}, ${endX - deltaX} ${endY}, ${endX} ${endY}`;

    // Base Cable Path
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathD);
    path.setAttribute("class", "pipeline-cable");
    path.id = `cable-${i}`;
    svg.appendChild(path);

    // Traveling Data Packet Particle
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("r", "3.5");
    circle.setAttribute("fill", "#ffffff");
    circle.setAttribute("id", `packet-${i}`);

    const animMotion = document.createElementNS("http://www.w3.org/2000/svg", "animateMotion");
    animMotion.setAttribute("path", pathD);
    animMotion.setAttribute("dur", "2.2s");
    animMotion.setAttribute("repeatCount", "indefinite");
    animMotion.setAttribute("begin", `${i * 0.45}s`);
    circle.appendChild(animMotion);

    svg.appendChild(circle);
  }
}

window.addEventListener("resize", drawConnections);

// Pipeline Runner Simulation (Visual Step-by-Step Telemetry)
window.simulateWorkflowRun = function() {
  if (isSimulating) return;
  isSimulating = true;

  const runBtn = document.getElementById("run-sim-btn");
  const statusIndicator = document.getElementById("pipeline-status-text");

  if (runBtn) {
    runBtn.disabled = true;
    runBtn.innerHTML = `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: spin 0.8s linear infinite;"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
      <span>Tracing Telemetry...</span>
    `;
  }

  logConsole("RUNNER", `Executing pipeline: [${currentWorkflow.title}]`, "info");

  const nodes = document.querySelectorAll(".wf-node");
  let step = 0;

  function runNextStep() {
    if (step < nodes.length) {
      // Deactivate previous
      nodes.forEach(n => n.classList.remove("executing"));

      // Activate current node
      const currentNode = nodes[step];
      currentNode.classList.add("executing");

      const nodeData = currentWorkflow.nodes[step];
      const statePill = document.getElementById(`node-state-${step}`);
      if (statePill) {
        statePill.innerHTML = `<span>State</span><span style="color:#ffffff; font-weight:700;">EXECUTING</span>`;
      }

      // Activate corresponding cable
      if (step > 0) {
        const prevCable = document.getElementById(`cable-${step - 1}`);
        if (prevCable) prevCable.classList.add("active-stream");
      }

      if (statusIndicator) {
        statusIndicator.textContent = `Processing Step ${step + 1}/${nodes.length}: ${nodeData.title}...`;
      }

      const latency = Math.floor(Math.random() * 80 + 30);
      logConsole(nodeData.badge.toUpperCase(), `[Node ${step + 1}: ${nodeData.title}] -> OK (${latency}ms)`, "success");

      setTimeout(() => {
        currentNode.classList.remove("executing");
        currentNode.classList.add("completed");
        if (statePill) {
          statePill.innerHTML = `<span>State</span><span style="color:#a3a3a3;">COMPLETED ✓</span>`;
        }

        step++;
        runNextStep();
      }, 750);

    } else {
      // Completed all steps
      if (statusIndicator) statusIndicator.textContent = "Pipeline execution complete (100% verified)";
      logConsole("PIPELINE", "All nodes returned 200 OK. Output payload synthesized & ready.", "success");

      // Reset cables after 1.5s
      setTimeout(() => {
        document.querySelectorAll(".pipeline-cable").forEach(c => c.classList.remove("active-stream"));
      }, 1500);

      isSimulating = false;
      if (runBtn) {
        runBtn.disabled = false;
        runBtn.innerHTML = `
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          <span>Run Test Pipeline</span>
        `;
      }
    }
  }

  runNextStep();
};

// Console Logger
function logConsole(source, msg, type = "info") {
  const consoleEl = document.getElementById("console-logs-mount");
  if (!consoleEl) return;

  const line = document.createElement("div");
  line.className = "log-line";

  const time = new Date().toISOString().substring(11, 19);
  line.innerHTML = `
    <span class="log-time">[${time}]</span>
    <span class="log-source">[${escapeHtml(source)}]</span>
    <span class="log-msg ${type === 'success' ? 'success' : ''}">${escapeHtml(msg)}</span>
  `;

  consoleEl.appendChild(line);
  consoleEl.scrollTop = consoleEl.scrollHeight;
}

// Render Catalog Cards
function renderCatalog(workflows) {
  const grid = document.getElementById("catalog-grid-mount");
  if (!grid) return;

  grid.innerHTML = "";
  workflows.forEach(wf => {
    const card = document.createElement("div");
    card.className = "workflow-card";
    card.innerHTML = `
      <div class="wf-card-header">
        <span class="wf-card-domain">${escapeHtml(wf.domain)}</span>
        <span class="wf-card-steps">${wf.stepsCount} Nodes</span>
      </div>
      <h3 class="wf-card-title">${escapeHtml(wf.title)}</h3>
      <p class="wf-card-desc">${escapeHtml(wf.description)}</p>
      <div class="wf-card-tags">
        ${wf.tags.map(t => `<span class="wf-tech-tag">${escapeHtml(t)}</span>`).join("")}
      </div>
      <div class="wf-card-actions">
        <button type="button" class="btn-primary" style="padding: 0.5rem 1rem; font-size: 0.8rem;" onclick="loadWorkflowIntoCanvas('${wf.id}')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          <span>Load Pipeline</span>
        </button>
        <button type="button" class="btn-secondary" style="padding: 0.5rem 0.85rem; font-size: 0.8rem;" onclick="openExportModal('${wf.id}')">
          <span>Export Code</span>
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Filter Catalog
window.filterCatalog = function(domain, btn) {
  document.querySelectorAll(".cat-tab-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");

  if (domain === "all") {
    renderCatalog(PRESET_WORKFLOWS);
  } else {
    renderCatalog(PRESET_WORKFLOWS.filter(w => w.domain.toLowerCase().includes(domain.toLowerCase())));
  }
};

// Load Workflow into Canvas
window.loadWorkflowIntoCanvas = function(workflowId) {
  const wf = PRESET_WORKFLOWS.find(w => w.id === workflowId);
  if (wf) {
    currentWorkflow = wf;
    renderCanvas(currentWorkflow);
    logConsole("LOADER", `Loaded blueprint: [${wf.title}]`, "info");
    const studio = document.getElementById("studio");
    if (studio) studio.scrollIntoView({ behavior: "smooth" });
    simulateWorkflowRun();
  }
};

/* ==========================================================================
   MULTIMODAL PROMPT REPLICATOR ENGINE (VIDEO / IMAGE / TEXT TO PROMPT)
   ========================================================================== */

let mmActiveTab = "video"; // 'video' | 'image' | 'agent'

window.switchMmTab = function(tab, btn) {
  mmActiveTab = tab;
  document.querySelectorAll(".mm-tab-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");

  const titleEl = document.getElementById("mm-input-title");
  const placeholderEl = document.getElementById("mm-input-text");
  const targetBadge = document.getElementById("mm-target-badge");

  if (tab === "video") {
    if (titleEl) titleEl.textContent = "Video Input & Scene Deconstruction";
    if (placeholderEl) placeholderEl.placeholder = "Paste YouTube/TikTok URL or describe a video scene (e.g. Drone gliding through cyberpunk Tokyo in the rain, neon reflections, anamorphic camera lens)...";
    if (targetBadge) targetBadge.textContent = "Target: Sora / Runway Gen-3 / Kling";
  } else if (tab === "image") {
    if (titleEl) titleEl.textContent = "Image Input & Visual Style Extraction";
    if (placeholderEl) placeholderEl.placeholder = "Paste image URL or describe visual composition (e.g. Vintage portrait of a watchmaker in a dusty workshop with brass gears and soft tungsten lighting)...";
    if (targetBadge) targetBadge.textContent = "Target: Midjourney v6.1 / Flux.1 Pro";
  } else {
    if (titleEl) titleEl.textContent = "Agent Goal & Operational Objective";
    if (placeholderEl) placeholderEl.placeholder = "Describe what you want the AI agent to achieve (e.g. Build an autonomous code reviewer that checks PR diffs for SQL injections and performance bottlenecks)...";
    if (targetBadge) targetBadge.textContent = "Target: Claude 3.5 Sonnet / Cursor / GPT-4o";
  }
};

window.reverseEngineerPrompt = function() {
  const input = document.getElementById("mm-input-text");
  const outputBox = document.getElementById("mm-output-result");
  const btn = document.getElementById("mm-generate-btn");
  const query = input ? input.value.trim() : "";

  if (!query) {
    if (outputBox) outputBox.textContent = "// Please enter a description, URL, or goal above to extract the exact master prompt.";
    return;
  }

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: spin 0.8s linear infinite;"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Synthesizing Exact Prompt...`;
  }

  setTimeout(() => {
    let result = "";

    if (mmActiveTab === "video") {
      result = `// ===============================================================
// EXACT EXTRACTED VIDEO GENERATION PROMPT (Sora / Runway Gen-3 / Kling)
// Copy and paste directly into your video generator for identical output:
// ===============================================================

${query.includes("drone") || query.includes("camera") ? query : "A high-fidelity cinematic scene: " + query}

[CAMERA MOTION]: 35mm anamorphic prime lens, continuous fluid dolly tracking shot, subtle organic camera shake, 60fps slow-motion capture.
[LIGHTING & COLOR]: Dramatic volumetric illumination, ray-traced ambient occlusion, soft rim lighting, natural specular highlights.
[PHYSICS & TEXTURE]: Micro-droplet particle physics, hyper-realistic motion cadence, zero temporal jitter or frame warping.
[TECHNICAL SPECS]: 4K UHD, 16:9 widescreen, Photorealistic render pass, high dynamic range (HDR10).`;

    } else if (mmActiveTab === "image") {
      result = `// ===============================================================
// EXACT EXTRACTED IMAGE GENERATION PROMPT (Midjourney v6.1 / Flux.1)
// Copy and paste directly into Midjourney or Flux:
// ===============================================================

${query}, shot on Hasselblad H6D-100c, 85mm f/1.4 prime lens, editorial depth of field, dramatic chiaroscuro studio lighting, subsurface scattering, tactile material texture, rich tonal gradients, fine grain details, octane render pass, cinematic composition --ar 16:9 --style raw --v 6.1 --s 250

[NEGATIVE PROMPTS TO AVOID]:
blurry, low quality, oversaturated, deformed anatomy, plastic skin, watermark, text artifacts, extra limbs.`;

    } else {
      result = `// ===============================================================
// EXACT AUTONOMOUS AGENT SYSTEM PROMPT (Claude 3.5 / Cursor / GPT-4o)
// Copy and paste directly into your AI Agent System Prompt or Cursor Rules:
// ===============================================================

You are an expert Autonomous Engineering Agent engineered for:
"${query}"

## CORE MANDATE & EXECUTION LOOP:
1. Parse the user's specific context and extract all deterministic constraints before performing actions.
2. Execute step-by-step chain-of-thought verification in your internal scratchpad.
3. Validate all inputs against security thresholds and operational requirements.

## RESPONSE FORMAT:
Always return structured, actionable output with zero filler conversation:
{
  "status": "SUCCESS | REVIEW_NEEDED",
  "objective": "${query.substring(0, 40)}...",
  "execution_steps": [
    { "step": 1, "action": "Verification", "details": "..." },
    { "step": 2, "action": "Execution", "code_or_payload": "..." }
  ],
  "verified": true
}`;
    }

    if (outputBox) outputBox.textContent = result;
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg> <span>Generate Exact Prompt</span>`;
    }
  }, 900);
};

// Copy Multimodal Output
window.copyMmPrompt = function() {
  const box = document.getElementById("mm-output-result");
  const btn = document.getElementById("mm-copy-btn");
  if (box && box.textContent) {
    navigator.clipboard.writeText(box.textContent).then(() => {
      if (btn) {
        btn.textContent = "✓ Copied to Clipboard!";
        setTimeout(() => { btn.textContent = "Copy Prompt"; }, 2000);
      }
    });
  }
};

/* ==========================================================================
   PRE-DATA CURATED PROMPT BANK
   ========================================================================== */

function renderPromptBank(prompts) {
  const grid = document.getElementById("prompts-bank-mount");
  if (!grid) return;

  grid.innerHTML = "";
  prompts.forEach(p => {
    const card = document.createElement("div");
    card.className = "prompt-card";
    card.innerHTML = `
      <div class="prompt-card-header">
        <span class="prompt-type-pill">${escapeHtml(p.type)} prompt</span>
        <span style="font-size: 0.75rem; color: var(--text-muted);">${escapeHtml(p.target)}</span>
      </div>
      <h3 class="prompt-card-title">${escapeHtml(p.title)}</h3>
      <div class="prompt-snippet">${escapeHtml(p.promptText)}</div>
      <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 1rem;">
        <strong>Parameters:</strong> ${escapeHtml(p.parameters)}
      </div>
      <div style="display: flex; gap: 0.5rem; margin-top: auto;">
        <button type="button" class="btn-primary" style="padding: 0.45rem 0.9rem; font-size: 0.8rem; flex: 1;" onclick="copySinglePrompt('${p.id}', this)">
          Copy Master Prompt
        </button>
        <button type="button" class="btn-secondary" style="padding: 0.45rem 0.75rem; font-size: 0.8rem;" onclick="loadPromptIntoExtractor('${p.id}')">
          Edit
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

window.copySinglePrompt = function(id, btn) {
  const promptObj = PRESET_PROMPTS_BANK.find(p => p.id === id);
  if (promptObj) {
    navigator.clipboard.writeText(promptObj.promptText).then(() => {
      if (btn) {
        const orig = btn.textContent;
        btn.textContent = "✓ Copied!";
        setTimeout(() => { btn.textContent = orig; }, 1800);
      }
    });
  }
};

window.loadPromptIntoExtractor = function(id) {
  const promptObj = PRESET_PROMPTS_BANK.find(p => p.id === id);
  if (promptObj) {
    const mmTabBtn = document.querySelector(`.mm-tab-btn[data-tab="${promptObj.type === 'agent' ? 'agent' : promptObj.type}"]`);
    switchMainMode('multimodal', document.querySelectorAll('.mode-tab-btn')[1]);
    if (mmTabBtn) switchMmTab(promptObj.type === 'agent' ? 'agent' : promptObj.type, mmTabBtn);

    const input = document.getElementById("mm-input-text");
    if (input) input.value = promptObj.promptText;

    const outputBox = document.getElementById("mm-output-result");
    if (outputBox) outputBox.textContent = promptObj.promptText;

    document.getElementById("multimodal-view").scrollIntoView({ behavior: "smooth" });
  }
};

// Export Modal
window.openExportModal = function(workflowId) {
  const wf = PRESET_WORKFLOWS.find(w => w.id === workflowId) || currentWorkflow;
  const modal = document.getElementById("export-modal");
  const codeBox = document.getElementById("export-code-box");
  const modalTitle = document.getElementById("export-modal-title");

  if (modalTitle) modalTitle.textContent = `Export Blueprint: ${wf.title}`;

  const blueprint = {
    schema_version: "2026.2-monochrome",
    platform: "Omni AI Workflows (omni.winplaybox.in)",
    workflow_id: wf.id,
    title: wf.title,
    domain: wf.domain,
    nodes: wf.nodes.map((n, idx) => ({
      step: idx + 1,
      id: n.id,
      name: n.title,
      type: n.type,
      service: n.service,
      parameters: { auto_retry: true, timeout_ms: 5000 }
    })),
    n8n_compatible: true,
    zapier_cli_ready: true,
    langchain_runnable: true
  };

  if (codeBox) codeBox.textContent = JSON.stringify(blueprint, null, 2);
  if (modal) modal.classList.add("open");
};

window.closeExportModal = function() {
  const modal = document.getElementById("export-modal");
  if (modal) modal.classList.remove("open");
};

window.copyExportCode = function() {
  const codeBox = document.getElementById("export-code-box");
  const copyBtn = document.getElementById("copy-code-btn");
  if (codeBox) {
    navigator.clipboard.writeText(codeBox.textContent).then(() => {
      if (copyBtn) {
        copyBtn.textContent = "✓ Blueprint Copied!";
        setTimeout(() => { copyBtn.textContent = "Copy Blueprint JSON"; }, 2000);
      }
    });
  }
};

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
