/* Stateside Certified™ — landing page interactions */
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

  /* Contact form (front-end only stub) */
  var form = document.querySelector(".cta-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = form.querySelector(".form-status");
      var email = form.querySelector("#email");
      if (!email.value || email.validity.typeMismatch || !email.validity.valid) {
        if (status) {
          status.hidden = false;
          status.style.color = "#f6d18a";
          status.textContent = "Please enter a valid email so we can reach you.";
        }
        email.focus();
        return;
      }
      if (status) {
        status.hidden = false;
        status.style.color = "#7ed8a8";
        status.textContent = "Thanks — we'll be in touch shortly.";
      }
      form.reset();
    });
  }
})();
