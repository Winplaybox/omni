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
    domain: "Productivity",
    stepsCount: 5,
    description: "Captures signups from landing page, enriches company revenue and funding status via Apollo & Clearbit, personalizes cold outreach email, and queues into HubSpot.",
    tags: ["Clearbit", "Apollo.io", "HubSpot", "Resend Email", "Productivity"],
    nodes: [
      { id: "n1", type: "trigger", title: "Landing Page Lead Form", service: "Stripe / Web Form", badge: "Trigger" },
      { id: "n2", type: "action", title: "Domain & Firmographics", service: "Apollo.io API", badge: "Enrichment" },
      { id: "n3", type: "ai", title: "Hyper-Personalized Pitch", service: "OpenAI GPT-4o", badge: "AI Reasoning" },
      { id: "n4", type: "action", title: "Sync Customer Record", service: "HubSpot CRM", badge: "Database" },
      { id: "n5", type: "output", title: "Direct Outreach Dispatch", service: "Resend / SendGrid", badge: "Email Delivery" }
    ]
  },
  {
    id: "shopify-inventory-sync",
    title: "Omnichannel E-Commerce Inventory & Restock Automator",
    domain: "E-Commerce",
    stepsCount: 5,
    description: "Real-time webhook sync across Shopify, Amazon FBA, and WooCommerce. Predicts stock-out dates with time-series forecasting and auto-drafts supplier purchase orders.",
    tags: ["Shopify Webhooks", "Amazon FBA", "Inventory Sync", "E-Commerce", "Automation"],
    nodes: [
      { id: "n1", type: "trigger", title: "Order Placed Webhook", service: "Shopify Store API", badge: "Trigger" },
      { id: "n2", type: "action", title: "Stock Ledger Sync", service: "PostgreSQL Database", badge: "Data Store" },
      { id: "n3", type: "ai", title: "Depletion Velocity Forecaster", service: "Predictive Analytics Agent", badge: "Forecasting" },
      { id: "n4", type: "action", title: "Supplier PO Generation", service: "PDF / ERP Generator", badge: "Accounting" },
      { id: "n5", type: "output", title: "Vendor Dispatch & Slack Alert", service: "SMTP & Slack Webhook", badge: "Dispatch" }
    ]
  },
  {
    id: "k8s-incident-postmortem",
    title: "Kubernetes Auto-Incident Triage & Postmortem Writer",
    domain: "Developer Tools",
    stepsCount: 5,
    description: "Detects Datadog/Prometheus CrashLoopBackOff alerts, aggregates last 500 lines of Pod logs, generates root-cause RCA, and posts Notion incident postmortem page.",
    tags: ["Kubernetes", "Datadog", "Prometheus", "Notion API", "Developer Tools"],
    nodes: [
      { id: "n1", type: "trigger", title: "Prometheus Alertmanager", service: "Webhook Trigger", badge: "Trigger" },
      { id: "n2", type: "action", title: "Cluster Log Extraction", service: "kubectl / Loki API", badge: "Log Ingestion" },
      { id: "n3", type: "ai", title: "Root Cause RCA Investigator", service: "Claude 3.5 Sonnet", badge: "AI Agent" },
      { id: "n4", type: "action", title: "Incident Runbook Execution", service: "Argo Workflows", badge: "Remediation" },
      { id: "n5", type: "output", title: "Notion Postmortem Document", service: "Notion API & Slack", badge: "Documentation" }
    ]
  }
];

// Current State
let currentWorkflow = PRESET_WORKFLOWS[0];
let isSimulating = false;

