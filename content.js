/* content.js — bilingual runtime renderer for window.CONTENT { en, es } */
(function () {
  "use strict";

  var STORE = "ss_lang";
  var SUPPORTED = ["en", "es"];

  function get(obj, path) {
    return path.split(".").reduce(function (x, k) {
      return x == null ? x : x[k];
    }, obj);
  }

  function initialLang() {
    var saved = null;
    try { saved = localStorage.getItem(STORE); } catch (e) {}
    if (SUPPORTED.indexOf(saved) !== -1) return saved;
    var nav = ((navigator.languages && navigator.languages[0]) ||
               navigator.language || "en").toLowerCase();
    return nav.indexOf("es") === 0 ? "es" : "en";
  }

  var lang = initialLang();

  function render() {
    var ROOT = window.CONTENT;
    if (!ROOT) { console.warn("content.js: window.CONTENT not found."); return; }
    var C = ROOT[lang] || ROOT.en;

    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-c]").forEach(function (el) {
      var key = el.getAttribute("data-c");
      var v = get(C, key);
      if (v == null) { console.warn('content.js: missing key "' + key + '" for "' + lang + '"'); return; }
      if (el.tagName === "TITLE") document.title = v;
      else el.innerHTML = v;
    });

    var metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc && C.meta && C.meta.description != null) {
      metaDesc.setAttribute("content", C.meta.description);
    }

    /* Language-aware social / Open Graph tags (helps JS-aware consumers;
       static defaults in <head> cover non-JS scrapers). */
    function setMeta(sel, val) {
      var m = document.querySelector(sel);
      if (m && val != null) m.setAttribute("content", val);
    }
    if (C.meta) {
      setMeta("meta[property='og:title']", C.meta.title);
      setMeta("meta[property='og:description']", C.meta.description);
    }
    setMeta("meta[property='og:locale']", lang === "es" ? "es_LA" : "en_US");
    setMeta("meta[property='og:locale:alternate']", lang === "es" ? "en_US" : "es_LA");

    document.querySelectorAll("[data-cph]").forEach(function (el) {
      var v = get(C, el.getAttribute("data-cph"));
      if (v != null) el.setAttribute("placeholder", v);
    });

    document.querySelectorAll("[data-lang-btn]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang-btn") === lang));
    });
  }

  function setLang(l) {
    if (SUPPORTED.indexOf(l) === -1) return;
    lang = l;
    try { localStorage.setItem(STORE, l); } catch (e) {}
    render();
  }
  window.setSiteLang = setLang;

  /* Toggle clicks (delegated, so it works regardless of when buttons render) */
  document.addEventListener("click", function (e) {
    var btn = e.target.closest && e.target.closest("[data-lang-btn]");
    if (btn) { e.preventDefault(); setLang(btn.getAttribute("data-lang-btn")); }
  });

  /* Runs at end of <body>: DOM is parsed, so #year (in footer.legal) exists
     before script.js executes next. */
  render();
})();
