/**
 * WinPlayBox Universal Ecosystem Search Engine
 * Powered by Google Programmable Search Engine ID: e6d92b71341ab488e
 * Embeddable across: winplaybox.in, blog, tutorials, omni, gravityclaw,
 * spectra-ui, gamesassemblage, latestnewsnx, buzzstormnow, ovd, pricewatch.
 */
(function() {
  "use strict";

  const CSE_ID = document.currentScript?.getAttribute("data-cx") || "e6d92b71341ab488e";
  const PRIMARY_COLOR = "#2563eb";

  // Check if search modal already initialized
  if (document.getElementById("wpb-search-root")) return;

  // 1. Inject Styles
  const style = document.createElement("style");
  style.id = "wpb-search-styles";
  style.textContent = `
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
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
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
      color: #94a3b8;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 600;
    }
    .wpb-search-modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(15, 23, 42, 0.75);
      backdrop-filter: blur(8px);
      z-index: 2147483645;
      display: none;
      align-items: flex-start;
      justify-content: center;
      padding: 60px 16px;
      opacity: 0;
      transition: opacity 0.2s ease;
    }
    .wpb-search-modal-backdrop.active {
      display: flex;
      opacity: 1;
    }
    .wpb-search-modal {
      width: 100%;
      max-width: 760px;
      background: #ffffff;
      border-radius: 16px;
      border: 1px solid #e2e8f0;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      max-height: 82vh;
      animation: wpbSlideDown 0.2s ease-out;
    }
    @keyframes wpbSlideDown {
      from { transform: translateY(-16px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    .wpb-search-header {
      padding: 16px 20px;
      display: flex;
      align-items: center;
      gap: 12px;
      border-bottom: 1px solid #f1f5f9;
      background: #f8fafc;
    }
    .wpb-search-input {
      flex: 1;
      border: none;
      background: transparent;
      font-size: 16px;
      font-weight: 600;
      color: #0f172a;
      outline: none;
      font-family: inherit;
    }
    .wpb-search-input::placeholder {
      color: #94a3b8;
    }
    .wpb-search-chips {
      display: flex;
      gap: 6px;
      padding: 10px 20px;
      background: #ffffff;
      border-bottom: 1px solid #f1f5f9;
      overflow-x: auto;
      scrollbar-width: none;
    }
    .wpb-search-chip {
      white-space: nowrap;
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 700;
      background: #f1f5f9;
      color: #475569;
      border: 1px solid #e2e8f0;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.15s ease;
    }
    .wpb-search-chip:hover, .wpb-search-chip.active {
      background: #2563eb;
      color: #ffffff;
      border-color: #2563eb;
    }
    .wpb-search-body {
      padding: 16px 20px;
      overflow-y: auto;
      flex: 1;
    }
    .wpb-search-footer {
      padding: 10px 20px;
      background: #f8fafc;
      border-top: 1px solid #f1f5f9;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 11px;
      color: #64748b;
    }
  `;
  document.head.appendChild(style);

  // 2. Load Google CSE Script dynamically
  const cseScript = document.createElement("script");
  cseScript.async = true;
  cseScript.src = `https://cse.google.com/cse.js?cx=${CSE_ID}`;
  document.head.appendChild(cseScript);

  // 3. Create Root Containers
  const root = document.createElement("div");
  root.id = "wpb-search-root";
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
          <button id="wpb-close-btn" style="background:none;border:none;color:#94a3b8;font-size:22px;cursor:pointer;padding:0 4px;line-height:1">&times;</button>
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

        <!-- Body Area: Google CSE Results -->
        <div class="wpb-search-body">
          <div id="wpb-cse-render">
            <div class="gcse-search" data-queryParameterName="q" data-enableAutoComplete="true"></div>
          </div>
        </div>

        <!-- Footer -->
        <div class="wpb-search-footer">
          <div>Engine ID: <strong style="color:#0f172a">${CSE_ID}</strong> · Powered by Google &amp; WinPlayBox Hub</div>
          <div>Press <kbd style="background:#e2e8f0;padding:2px 5px;border-radius:3px">ESC</kbd> to close</div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(root);

  // 4. Modal Event Controllers
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
    const q = (term || '').trim();
    document.querySelectorAll(".wpb-search-chip[data-app]").forEach(chip => {
      const app = chip.getAttribute("data-app");
      if (APP_URL_PATTERNS[app]) {
        chip.href = APP_URL_PATTERNS[app](q);
      }
    });
  }

  function openSearch(query = "") {
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

  function triggerGoogleSearch(term) {
    if (!term) return;
    const gInput = document.querySelector(".gsc-input input");
    if (gInput) {
      gInput.value = term;
      const gBtn = document.querySelector(".gsc-search-button button");
      if (gBtn) gBtn.click();
    }
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
