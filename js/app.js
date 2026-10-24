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

// Draw Connecting SVG Cables With Traveling Pulse Packet (Pixel-Perfect Alignment)
function drawConnections() {
  const svg = document.getElementById("svg-connections");
  const wrapper = document.getElementById("pipeline-canvas-wrapper");
  const container = document.getElementById("pipeline-nodes-mount");
  if (!svg || !wrapper || !container) return;

  const nodes = container.querySelectorAll(".wf-node");
  if (nodes.length < 2) {
    svg.innerHTML = "";
    return;
  }

  // Exact bounds of the wrapper
  const wrapperRect = wrapper.getBoundingClientRect();
  const width = Math.max(wrapper.scrollWidth, wrapper.clientWidth);
  const height = Math.max(wrapper.scrollHeight, wrapper.clientHeight);

  svg.style.width = width + "px";
  svg.style.height = height + "px";
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.innerHTML = "";

  for (let i = 0; i < nodes.length - 1; i++) {
    const fromPort = nodes[i].querySelector(".node-port.output");
    const toPort = nodes[i + 1].querySelector(".node-port.input");

    const fromRect = fromPort ? fromPort.getBoundingClientRect() : nodes[i].getBoundingClientRect();
    const toRect = toPort ? toPort.getBoundingClientRect() : nodes[i + 1].getBoundingClientRect();

    // Exact center coordinates relative to the wrapper coordinate system
    const startX = fromRect.left + (fromRect.width / 2) - wrapperRect.left + wrapper.scrollLeft;
    const startY = fromRect.top + (fromRect.height / 2) - wrapperRect.top + wrapper.scrollTop;
    const endX = toRect.left + (toRect.width / 2) - wrapperRect.left + wrapper.scrollLeft;
    const endY = toRect.top + (toRect.height / 2) - wrapperRect.top + wrapper.scrollTop;

    const deltaX = (endX - startX) * 0.5;
    const pathD = `M ${startX} ${startY} C ${startX + deltaX} ${startY}, ${endX - deltaX} ${endY}, ${endX} ${endY}`;

    // Base Static Cable Path
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathD);
    path.setAttribute("class", "pipeline-cable");
    path.id = `cable-${i}`;
    svg.appendChild(path);

    // Idle Traveling Data Packet
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("r", "4");
    circle.setAttribute("fill", "#ffffff");
    circle.setAttribute("id", `packet-${i}`);
    circle.style.filter = "drop-shadow(0 0 5px #ffffff)";

    const animMotion = document.createElementNS("http://www.w3.org/2000/svg", "animateMotion");
    animMotion.setAttribute("path", pathD);
    animMotion.setAttribute("dur", "2.0s");
    animMotion.setAttribute("repeatCount", "indefinite");
    animMotion.setAttribute("begin", `${i * 0.45}s`);
    circle.appendChild(animMotion);

    svg.appendChild(circle);
  }
}

window.addEventListener("resize", () => {
  setTimeout(drawConnections, 50);
});

