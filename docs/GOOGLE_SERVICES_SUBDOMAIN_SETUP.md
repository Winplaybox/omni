# WinPlayBox Sovereign Ecosystem — Unified Google Services Integration

This specification documents the production configuration, credentials, and deployment snippets for all current and future `*.winplaybox.in` domains and subdomains.

---

## 1. Central Account & Configuration Registry

| Service | Identifier / Credential | Status / Notes |
| :--- | :--- | :--- |
| **Google Tag Manager (GTM)** | `GTM-5MVNJSLF`<br>(Account: `6399709192`, Container: `283442902`) | Deployed across all properties |
| **Google AdSense** | `pub-5055322206074767`<br>(Client ID: `ca-pub-5055322206074767`) | Global ecosystem publisher ID |
| **Google Analytics (GA4)** | `G-475306611` | Configured in GTM & Site Kit |
| **Google Reader Revenue Manager** | Publication ID: `CAow4JLIDA`<br>Product ID: `openaccess` | Subscriptions, surveys, and contributions |
| **Sign in with Google (Beta)** | Client ID: `259545227984-tq7m462dc4vkqfv1g1ch66mou7uhigki.apps.googleusercontent.com` | One-Tap & standard Sign-In |
| **Google Search Console** | Domain property verification for `winplaybox.in` | Global DNS / Site Kit auto-verified |
| **PageSpeed Insights** | Lighthouse Performance & Web Vitals optimizations | Preconnect, async/defer, font swap |

---

## 2. Universal Template for Static, Single-Page, & Custom Subdomains
*(Vite, React, Next.js, Node.js/Express, Plain HTML)*

### Step A: High in `<head>` (as high as possible)
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5MVNJSLF');</script>
<!-- End Google Tag Manager -->

<!-- Google AdSense -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5055322206074767" crossorigin="anonymous"></script>

<!-- Google Reader Revenue Manager -->
<script async type="application/javascript" src="https://news.google.com/swg/js/v1/swg.js"></script>
<script>
  (self.SWG = self.SWG || []).push(subscriptions => {
    subscriptions.init('CAow4JLIDA');
  });
</script>

<!-- Sign in with Google (Beta) -->
<script src="https://accounts.google.com/gsi/client" async defer></script>
```

### Step B: Immediately after opening `<body>`
```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5MVNJSLF"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

---

## 3. Current Ecosystem Status

| Property | Platform | GTM (`GTM-5MVNJSLF`) | AdSense (`ca-pub-...`) | Reader Revenue | Sign in with Google |
| :--- | :--- | :---: | :---: | :---: | :---: |
| `winplaybox.in` | Sovereign HTML5 | Active | Active | Active | Active |
| `blog.winplaybox.in` | WordPress | Active (Site Kit) | Active (Site Kit) | Active (Site Kit) | Active (Site Kit) |
| `tutorials.winplaybox.in` | WordPress | Active (Site Kit) | Active (Site Kit) | Active (Site Kit) | Active (Site Kit) |
| `omni.winplaybox.in` | Node.js / Express | Active | Active | Active | Active |
| `ovd.winplaybox.in` | Vite / React | Active | Active | Active | Active |
