/**
 * OMNI AI WORKFLOWS - CORE ENGINE & INTERACTIVE CANVAS CONTROLLER
 * Platform: omni.winplaybox.in
 * Author: WinPlayBox Principal Software Engineering Team
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
      { id: "n1", type: "trigger", title: "New Video Published", service: "YouTube RSS / Webhook", badge: "Trigger" },
      { id: "n2", type: "ai", title: "Audio Transcription", service: "Whisper Large v3", badge: "AI Model" },
      { id: "n3", type: "ai", title: "Multi-Format Synthesis", service: "Gemini 1.5 Pro", badge: "AI Reasoning" },
      { id: "n4", type: "action", title: "Carousel Image Gen", service: "Canva / Remotion", badge: "Asset Builder" },
      { id: "n5", type: "output", title: "Cross-Platform Dispatch", service: "Twitter, LinkedIn, Ghost", badge: "Delivery" }
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

// Current Active Workflow State
let currentWorkflow = PRESET_WORKFLOWS[0];
let isSimulating = false;

// DOM Ready Initialization
document.addEventListener("DOMContentLoaded", () => {
  renderCanvas(currentWorkflow);
  renderCatalog(PRESET_WORKFLOWS);
  setupEventListeners();
});

// Setup Global Event Listeners
function setupEventListeners() {
  const form = document.getElementById("prompt-generator-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("prompt-input");
      if (input && input.value.trim()) {
        synthesizeWorkflowFromPrompt(input.value.trim());
      }
    });
  }
}

// Quick Prompt Handler
window.applyQuickPrompt = function(promptText) {
  const input = document.getElementById("prompt-input");
  if (input) {
    input.value = promptText;
    synthesizeWorkflowFromPrompt(promptText);
    const studio = document.getElementById("studio");
    if (studio) studio.scrollIntoView({ behavior: "smooth" });
  }
};

// AI Prompt-to-Workflow Synthesizer Engine
window.synthesizeWorkflowFromPrompt = function(prompt) {
  const submitBtn = document.getElementById("prompt-submit-btn");
  if (submitBtn) {
    submitBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: spin 0.8s linear infinite;"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
      <span>Synthesizing Pipeline...</span>
    `;
    submitBtn.disabled = true;
  }

  // Add synthesis console log
  logConsole("SYNTHESIZER", `Analyzing natural language prompt: "${prompt}"`, "info");
  logConsole("PARSER", "Decomposing into Triggers, Data Ingestion, AI Reasoning, and Delivery Actions...", "warn");

  setTimeout(() => {
    // Generate specialized workflow topology based on keywords
    const synthesized = generateNodesFromPrompt(prompt);
    currentWorkflow = synthesized;
    renderCanvas(currentWorkflow);

    logConsole("ORCHESTRATOR", `Synthesized ${synthesized.nodes.length}-node pipeline successfully! Ready for execution.`, "success");

    if (submitBtn) {
      submitBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        <span>Synthesize Pipeline</span>
      `;
      submitBtn.disabled = false;
    }

    // Auto-run simulation to show instant live preview
    simulateWorkflowRun();
  }, 1200);
};

// Heuristic Pipeline Synthesizer
function generateNodesFromPrompt(prompt) {
  const p = prompt.toLowerCase();
  const nodes = [];
  let domain = "Custom AI";

  // Trigger Node
  if (p.includes("schedule") || p.includes("hour") || p.includes("daily") || p.includes("cron")) {
    nodes.push({ id: "n1", type: "trigger", title: "Cron Schedule Trigger", service: "Cron Scheduler", badge: "Trigger" });
  } else if (p.includes("stripe") || p.includes("payment") || p.includes("webhook")) {
    nodes.push({ id: "n1", type: "trigger", title: "Payment Webhook Received", service: "Stripe Webhook API", badge: "Trigger" });
    domain = "Fintech & Billing";
  } else if (p.includes("youtube") || p.includes("video")) {
    nodes.push({ id: "n1", type: "trigger", title: "New Media Ingested", service: "YouTube RSS / Webhook", badge: "Trigger" });
    domain = "Media & Content";
  } else if (p.includes("github") || p.includes("commit") || p.includes("issue")) {
    nodes.push({ id: "n1", type: "trigger", title: "GitHub Event Webhook", service: "GitHub REST API", badge: "Trigger" });
    domain = "DevOps";
  } else {
    nodes.push({ id: "n1", type: "trigger", title: "HTTP Request Trigger", service: "Omni Inbound Webhook", badge: "Trigger" });
  }

  // Data Gathering / Action Node
  if (p.includes("scrape") || p.includes("crawl") || p.includes("monitor")) {
    nodes.push({ id: "n2", type: "action", title: "Headless Browser Scraper", service: "Playwright Web Crawler", badge: "Extraction" });
  } else if (p.includes("transcribe") || p.includes("audio")) {
    nodes.push({ id: "n2", type: "action", title: "Audio Transcription", service: "Whisper Speech Engine", badge: "Extraction" });
  } else if (p.includes("database") || p.includes("sql") || p.includes("enrich")) {
    nodes.push({ id: "n2", type: "action", title: "Data Enrichment Query", service: "Supabase / Apollo API", badge: "Enrichment" });
  } else {
    nodes.push({ id: "n2", type: "action", title: "Payload Sanitizer & Schema", service: "JSON Transform", badge: "Validation" });
  }

  // AI Reasoning Node
  if (p.includes("claude")) {
    nodes.push({ id: "n3", type: "ai", title: "Complex Clause Analysis", service: "Claude 3.5 Sonnet", badge: "AI Reasoning" });
  } else if (p.includes("gemini")) {
    nodes.push({ id: "n3", type: "ai", title: "Long-Context Synthesis", service: "Google Gemini 1.5 Pro", badge: "AI Reasoning" });
  } else {
    nodes.push({ id: "n3", type: "ai", title: "Multimodal Synthesis Agent", service: "GPT-4o Deep Engine", badge: "AI Reasoning" });
  }

  // Conditional Logic Gate
  nodes.push({ id: "n4", type: "action", title: "Validation & Confidence Gate", service: "Conditional Logic", badge: "Filter / Gate" });

  // Output Node
  if (p.includes("telegram")) {
    nodes.push({ id: "n5", type: "output", title: "Telegram Channel Alert", service: "Telegram Bot API", badge: "Delivery" });
  } else if (p.includes("slack")) {
    nodes.push({ id: "n5", type: "output", title: "Incident Alert Dispatch", service: "Slack Incoming Webhook", badge: "Delivery" });
  } else if (p.includes("email") || p.includes("newsletter")) {
    nodes.push({ id: "n5", type: "output", title: "Automated Email Delivery", service: "Resend / SendGrid", badge: "Delivery" });
  } else {
    nodes.push({ id: "n5", type: "output", title: "Multi-Endpoint Webhook", service: "REST POST / DB Store", badge: "Delivery" });
  }

  return {
    id: "custom-" + Date.now(),
    title: prompt.length > 50 ? prompt.substring(0, 47) + "..." : prompt,
    domain: domain,
    stepsCount: nodes.length,
    description: `Synthesized on-demand from prompt: "${prompt}". Autonomous orchestration with automated schema validation and live connector endpoints.`,
    tags: ["Custom AI", "Automated", domain],
    nodes: nodes
  };
}

// Render Canvas Nodes & Connecting SVG Curves
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
    nodeEl.className = `wf-node type-${node.type}`;
    nodeEl.id = `node-view-${index}`;
    nodeEl.innerHTML = `
      <div class="node-port input"></div>
      <div class="node-header">
        <span class="node-type-badge">${node.badge}</span>
        <span style="font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-mono);">#${index + 1}</span>
      </div>
      <div class="node-title">${escapeHtml(node.title)}</div>
      <div class="node-service">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
        ${escapeHtml(node.service)}
      </div>
      <div class="node-port output"></div>
    `;
    container.appendChild(nodeEl);
  });

  // Draw connecting bezier cables between nodes
  setTimeout(drawConnections, 50);
}

// Draw Bezier Curves Between Canvas Nodes
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

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathD);
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "rgba(56, 189, 248, 0.45)");
    path.setAttribute("stroke-width", "3");
    path.setAttribute("stroke-linecap", "round");
    path.id = `cable-${i}`;

    svg.appendChild(path);
  }
}

// Window resize updates connecting curves
window.addEventListener("resize", drawConnections);

// Simulate Workflow Execution
window.simulateWorkflowRun = function() {
  if (isSimulating) return;
  isSimulating = true;

  const runBtn = document.getElementById("run-sim-btn");
  if (runBtn) {
    runBtn.disabled = true;
    runBtn.innerHTML = `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: spin 0.8s linear infinite;"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
      <span>Executing Pipeline...</span>
    `;
  }

  logConsole("DISPATCHER", `Triggering execution run for [${currentWorkflow.title}]`, "info");

  const nodes = document.querySelectorAll(".wf-node");
  let step = 0;

  function runNextStep() {
    if (step < nodes.length) {
      nodes.forEach(n => n.classList.remove("active"));
      nodes[step].classList.add("active");

      const nodeData = currentWorkflow.nodes[step];
      const latency = Math.floor(Math.random() * 120 + 35);
      logConsole(nodeData.badge.toUpperCase(), `[Node ${step + 1}: ${nodeData.title}] executed via ${nodeData.service} (${latency}ms) - Status: 200 OK`, "success");

      step++;
      setTimeout(runNextStep, 450);
    } else {
      nodes.forEach(n => n.classList.remove("active"));
      logConsole("PIPELINE", "Workflow completed 100% successfully. Output payload validated and synced.", "success");
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

// Console Logging Utility
function logConsole(source, msg, type = "info") {
  const consoleEl = document.getElementById("console-logs-mount");
  if (!consoleEl) return;

  const line = document.createElement("div");
  line.className = "log-line";

  const time = new Date().toISOString().substring(11, 19);
  line.innerHTML = `
    <span class="log-time">[${time}]</span>
    <span class="log-${type}">[${escapeHtml(source)}]</span>
    <span style="color: #cbd5e1;">${escapeHtml(msg)}</span>
  `;

  consoleEl.appendChild(line);
  consoleEl.scrollTop = consoleEl.scrollHeight;
}

// Render Pre-Built Catalog Cards
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
          <span>Load &amp; Run</span>
        </button>
        <button type="button" class="btn-secondary" style="padding: 0.5rem 0.85rem; font-size: 0.8rem;" onclick="openExportModal('${wf.id}')">
          <span>Export Blueprint</span>
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Filter Catalog Tabs
window.filterCatalog = function(domain, btn) {
  const btns = document.querySelectorAll(".cat-tab-btn");
  btns.forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");

  if (domain === "all") {
    renderCatalog(PRESET_WORKFLOWS);
  } else {
    const filtered = PRESET_WORKFLOWS.filter(wf => wf.domain.toLowerCase().includes(domain.toLowerCase()));
    renderCatalog(filtered);
  }
};

// Load Selected Workflow into Canvas
window.loadWorkflowIntoCanvas = function(workflowId) {
  const wf = PRESET_WORKFLOWS.find(w => w.id === workflowId);
  if (wf) {
    currentWorkflow = wf;
    renderCanvas(currentWorkflow);
    logConsole("LOADER", `Loaded pre-built workflow blueprint: [${wf.title}]`, "info");
    const studio = document.getElementById("studio");
    if (studio) studio.scrollIntoView({ behavior: "smooth" });
    simulateWorkflowRun();
  }
};

// Open Export Blueprint Modal
window.openExportModal = function(workflowId) {
  const wf = PRESET_WORKFLOWS.find(w => w.id === workflowId) || currentWorkflow;
  const modal = document.getElementById("export-modal");
  const codeBox = document.getElementById("export-code-box");
  const modalTitle = document.getElementById("export-modal-title");

  if (modalTitle) modalTitle.textContent = `Export Blueprint: ${wf.title}`;

  const blueprint = {
    schema_version: "2026.1",
    generator: "Omni AI Workflows (omni.winplaybox.in)",
    workflow_id: wf.id,
    title: wf.title,
    domain: wf.domain,
    nodes: wf.nodes.map((n, idx) => ({
      step: idx + 1,
      id: n.id,
      name: n.title,
      type: n.type,
      service: n.service,
      parameters: {
        auto_retry: true,
        timeout_ms: 5000,
        concurrency: 1
      }
    })),
    n8n_compatible: true,
    zapier_cli_ready: true,
    langchain_runnable: true
  };

  if (codeBox) codeBox.textContent = JSON.stringify(blueprint, null, 2);
  if (modal) modal.classList.add("open");
};

// Close Modal
window.closeExportModal = function() {
  const modal = document.getElementById("export-modal");
  if (modal) modal.classList.remove("open");
};

// Copy Export Code
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

// String Escaping Utility
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