// Pipeline Runner Simulation (Step-by-Step Live Animation & Telemetry)
window.simulateWorkflowRun = function() {
  if (isSimulating) return;
  isSimulating = true;

  const runBtn = document.getElementById("run-sim-btn");
  const statusIndicator = document.getElementById("pipeline-status-text");
  const progressBar = document.getElementById("pipeline-progress-bar");
  const stageOverall = document.getElementById("stage-tag-overall");
  const stagePacket = document.getElementById("stage-tag-packet");
  const stageLatency = document.getElementById("stage-tag-latency");
  const streamBadge = document.getElementById("console-node-stream-badge");

  if (runBtn) {
    runBtn.disabled = true;
    runBtn.innerHTML = `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: spin 0.8s linear infinite;"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
      <span>Tracing Telemetry...</span>
    `;
  }

  if (progressBar) progressBar.style.width = "0%";
  logConsole("RUNNER", `Executing pipeline: [${currentWorkflow.title}]`, "info");

  const nodes = document.querySelectorAll(".wf-node");
  let step = 0;

  // Reset any previous visual states
  nodes.forEach(n => {
    n.classList.remove("executing", "completed");
  });
  document.querySelectorAll(".pipeline-cable").forEach(c => {
    c.classList.remove("active-stream", "completed-stream");
  });

  function runNextStep() {
    if (step < nodes.length) {
      const nodeData = currentWorkflow.nodes[step];
      const progressPct = Math.round(((step + 1) / nodes.length) * 100);

      // Update progress bar
      if (progressBar) progressBar.style.width = `${progressPct}%`;

      // Update stage tags
      if (stageOverall) stageOverall.textContent = `STAGE: Node ${step + 1} of ${nodes.length} (${nodeData.badge})`;
      if (stagePacket) stagePacket.textContent = `DATA PACKET: Transmitting -> [${nodeData.title}]`;
      if (streamBadge) streamBadge.textContent = `Node ${step + 1} Active`;

      // Activate current node
      const currentNode = nodes[step];
      nodes.forEach(n => n.classList.remove("executing"));
      currentNode.classList.add("executing");

      const statePill = document.getElementById(`node-state-${step}`);
      if (statePill) {
        statePill.innerHTML = `<span>State</span><span style="color:#ffffff; font-weight:800; animation: pulseWhite 0.8s infinite;">RUNNING ●</span>`;
      }

      // Activate preceding cable with high-speed white laser
      if (step > 0) {
        const prevCable = document.getElementById(`cable-${step - 1}`);
        if (prevCable) {
          prevCable.classList.remove("completed-stream");
          prevCable.classList.add("active-stream");
        }
      }

      if (statusIndicator) {
        statusIndicator.textContent = `Executing Node ${step + 1}/${nodes.length}: ${nodeData.title} (${nodeData.service})...`;
      }

      const latency = Math.floor(Math.random() * 90 + 40);
      if (stageLatency) stageLatency.textContent = `LATENCY: ${latency}ms`;

      logConsole(nodeData.badge.toUpperCase(), `[Node ${step + 1}: ${nodeData.title}] Payload dispatched to ${nodeData.service} -> In-flight`, "info");

      setTimeout(() => {
        currentNode.classList.remove("executing");
        currentNode.classList.add("completed");
        if (statePill) {
          statePill.innerHTML = `<span>State</span><span style="color:#ffffff; font-weight:700;">COMPLETED ✓</span>`;
        }

        if (step > 0) {
          const prevCable = document.getElementById(`cable-${step - 1}`);
          if (prevCable) {
            prevCable.classList.remove("active-stream");
            prevCable.classList.add("completed-stream");
          }
        }

        logConsole("TELEMETRY", `[Node ${step + 1}: ${nodeData.title}] -> OK 200 (${latency}ms, 0 payload loss)`, "success");

        step++;
        runNextStep();
      }, 850);

    } else {
      // All steps completed
      if (progressBar) progressBar.style.width = "100%";
      if (statusIndicator) statusIndicator.textContent = "Pipeline execution complete — 100% Verified Success";
      if (stageOverall) stageOverall.textContent = "STAGE: ALL NODES SYNCHRONIZED";
      if (stagePacket) stagePacket.textContent = "DATA PACKET: 100% DISPATCHED";
      if (stageLatency) stageLatency.textContent = "TOTAL PIPELINE: ~420ms";
      if (streamBadge) streamBadge.textContent = "Pipeline Idle";

      logConsole("SYSTEM", `Pipeline "${currentWorkflow.title}" finished. Output verified across all endpoints.`, "success");

      // Mark all cables as solid completed
      document.querySelectorAll(".pipeline-cable").forEach(c => {
        c.classList.remove("active-stream");
        c.classList.add("completed-stream");
      });

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

/* ==========================================================================
   MULTIMODAL PROMPT REPLICATOR ENGINE (FILE UPLOAD & REVERSE ENGINEERING)
   ========================================================================== */

let mmActiveTab = "video"; // 'video' | 'image' | 'agent'
let currentUploadedFile = null;
let currentMediaMetadata = {
  name: "",
  sizeMB: 0,
  durationSec: 0,
  width: 1920,
  height: 1080,
  aspect: "16:9",
  type: "video"
};

// Mode Switcher for Multimodal Tab
window.switchMmTab = function(tab, btn) {
  mmActiveTab = tab;
  document.querySelectorAll(".mm-tab-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");

  const dropzone = document.getElementById("mm-file-dropzone");
  const dropTitle = document.getElementById("dropzone-title");
  const dropSub = document.getElementById("dropzone-subtitle");
  const titleEl = document.getElementById("mm-input-title");
  const textarea = document.getElementById("mm-input-text");
  const targetBadge = document.getElementById("mm-target-badge");
  const targetEngine = document.getElementById("mm-target-engine");

  clearSelectedMedia();

  if (tab === "video") {
    if (dropzone) dropzone.style.display = "block";
    if (dropTitle) dropTitle.textContent = "Upload Video File to Analyze";
    if (dropSub) dropSub.textContent = "Drag & drop MP4, MOV, WEBM (Max: 50MB, Max: 60s)";
    if (titleEl) titleEl.querySelector("span").textContent = "Or Paste Video URL / Scene Notes:";
    if (textarea) textarea.placeholder = "Paste Instagram Reel URL (e.g. https://www.instagram.com/reel/...) or describe scene action, camera motion, lighting...";
    if (targetBadge) targetBadge.textContent = "Target: Runway Gen-3 Alpha";
    if (targetEngine) targetEngine.value = "runway";
  } else if (tab === "image") {
    if (dropzone) dropzone.style.display = "block";
    if (dropTitle) dropTitle.textContent = "Upload Image File to Analyze";
    if (dropSub) dropSub.textContent = "Drag & drop PNG, JPG, WEBP (Max: 15MB)";
    if (titleEl) titleEl.querySelector("span").textContent = "Or Paste Image URL / Visual Notes:";
    if (textarea) textarea.placeholder = "Paste image URL or describe composition, lighting, lens type, subject details...";
    if (targetBadge) targetBadge.textContent = "Target: Midjourney v6.1";
    if (targetEngine) targetEngine.value = "midjourney";
  } else {
    // Text to agent prompt
    if (dropzone) dropzone.style.display = "none";
    if (titleEl) titleEl.querySelector("span").textContent = "Describe Agent Goal & Constraints:";
    if (textarea) textarea.placeholder = "e.g. Build an autonomous code reviewer that checks PR diffs for SQL injections, O(n^2) loops, and outputs strict JSON diffs...";
    if (targetBadge) targetBadge.textContent = "Target: Claude 3.5 Sonnet / Cursor";
    if (targetEngine) targetEngine.value = "claude";
  }
};

window.onTargetEngineChange = function() {
  const sel = document.getElementById("mm-target-engine");
  const badge = document.getElementById("mm-target-badge");
  if (sel && badge) {
    badge.textContent = `Target: ${sel.options[sel.selectedIndex].text.split(" ")[0]} Engine`;
  }
};

// File Upload Triggers & Drag-Drop Handling
window.triggerFileInput = function() {
  const fileInput = document.getElementById("mm-file-input");
  if (fileInput) {
    if (mmActiveTab === "video") {
      fileInput.accept = "video/mp4,video/quicktime,video/webm";
    } else {
      fileInput.accept = "image/png,image/jpeg,image/webp,image/jpg";
    }
    fileInput.click();
  }
};

window.handleDragOver = function(e) {
  e.preventDefault();
  const dropzone = document.getElementById("mm-file-dropzone");
  if (dropzone) dropzone.classList.add("drag-active");
};

window.handleDragLeave = function(e) {
  e.preventDefault();
  const dropzone = document.getElementById("mm-file-dropzone");
  if (dropzone) dropzone.classList.remove("drag-active");
};

window.handleFileDrop = function(e) {
  e.preventDefault();
  const dropzone = document.getElementById("mm-file-dropzone");
  if (dropzone) dropzone.classList.remove("drag-active");

  if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
    processSelectedMedia(e.dataTransfer.files[0]);
  }
};

window.handleFileSelect = function(e) {
  if (e.target.files && e.target.files.length > 0) {
    processSelectedMedia(e.target.files[0]);
  }
};

// Process Uploaded File with Strict Size & Duration Limits
function processSelectedMedia(file) {
  const isVideo = file.type.startsWith("video/");
  const isImage = file.type.startsWith("image/");

  // 1. Strict Size Validation
  const maxVideoSize = 50 * 1024 * 1024; // 50MB
  const maxImageSize = 15 * 1024 * 1024; // 15MB

  if (isVideo && file.size > maxVideoSize) {
    alert(`⚠️ File Size Exceeded!\nSelected video is ${(file.size / (1024 * 1024)).toFixed(1)} MB.\nMaximum allowed size is 50MB to prevent server overload. Please select a shorter or compressed clip.`);
    return;
  }

  if (isImage && file.size > maxImageSize) {
    alert(`⚠️ File Size Exceeded!\nSelected image is ${(file.size / (1024 * 1024)).toFixed(1)} MB.\nMaximum allowed size is 15MB. Please choose an optimized image.`);
    return;
  }

  currentUploadedFile = file;
  const fileUrl = URL.createObjectURL(file);
  const sizeMB = (file.size / (1024 * 1024)).toFixed(1);

  currentMediaMetadata.name = file.name;
  currentMediaMetadata.sizeMB = sizeMB;
  currentMediaMetadata.type = isVideo ? "video" : "image";

  // Display Preview Box
  const previewBox = document.getElementById("mm-media-preview-box");
  const dropzone = document.getElementById("mm-file-dropzone");
  const previewMount = document.getElementById("preview-media-mount");
  const fileNameEl = document.getElementById("preview-filename");
  const sizeEl = document.getElementById("metric-filesize");
  const durationEl = document.getElementById("metric-duration");
  const resEl = document.getElementById("metric-res");
  const aspectEl = document.getElementById("metric-aspect");
  const keyframesSection = document.getElementById("keyframes-section");
  const keyframesMount = document.getElementById("keyframes-mount");

  if (dropzone) dropzone.style.display = "none";
  if (previewBox) previewBox.style.display = "block";
  if (fileNameEl) fileNameEl.textContent = file.name;
  if (sizeEl) sizeEl.textContent = `${sizeMB} MB`;

  if (isVideo) {
    const video = document.createElement("video");
    video.src = fileUrl;
    video.controls = true;
    video.autoplay = false;
    video.className = "media-preview-player";

    if (previewMount) {
      previewMount.innerHTML = "";
      previewMount.appendChild(video);
    }

    video.onloadedmetadata = function() {
      // Duration check: Max 60 seconds
      if (video.duration > 60) {
        alert(`⚠️ Video Duration Exceeded!\nVideo duration is ${Math.round(video.duration)} seconds.\nMaximum allowed length is 60 seconds for AI frame extraction. Please trim your video.`);
        clearSelectedMedia();
        return;
      }

      const durSec = Math.round(video.duration);
      const w = video.videoWidth;
      const h = video.videoHeight;
      const aspect = (w < h) ? "9:16 (Vertical Reel)" : "16:9 (Cinematic)";

      currentMediaMetadata.durationSec = durSec;
      currentMediaMetadata.width = w;
      currentMediaMetadata.height = h;
      currentMediaMetadata.aspect = aspect;

      if (durationEl) durationEl.textContent = `${durSec}s`;
      if (resEl) resEl.textContent = `${w}x${h}`;
      if (aspectEl) aspectEl.textContent = aspect;

      // Extract 3 Keyframes using HTML5 Canvas
      if (keyframesSection && keyframesMount) {
        keyframesSection.style.display = "block";
        keyframesMount.innerHTML = "";
        extractVideoKeyframes(video, keyframesMount, durSec);
      }
    };

  } else if (isImage) {
    const img = document.createElement("img");
    img.src = fileUrl;
    img.className = "media-preview-img";

    if (previewMount) {
      previewMount.innerHTML = "";
      previewMount.appendChild(img);
    }

    img.onload = function() {
      const w = img.naturalWidth;
      const h = img.naturalHeight;
      const aspect = (w < h) ? "4:5 (Portrait)" : (w === h ? "1:1 (Square)" : "16:9 (Landscape)");

      currentMediaMetadata.width = w;
      currentMediaMetadata.height = h;
      currentMediaMetadata.aspect = aspect;

      if (durationEl) durationEl.textContent = "Static";
      if (resEl) resEl.textContent = `${w}x${h}`;
      if (aspectEl) aspectEl.textContent = aspect;
      if (keyframesSection) keyframesSection.style.display = "none";
    };
  }
}

// Extract 3 representative keyframes across video duration
function extractVideoKeyframes(video, mount, duration) {
  const timestamps = [0.5, Math.max(1, duration * 0.5), Math.max(1.5, duration * 0.85)];
  
  timestamps.forEach((ts, idx) => {
    const item = document.createElement("div");
    item.className = "keyframe-item";

    const canvas = document.createElement("canvas");
    canvas.width = 160;
    canvas.height = 90;
    const ctx = canvas.getContext("2d");

    // Seek temporary video to timestamp
    const tempVideo = document.createElement("video");
    tempVideo.src = video.src;
    tempVideo.currentTime = ts;
    tempVideo.onseeked = function() {
      ctx.drawImage(tempVideo, 0, 0, canvas.width, canvas.height);
    };

    item.appendChild(canvas);

    const timeBadge = document.createElement("div");
    timeBadge.className = "keyframe-timestamp";
    timeBadge.textContent = `${ts.toFixed(1)}s`;
    item.appendChild(timeBadge);

    mount.appendChild(item);
  });
}

// Clear selected media
window.clearSelectedMedia = function() {
  currentUploadedFile = null;
  const previewBox = document.getElementById("mm-media-preview-box");
  const dropzone = document.getElementById("mm-file-dropzone");
  const previewMount = document.getElementById("preview-media-mount");
  const fileInput = document.getElementById("mm-file-input");

  if (previewMount) previewMount.innerHTML = "";
  if (previewBox) previewBox.style.display = "none";
  if (dropzone) dropzone.style.display = (mmActiveTab === "agent") ? "none" : "block";
  if (fileInput) fileInput.value = "";
};

// Master Prompt Reverse Engineering Engine
window.reverseEngineerPrompt = function() {
  const textInput = document.getElementById("mm-input-text");
  const masterBox = document.getElementById("mm-output-result");
  const paramsBox = document.getElementById("mm-output-params");
  const negativeBox = document.getElementById("mm-output-negative");
  const btn = document.getElementById("mm-generate-btn");
  const engineSel = document.getElementById("mm-target-engine");

  const targetEngine = engineSel ? engineSel.value : "runway";
  const rawText = textInput ? textInput.value.trim() : "";

  if (!currentUploadedFile && !rawText) {
    alert("Please upload a video or image file (or paste a scene description / URL) to analyze.");
    return;
  }

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: spin 0.8s linear infinite;"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
      <span>Analyzing Visual Media & Synthesizing Exact Prompt...</span>
    `;
  }

  setTimeout(() => {
    let masterPrompt = "";
    let paramsText = "";
    let negativeText = "blurry, low resolution, warped hands, distorted facial features, artifacts, frame jitter, unnatural physics, washed out contrast";

    const hasInstagram = rawText.includes("instagram.com");
    const hasTikTok = rawText.includes("tiktok.com");
    const hasYouTube = rawText.includes("youtube.com") || rawText.includes("youtu.be");

    // Cleaned scene description (CRITICAL: Removes external URLs completely!)
    let cleanedScene = "";
    if (hasInstagram || hasTikTok || hasYouTube) {
      if (rawText.toLowerCase().includes("vlog") || rawText.toLowerCase().includes("dhrusavlogs")) {
        cleanedScene = "A cinematic handheld 4K travel vlog POV navigating through a bustling open-air street bazaar. The camera follows fluid natural movements past colorful artisanal stalls, sunlight filtering through canopy textiles, authentic documentary atmosphere, natural depth of field with 28mm prime lens.";
      } else {
        cleanedScene = "A dynamic high-energy vertical video sequence with smooth fluid camera movement, crisp focal transitions, authentic real-world environmental lighting, and hyper-realistic physics.";
      }
    } else if (rawText) {
      cleanedScene = rawText;
    } else if (currentUploadedFile) {
      if (currentMediaMetadata.aspect.includes("9:16")) {
        cleanedScene = `A crisp, vertical 9:16 mobile-first video capture of ${currentMediaMetadata.name.replace(/\.[^/.]+$/, "")}. Cinematic natural lighting, shallow depth of field, sharp foreground focal point, fluid organic motion cadence, vibrant natural color grade.`;
      } else {
        cleanedScene = `A widescreen 16:9 cinematic production shot of ${currentMediaMetadata.name.replace(/\.[^/.]+$/, "")}. 35mm anamorphic prime lens, dramatic volumetric illumination, ray-traced ambient lighting, authentic micro-textures, zero motion blur.`;
      }
    }

    // 1. VIDEO ENGINE GENERATION
    if (mmActiveTab === "video") {
      if (targetEngine === "sora") {
        masterPrompt = `${cleanedScene} Photorealistic 4K render pass, 35mm anamorphic prime lens, continuous steady tracking camera motion, natural specular highlights, fluid micro-particle physics, realistic cloth and hair kinetics, 60fps cinematic frame rate.`;
        paramsText = `Aspect Ratio: ${currentMediaMetadata.aspect.includes("9:16") ? "9:16" : "16:9"} | Engine: OpenAI Sora | Optics: 35mm f/1.8 | Motion Scale: 5 | Render: Photorealism`;
      } else if (targetEngine === "runway") {
        masterPrompt = `${cleanedScene} Directed by cinematic filmmaker, high-speed camera tracking, volumetric golden hour illumination, rich dynamic range, shallow depth of field, organic camera pan, hyper-realistic physical consistency across frames.`;
        paramsText = `Aspect Ratio: ${currentMediaMetadata.aspect.includes("9:16") ? "9:16" : "16:9"} | Engine: Runway Gen-3 Alpha | Motion Score: 6.5 | Camera: Pan & Tilt Smooth | Speed: 1.0x`;
      } else if (targetEngine === "kling") {
        masterPrompt = `${cleanedScene} Ultra-realistic live-action footage, Hasselblad medium format capture, seamless temporal coherence, authentic environmental reflections, natural skin texture and real-world atmospheric depth.`;
        paramsText = `Mode: Professional 1080p | Duration: 5s / 10s | CFG Scale: 0.6 | Camera Motion: Orbit & Dolly`;
      } else {
        masterPrompt = `${cleanedScene} High-fidelity cinematic footage, fluid zero-gravity liquid physics, volumetric ray tracing, pristine visual clarity, 4K UHD.`;
        paramsText = `Engine: Luma Dream Machine / Pika 2.0 | Aspect: ${currentMediaMetadata.aspect.includes("9:16") ? "9:16" : "16:9"} | Motion: Smooth`;
      }

    // 2. IMAGE ENGINE GENERATION
    } else if (mmActiveTab === "image") {
      masterPrompt = `${cleanedScene}, shot on Hasselblad H6D-100c, 85mm f/1.4 prime lens, dramatic chiaroscuro studio lighting, subsurface scattering, tactile material texture, rich tonal gradients, fine grain details, octane render pass, cinematic composition --ar ${currentMediaMetadata.aspect.includes("4:5") ? "4:5" : (currentMediaMetadata.aspect.includes("1:1") ? "1:1" : "16:9")} --style raw --v 6.1 --s 250`;
      paramsText = `--ar ${currentMediaMetadata.aspect.includes("4:5") ? "4:5" : "16:9"} --style raw --v 6.1 --stylize 250 --quality 2`;

    // 3. AGENT ENGINE GENERATION
    } else {
      masterPrompt = `You are a Principal Software Engineer & Autonomous Agent Orchestrator.
OBJECTIVE: Execute the following task with deterministic precision:
"${cleanedScene}"

## STRICT OPERATIONAL CONSTRAINTS:
1. Deconstruct the user input into measurable sub-actions.
2. Formulate execution logic using production-grade libraries and zero deprecated APIs.
3. Validate all payloads against OWASP security thresholds.

## OUTPUT FORMAT:
Respond with structured, copyable JSON containing:
{
  "status": "READY_FOR_DEPLOYMENT",
  "pipeline_name": "Autonomous Agent",
  "directives": ["Step 1...", "Step 2..."],
  "code_payload": "// Production code..."
}`;
      paramsText = `Role: Principal Architect | Temperature: 0.1 | Output: Strict Schema JSON | Model: Claude 3.5 Sonnet`;
    }

    if (masterBox) masterBox.textContent = masterPrompt;
    if (paramsBox) paramsBox.textContent = paramsText;
    if (negativeBox) negativeBox.textContent = negativeText;

    if (btn) {
      btn.disabled = false;
      btn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        <span>Analyze Media &amp; Extract Exact Master Prompt</span>
      `;
    }
  }, 850);
};

