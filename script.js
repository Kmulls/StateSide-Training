/* Stateside — landing page interactions */
(function () {
  "use strict";

  /* Current year in footer */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Sticky header style on scroll */
  var header = document.getElementById("site-header");
  function onScroll() {
    if (window.scrollY > 24) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile nav toggle */
  var toggle = document.querySelector(".nav-toggle");
  var mobileNav = document.getElementById("mobile-nav");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      mobileNav.hidden = open;
    });
    mobileNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        mobileNav.hidden = true;
      });
    });
  }

  /* Smooth in-page nav that lands the section just below the sticky header */
  function scrollToHash(hash) {
    var target = hash && hash.length > 1 ? document.querySelector(hash) : null;
    if (!target) return false;
    // Settle any reveal animations inside the target first, so the section
    // doesn't slide after we land on it.
    target.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
    var headerEl = document.getElementById("site-header");
    var offset = (headerEl ? headerEl.offsetHeight : 0) + 12;
    var y = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    return true;
  }
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var hash = a.getAttribute("href");
      if (hash === "#" || hash === "#main") return; // skip-link keeps default
      if (scrollToHash(hash)) {
        e.preventDefault(); // scroll without writing the hash to the URL
      }
    });
  });

  /* Scroll reveal */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* Contact form.
   * - If FORM_ENDPOINT is set (e.g. a Formspree URL), submits in the background.
   * - Otherwise falls back to opening the visitor's email app, pre-filled.
   * Messages come from window.FORM_MSGS (baked per language by build.js). */
  var FORM_ENDPOINT = ""; // paste a Formspree URL here, e.g. "https://formspree.io/f/xxxxxxx"
  var LEAD_TO = ["kmullaney67", "gmail.com"].join("@"); // interim destination; swap for hello@agenticsales.com when live

  var form = document.querySelector(".cta-form");
  if (form) {
    var MSG = window.FORM_MSGS || {
      thanks: "Thanks — we'll be in touch shortly.",
      invalid: "Please enter a valid email so we can reach you.",
      sending: "Sending…"
    };
    var status = form.querySelector(".form-status");
    function show(text, color) {
      if (!status) return;
      status.hidden = false;
      status.style.color = color;
      status.textContent = text;
    }
    var val = function (sel) { var el = form.querySelector(sel); return el ? el.value.trim() : ""; };

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = form.querySelector("#email");
      if (!email.value || email.validity.typeMismatch || !email.validity.valid) {
        show(MSG.invalid, "#f6d18a");
        email.focus();
        return;
      }

      if (FORM_ENDPOINT) {
        show(MSG.sending, "#f6d18a");
        fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(form)
        }).then(function (r) {
          if (!r.ok) throw new Error("bad response");
          show(MSG.thanks, "#7ed8a8");
          form.reset();
        }).catch(function () {
          show(MSG.invalid, "#f6d18a");
        });
        return;
      }

      // Fallback: open a pre-filled email to the lead inbox.
      var subject = "Stateside — inquiry from " + (val("#name") || email.value);
      var body =
        "Name: " + val("#name") + "\n" +
        "Email: " + email.value + "\n" +
        "Brokerage & market: " + val("#brokerage") + "\n";
      window.location.href =
        "mailto:" + LEAD_TO +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
      show(MSG.thanks, "#7ed8a8");
      form.reset();
    });
  }
})();