// DOM Initialization
document.addEventListener("DOMContentLoaded", () => {
  try {
    if (typeof renderCanvas === "function") {
      renderCanvas(currentWorkflow);
    }
  } catch (err) {
    console.error("Error initializing canvas:", err);
  }

  try {
    if (typeof renderCatalog === "function") {
      renderCatalog(PRESET_WORKFLOWS);
    }
  } catch (err) {
    console.error("Error initializing catalog:", err);
  }

  try {
    setupEventListeners();
  } catch (err) {
    console.error("Error setting up event listeners:", err);
  }

  // Handle incoming search / prompt / workflow parameters (?prompt=, ?q=, ?workflow=, ?search=)
  try {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("prompt") || params.get("q") || params.get("workflow") || params.get("search");
    if (query && query.trim()) {
      const trimmed = query.trim();
      const input = document.getElementById("prompt-input");
      if (input) input.value = trimmed;
      setTimeout(() => {
        if (typeof window.synthesizeWorkflowFromPrompt === "function") {
          window.synthesizeWorkflowFromPrompt(trimmed);
        }
      }, 350);
    }
  } catch (err) {
    console.warn("Error parsing URL parameters in Omni:", err);
  }
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

// Focus Workflow Generator
window.focusWorkflowInput = function() {
  const generator = document.getElementById("generator");
  const input = document.getElementById("prompt-input");
  if (generator) generator.scrollIntoView({ behavior: "smooth" });
  if (input) setTimeout(() => input.focus(), 350);
};

// Quick Prompt Chips
window.applyQuickPrompt = function(promptText) {
  const input = document.getElementById("prompt-input");
  if (input) {
    input.value = promptText;
  }
  synthesizeWorkflowFromPrompt(promptText);
};

// AI Workflow Synthesizer - Automatically opens and scrolls to Workflow Canvas View
window.synthesizeWorkflowFromPrompt = function(prompt) {
  const submitBtn = document.getElementById("prompt-submit-btn");
  if (submitBtn) {
    submitBtn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: spin 0.8s linear infinite;"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
      <span>Synthesizing Pipeline...</span>
    `;
    submitBtn.disabled = true;
  }

  // Smooth scroll directly to the Interactive Workflow Studio Canvas
  const studio = document.getElementById("studio");
  if (studio) {
    studio.scrollIntoView({ behavior: "smooth" });
  }

  logConsole("SYNTHESIZER", `Parsing workflow prompt: "${prompt}"`, "info");

  setTimeout(() => {
    const synthesized = generateNodesFromPrompt(prompt);
    currentWorkflow = synthesized;
    renderCanvas(currentWorkflow);

    logConsole("ORCHESTRATOR", `Synthesized ${synthesized.nodes.length}-node pipeline ready. Active on visual canvas.`, "success");

    if (submitBtn) {
      submitBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        <span>Synthesize Pipeline</span>
      `;
      submitBtn.disabled = false;
    }

    simulateWorkflowRun();
  }, 800);
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
   PRE-BUILT ENTERPRISE WORKFLOWS CATALOG ENGINE
   ========================================================================== */

function renderCatalog(workflows) {
  const mount = document.getElementById("catalog-grid-mount");
  if (!mount) return;

  mount.innerHTML = "";

  if (!workflows || workflows.length === 0) {
    mount.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3.5rem 1rem; color: var(--text-muted); border: 1px dashed var(--border-subtle); border-radius: var(--radius-md);">
        <p style="font-size: 1rem; margin-bottom: 0.75rem; color: #ffffff; font-weight: 600;">No blueprints match this category</p>
        <button type="button" class="btn-secondary" style="font-size: 0.82rem; padding: 0.45rem 0.9rem;" onclick="filterCatalog('all', document.querySelector('.cat-tab-btn'))">
          View All Workflows
        </button>
      </div>
    `;
    return;
  }

  workflows.forEach(wf => {
    const card = document.createElement("div");
    card.className = "workflow-card";
    card.id = `catalog-card-${wf.id}`;

    const tagsHtml = (wf.tags || [])
      .map(t => `<span class="wf-tech-tag">${escapeHtml(t)}</span>`)
      .join("");

    const stepsCount = wf.stepsCount || (wf.nodes ? wf.nodes.length : 0);

    card.innerHTML = `
      <div class="wf-card-header">
        <span class="wf-card-domain">${escapeHtml(wf.domain)}</span>
        <span class="wf-card-steps">${stepsCount} Steps</span>
      </div>
      <h3 class="wf-card-title">${escapeHtml(wf.title)}</h3>
      <p class="wf-card-desc">${escapeHtml(wf.description)}</p>
      <div class="wf-card-tags">
        ${tagsHtml}
      </div>
      <div class="wf-card-actions">
        <button type="button" class="btn-primary" style="padding: 0.55rem 1rem; font-size: 0.82rem; flex: 1;" onclick="loadWorkflowIntoCanvas('${wf.id}')">
          Load Blueprint
        </button>
        <button type="button" class="btn-secondary" style="padding: 0.55rem 0.85rem; font-size: 0.82rem;" onclick="openExportModal('${wf.id}')" title="Export Blueprint JSON">
          JSON
        </button>
      </div>
    `;
    mount.appendChild(card);
  });
}

// Filter Catalog by Domain
window.filterCatalog = function(domain, btn) {
  document.querySelectorAll(".cat-tab-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");

  if (!domain || domain === "all") {
    renderCatalog(PRESET_WORKFLOWS);
  } else {
    const domLower = domain.toLowerCase();
    const filtered = PRESET_WORKFLOWS.filter(w => {
      const d = (w.domain || "").toLowerCase();
      const tags = (w.tags || []).map(t => t.toLowerCase());
      return d.includes(domLower) || tags.some(t => t.includes(domLower));
    });
    renderCatalog(filtered);
  }
};

// Load Selected Workflow Blueprint into Visual Canvas
window.loadWorkflowIntoCanvas = function(workflowId) {
  const wf = PRESET_WORKFLOWS.find(w => w.id === workflowId);
  if (wf) {
    currentWorkflow = wf;
    renderCanvas(currentWorkflow);
    logConsole("BLUEPRINT", `Loaded pre-built workflow: "${wf.title}" (${wf.domain})`, "info");
    const studio = document.getElementById("studio");
    if (studio) studio.scrollIntoView({ behavior: "smooth" });
    simulateWorkflowRun();
  }
};

// External Redirection to GravityClaw Master Prompt Generator
window.openGravityClaw = function(category = "all") {
  const url = new URL("https://gravityclaw.winplaybox.in/");
  if (category && category !== "all") {
    url.searchParams.set("category", category);
  }
  url.searchParams.set("utm_source", "omni_workflows");
  window.open(url.toString(), "_blank", "noopener");
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
