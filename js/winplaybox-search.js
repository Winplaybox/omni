/**
 * WinPlayBox Universal Ecosystem Search Engine
 * Powered by Google Programmable Search Engine
 * Native Theme Adaptability: Auto-adapts to host site theme (Light, Dark, Omni B&W, GravityClaw)
 * Embeddable across: winplaybox.in, blog, tutorials, omni, gravityclaw,
 * spectra-ui, gamesassemblage, latestnewsnx, buzzstormnow, ovd, pricewatch.
 */
(function() {
  "use strict";

  const CSE_ID = document.currentScript?.getAttribute("data-cx") || "e6d92b71341ab488e";

  // Prevent multiple initializations
  if (document.getElementById("wpb-search-root")) return;

  // 1. Detect Host Theme & Dynamic Mutation Tracking
  function detectHostTheme() {
    const host = (window.location.hostname || "").toLowerCase();
    
    // Dedicated Monochrome Theme for Omni Workflows
    if (host.includes("omni")) {
      return "wpb-theme-bw";
    }

    const html = document.documentElement;
    const body = document.body;
    const dataTheme = html.getAttribute("data-theme") || body?.getAttribute("data-theme") || "";

    const isExplicitDark = dataTheme.toLowerCase() === "dark" ||
      html.classList.contains("dark") ||
      (body && body.classList.contains("dark")) ||
      host.includes("gravityclaw");

    if (isExplicitDark) return "wpb-theme-dark";

    const isExplicitLight = dataTheme.toLowerCase() === "light" ||
      html.classList.contains("light") ||
      (body && body.classList.contains("light"));

    if (isExplicitLight) return "wpb-theme-light";

    // System Preference Fallback
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "wpb-theme-dark";
    }

    return "wpb-theme-light";
  }

  // 2. Inject Comprehensive Adaptive Styles
  const style = document.createElement("style");
  style.id = "wpb-search-styles";
  style.textContent = `
    /* Theme Design Tokens */
    #wpb-search-root {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Helvetica, Arial, sans-serif;
    }

    /* Light Theme (Default) */
    #wpb-search-root.wpb-theme-light {
      --wpb-bg-modal: #ffffff;
      --wpb-bg-header: #f8fafc;
      --wpb-border: #e2e8f0;
      --wpb-text-primary: #0f172a;
      --wpb-text-secondary: #475569;
      --wpb-text-muted: #94a3b8;
      --wpb-accent: #2563eb;
      --wpb-accent-hover: #1d4ed8;
      --wpb-card-bg: #f8fafc;
      --wpb-card-border: #e2e8f0;
      --wpb-card-hover: #ffffff;
      --wpb-url: #059669;
      --wpb-chip-bg: #f1f5f9;
      --wpb-chip-color: #475569;
      --wpb-kbd-bg: #e2e8f0;
      --wpb-kbd-color: #475569;
      --wpb-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }

    /* Dark Theme (PriceWatch Dark, GravityClaw, OVD Dark, Blog Dark, Tutorials Dark) */
    #wpb-search-root.wpb-theme-dark {
      --wpb-bg-modal: #0f172a;
      --wpb-bg-header: #1e293b;
      --wpb-border: #334155;
      --wpb-text-primary: #f8fafc;
      --wpb-text-secondary: #cbd5e1;
      --wpb-text-muted: #64748b;
      --wpb-accent: #3b82f6;
      --wpb-accent-hover: #60a5fa;
      --wpb-card-bg: #1e293b;
      --wpb-card-border: #334155;
      --wpb-card-hover: #273549;
      --wpb-url: #34d399;
      --wpb-chip-bg: #1e293b;
      --wpb-chip-color: #cbd5e1;
      --wpb-kbd-bg: #334155;
      --wpb-kbd-color: #cbd5e1;
      --wpb-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
    }

    /* Black & White Minimalist Theme (Omni AI Workflows) */
    #wpb-search-root.wpb-theme-bw {
      --wpb-bg-modal: #0a0a0a;
      --wpb-bg-header: #141414;
      --wpb-border: #262626;
      --wpb-text-primary: #ffffff;
      --wpb-text-secondary: #a3a3a3;
      --wpb-text-muted: #737373;
      --wpb-accent: #ffffff;
      --wpb-accent-hover: #e5e5e5;
      --wpb-card-bg: #121212;
      --wpb-card-border: #262626;
      --wpb-card-hover: #1a1a1a;
      --wpb-url: #e5e5e5;
      --wpb-chip-bg: #1a1a1a;
      --wpb-chip-color: #a3a3a3;
      --wpb-kbd-bg: #262626;
      --wpb-kbd-color: #ffffff;
      --wpb-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.85);
    }

    /* Floating Trigger Button */
    .wpb-search-trigger {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 2147483640;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: linear-gradient(135deg, #1e293b, #0f172a);
      color: #ffffff;
      padding: 10px 18px;
      border-radius: 9999px;
      font-size: 13px;
      font-weight: 700;
      border: 1px solid rgba(255, 255, 255, 0.15);
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 0 15px rgba(37, 99, 235, 0.35);
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      user-select: none;
    }
    .wpb-search-trigger:hover {
      transform: translateY(-2px) scale(1.02);
      box-shadow: 0 14px 30px -5px rgba(0, 0, 0, 0.6), 0 0 20px rgba(37, 99, 235, 0.5);
      border-color: #3b82f6;
    }
    .wpb-search-trigger kbd {
      background: rgba(255, 255, 255, 0.15);
      color: #cbd5e1;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 600;
    }

    /* Backdrop */
    .wpb-search-modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(10, 15, 29, 0.75);
      backdrop-filter: blur(8px);
      z-index: 2147483645;
      display: none;
      align-items: flex-start;
      justify-content: center;
      padding: 50px 16px;
      opacity: 0;
      transition: opacity 0.2s ease;
    }
    .wpb-search-modal-backdrop.active {
      display: flex;
      opacity: 1;
    }

    /* Modal Container */
    .wpb-search-modal {
      width: 100%;
      max-width: 780px;
      background: var(--wpb-bg-modal);
      border-radius: 16px;
      border: 1px solid var(--wpb-border);
      box-shadow: var(--wpb-shadow);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      max-height: 84vh;
      animation: wpbSlideDown 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }
    @keyframes wpbSlideDown {
      from { transform: translateY(-16px) scale(0.98); opacity: 0; }
      to { transform: translateY(0) scale(1); opacity: 1; }
    }

    /* Header */
    .wpb-search-header {
      padding: 16px 20px;
      display: flex;
      align-items: center;
      gap: 12px;
      border-bottom: 1px solid var(--wpb-border);
      background: var(--wpb-bg-header);
    }
    .wpb-search-input {
      flex: 1;
      border: none;
      background: transparent;
      font-size: 16px;
      font-weight: 600;
      color: var(--wpb-text-primary);
      outline: none;
      font-family: inherit;
    }
    .wpb-search-input::placeholder {
      color: var(--wpb-text-muted);
    }
    .wpb-close-btn {
      background: none;
      border: none;
      color: var(--wpb-text-muted);
      font-size: 24px;
      cursor: pointer;
      padding: 0 4px;
      line-height: 1;
      border-radius: 6px;
      transition: color 0.15s ease;
    }
    .wpb-close-btn:hover {
      color: var(--wpb-text-primary);
    }

    /* Ecosystem Chips */
    .wpb-search-chips {
      display: flex;
      gap: 6px;
      padding: 10px 20px;
      background: var(--wpb-bg-modal);
      border-bottom: 1px solid var(--wpb-border);
      overflow-x: auto;
      scrollbar-width: none;
    }
    .wpb-search-chip {
      white-space: nowrap;
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 700;
      background: var(--wpb-chip-bg);
      color: var(--wpb-chip-color);
      border: 1px solid var(--wpb-border);
      cursor: pointer;
      text-decoration: none;
      transition: all 0.15s ease;
    }
    .wpb-search-chip:hover, .wpb-search-chip.active {
      background: var(--wpb-accent);
      color: #ffffff;
      border-color: var(--wpb-accent);
    }
    #wpb-search-root.wpb-theme-bw .wpb-search-chip:hover,
    #wpb-search-root.wpb-theme-bw .wpb-search-chip.active {
      background: #ffffff;
      color: #000000;
      border-color: #ffffff;
    }

    /* Body Area */
    .wpb-search-body {
      padding: 16px 20px;
      overflow-y: auto;
      flex: 1;
      min-height: 320px;
    }

    /* Footer */
    .wpb-search-footer {
      padding: 10px 20px;
      background: var(--wpb-bg-header);
      border-top: 1px solid var(--wpb-border);
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 11px;
      color: var(--wpb-text-secondary);
    }
    .wpb-kbd {
      background: var(--wpb-kbd-bg);
      color: var(--wpb-kbd-color);
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 600;
    }

    /* =========================================================
       COMPLETE GOOGLE PROGRAMMABLE SEARCH ENGINE THEME OVERRIDE
       Converts raw Google table layout into native cards
       ========================================================= */
    #wpb-search-root .gsc-control-cse {
      background: transparent !important;
      border: none !important;
      padding: 0 !important;
      font-family: inherit !important;
    }
    /* Hide Google's default duplicate search box */
    #wpb-search-root .gsc-search-box {
      display: none !important;
    }
    #wpb-search-root .gsc-results-wrapper-nooverlay {
      padding: 0 !important;
    }

    /* Each Google Result as a native modern card */
    #wpb-search-root .gsc-webResult.gsc-result {
      background: var(--wpb-card-bg) !important;
      border: 1px solid var(--wpb-card-border) !important;
      border-radius: 12px !important;
      padding: 16px 18px !important;
      margin-bottom: 12px !important;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04) !important;
    }
    #wpb-search-root .gsc-webResult.gsc-result:hover {
      background: var(--wpb-card-hover) !important;
      border-color: var(--wpb-accent) !important;
      transform: translateY(-2px) !important;
      box-shadow: 0 10px 24px -4px rgba(0, 0, 0, 0.15) !important;
    }

    /* Result Title */
    #wpb-search-root .gs-title,
    #wpb-search-root .gs-title * {
      color: var(--wpb-accent) !important;
      font-size: 16px !important;
      font-weight: 700 !important;
      text-decoration: none !important;
      font-family: inherit !important;
      line-height: 1.4 !important;
    }
    #wpb-search-root .gs-title:hover,
    #wpb-search-root .gs-title:hover * {
      text-decoration: underline !important;
      color: var(--wpb-accent-hover) !important;
    }

    /* Breadcrumb / URL */
    #wpb-search-root .gsc-url-top,
    #wpb-search-root .gs-visibleUrl,
    #wpb-search-root .gs-visibleUrl-long {
      color: var(--wpb-url) !important;
      font-size: 12px !important;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace !important;
      margin: 4px 0 6px 0 !important;
      display: inline-block !important;
      word-break: break-all !important;
    }

    /* Snippet / Description */
    #wpb-search-root .gs-snippet {
      color: var(--wpb-text-secondary) !important;
      font-size: 13.5px !important;
      line-height: 1.55 !important;
      font-family: inherit !important;
      margin-top: 4px !important;
    }

    /* Google Layout Cleanups */
    #wpb-search-root table.gsc-table-result,
    #wpb-search-root .gsc-table-cell-snippet-close,
    #wpb-search-root .gsc-thumbnail-inside,
    #wpb-search-root .gsc-url-top {
      padding: 0 !important;
      background: transparent !important;
      border: none !important;
    }
    #wpb-search-root .gsc-thumbnail-left {
      padding-right: 14px !important;
    }
    #wpb-search-root .gs-image {
      border-radius: 8px !important;
      max-height: 80px !important;
    }

    /* Pagination */
    #wpb-search-root .gsc-results .gsc-cursor-box {
      margin: 20px 0 10px 0 !important;
      display: flex !important;
      gap: 8px !important;
      justify-content: center !important;
      flex-wrap: wrap !important;
    }
    #wpb-search-root .gsc-results .gsc-cursor-box .gsc-cursor-page {
      background: var(--wpb-card-bg) !important;
      color: var(--wpb-text-primary) !important;
      border: 1px solid var(--wpb-card-border) !important;
      padding: 6px 14px !important;
      border-radius: 8px !important;
      font-size: 13px !important;
      font-weight: 700 !important;
      text-decoration: none !important;
      cursor: pointer !important;
      transition: all 0.15s ease !important;
    }
    #wpb-search-root .gsc-results .gsc-cursor-box .gsc-cursor-page.gsc-cursor-current-page {
      background: var(--wpb-accent) !important;
      color: #ffffff !important;
      border-color: var(--wpb-accent) !important;
    }
    #wpb-search-root.wpb-theme-bw .gsc-results .gsc-cursor-box .gsc-cursor-page.gsc-cursor-current-page {
      background: #ffffff !important;
      color: #000000 !important;
      border-color: #ffffff !important;
    }

    /* Hide Google watermarks / clutter */
    #wpb-search-root .gcsc-branding,
    #wpb-search-root .gcsc-find-more-on-google,
    #wpb-search-root .gsc-branding,
    #wpb-search-root .gs-spelling,
    #wpb-search-root .gsc-adBlock {
      display: none !important;
    }
  `;
  document.head.appendChild(style);

  // 3. Load Google CSE Script dynamically
  const cseScript = document.createElement("script");
  cseScript.async = true;
  cseScript.src = `https://cse.google.com/cse.js?cx=${CSE_ID}`;
  document.head.appendChild(cseScript);

  // 4. Create Root Containers
  const root = document.createElement("div");
  root.id = "wpb-search-root";
  root.className = detectHostTheme();
  root.innerHTML = `
    <!-- Floating Trigger -->
    <button class="wpb-search-trigger" id="wpb-trigger-btn" title="Search Ecosystem & Google (Ctrl+K)">
      <span>🔍 Search WinPlayBox</span>
      <kbd>Ctrl+K</kbd>
    </button>

    <!-- Modal Backdrop -->
    <div class="wpb-search-modal-backdrop" id="wpb-modal-backdrop">
      <div class="wpb-search-modal" id="wpb-modal-card">
        
        <!-- Header -->
        <div class="wpb-search-header">
          <span style="font-size:18px">🔍</span>
          <input type="text" class="wpb-search-input" id="wpb-main-input" placeholder="Search Google & WinPlayBox Ecosystem (Products, Prompts, Media, UI)..." autofocus>
          <button id="wpb-close-btn" class="wpb-close-btn" title="Close (ESC)">&times;</button>
        </div>

        <!-- Ecosystem Fast Navigation Chips -->
        <div class="wpb-search-chips">
          <button class="wpb-search-chip active" data-app="google">🌐 Google &amp; Web</button>
          <a class="wpb-search-chip" data-app="pricewatch" href="https://pricewatch.winplaybox.in" target="_blank">🛍️ PriceWatch</a>
          <a class="wpb-search-chip" data-app="ovd" href="https://ovd.winplaybox.in" target="_blank">🎬 OVD Downloader</a>
          <a class="wpb-search-chip" data-app="omni" href="https://omni.winplaybox.in" target="_blank">🤖 Omni AI</a>
          <a class="wpb-search-chip" data-app="gravityclaw" href="https://gravityclaw.winplaybox.in" target="_blank">🪄 GravityClaw</a>
          <a class="wpb-search-chip" data-app="spectra" href="https://spectra-ui.winplaybox.in" target="_blank">🎨 Spectra UI</a>
          <a class="wpb-search-chip" data-app="games" href="https://gamesassemblage.winplaybox.in" target="_blank">🎮 Games</a>
          <a class="wpb-search-chip" data-app="news" href="https://latestnewsnx.winplaybox.in" target="_blank">📰 LatestNewsNX</a>
          <a class="wpb-search-chip" data-app="buzz" href="https://buzzstormnow.winplaybox.in" target="_blank">⚡ BuzzStormNow</a>
        </div>

        <!-- Body Area: Google CSE Results Styled Natively -->
        <div class="wpb-search-body">
          <div id="wpb-cse-render">
            <div class="gcse-search" data-queryParameterName="q" data-enableAutoComplete="true"></div>
          </div>
        </div>

        <!-- Footer (No Internal IDs displayed) -->
        <div class="wpb-search-footer">
          <div><span style="opacity:0.85">Powered by</span> <strong style="color:var(--wpb-text-primary)">Google &amp; WinPlayBox Universal Search</strong></div>
          <div>Press <kbd class="wpb-kbd">ESC</kbd> to close</div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(root);

  // 5. Watch for Host Theme Toggles
  const observer = new MutationObserver(() => {
    root.className = detectHostTheme();
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class", "data-theme"] });
  if (document.body) {
    observer.observe(document.body, { attributes: true, attributeFilter: ["class", "data-theme"] });
  }

  // 6. Modal Event Controllers
  const backdrop = document.getElementById("wpb-modal-backdrop");
  const mainInput = document.getElementById("wpb-main-input");
  const triggerBtn = document.getElementById("wpb-trigger-btn");
  const closeBtn = document.getElementById("wpb-close-btn");

  const APP_URL_PATTERNS = {
    pricewatch: (q) => q ? `https://pricewatch.winplaybox.in/search.php?q=${encodeURIComponent(q)}` : `https://pricewatch.winplaybox.in`,
    ovd: (q) => q ? `https://ovd.winplaybox.in/?url=${encodeURIComponent(q)}` : `https://ovd.winplaybox.in`,
    omni: (q) => q ? `https://omni.winplaybox.in/?prompt=${encodeURIComponent(q)}` : `https://omni.winplaybox.in`,
    gravityclaw: (q) => q ? `https://gravityclaw.winplaybox.in/?prompt=${encodeURIComponent(q)}` : `https://gravityclaw.winplaybox.in`,
    spectra: (q) => q ? `https://spectra-ui.winplaybox.in/?search=${encodeURIComponent(q)}` : `https://spectra-ui.winplaybox.in`,
    games: (q) => q ? `https://gamesassemblage.winplaybox.in/?q=${encodeURIComponent(q)}` : `https://gamesassemblage.winplaybox.in`,
    news: (q) => q ? `https://latestnewsnx.winplaybox.in/?s=${encodeURIComponent(q)}` : `https://latestnewsnx.winplaybox.in`,
    buzz: (q) => q ? `https://buzzstormnow.winplaybox.in/?s=${encodeURIComponent(q)}` : `https://buzzstormnow.winplaybox.in`
  };

  function updateChipLinks(term) {
    const q = (term || "").trim();
    document.querySelectorAll(".wpb-search-chip[data-app]").forEach(chip => {
      const app = chip.getAttribute("data-app");
      if (APP_URL_PATTERNS[app]) {
        chip.href = APP_URL_PATTERNS[app](q);
      }
    });
  }

  function triggerGoogleSearch(term) {
    if (!term) return;
    const gInput = document.querySelector(".gsc-input input");
    if (gInput) {
      gInput.value = term;
      const gBtn = document.querySelector(".gsc-search-button button");
      if (gBtn) gBtn.click();
    }
  }

  function openSearch(query = "") {
    root.className = detectHostTheme();
    backdrop.classList.add("active");
    if (query) {
      mainInput.value = query;
      updateChipLinks(query);
      triggerGoogleSearch(query);
    }
    setTimeout(() => mainInput.focus(), 50);
  }

  function closeSearch() {
    backdrop.classList.remove("active");
  }

  triggerBtn.addEventListener("click", () => openSearch());
  closeBtn.addEventListener("click", closeSearch);
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeSearch();
  });

  mainInput.addEventListener("input", (e) => {
    updateChipLinks(e.target.value);
  });

  mainInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const q = mainInput.value.trim();
      if (q) {
        updateChipLinks(q);
        triggerGoogleSearch(q);
      }
    }
  });

  // Hotkey: Ctrl+K or Cmd+K
  window.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (backdrop.classList.contains("active")) {
        closeSearch();
      } else {
        openSearch();
      }
    } else if (e.key === "Escape" && backdrop.classList.contains("active")) {
      closeSearch();
    }
  });

  // Expose Global Helper
  window.WinPlayBoxSearch = {
    open: openSearch,
    close: closeSearch,
    search: (term) => openSearch(term)
  };
})();