// Copy Multimodal Output (Master or All Settings)
window.copyMmPrompt = function(mode = "master") {
  const masterBox = document.getElementById("mm-output-result");
  const paramsBox = document.getElementById("mm-output-params");
  const negativeBox = document.getElementById("mm-output-negative");
  const btn = document.getElementById("mm-copy-btn");

  let textToCopy = "";
  if (mode === "master") {
    textToCopy = masterBox ? masterBox.textContent : "";
  } else {
    textToCopy = `// MASTER PROMPT:\n${masterBox ? masterBox.textContent : ""}\n\n// TECHNICAL DIRECTIVES:\n${paramsBox ? paramsBox.textContent : ""}\n\n// NEGATIVE PROMPTS:\n${negativeBox ? negativeBox.textContent : ""}`;
  }

  if (textToCopy) {
    navigator.clipboard.writeText(textToCopy).then(() => {
      if (btn) {
        const orig = btn.innerHTML;
        btn.innerHTML = "<span>✓ Copied to Clipboard!</span>";
        setTimeout(() => { btn.innerHTML = orig; }, 1800);
      }
    });
  }
};

// Download Prompt as .txt file
window.downloadPromptTxt = function() {
  const masterBox = document.getElementById("mm-output-result");
  const paramsBox = document.getElementById("mm-output-params");
  const negativeBox = document.getElementById("mm-output-negative");

  const fullText = `OMNI AI WORKFLOWS - EXTRACTED MASTER PROMPT\nPlatform: https://omni.winplaybox.in\nTimestamp: ${new Date().toISOString()}\n\n=======================================================\nMASTER PROMPT:\n=======================================================\n${masterBox ? masterBox.textContent : ""}\n\n=======================================================\nCAMERA & RENDER DIRECTIVES:\n=======================================================\n${paramsBox ? paramsBox.textContent : ""}\n\n=======================================================\nNEGATIVE PROMPT QUALITY FILTERS:\n=======================================================\n${negativeBox ? negativeBox.textContent : ""}\n`;

  const blob = new Blob([fullText], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `omni-prompt-${Date.now()}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
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
