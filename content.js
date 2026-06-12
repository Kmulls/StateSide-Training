/* content.js — runtime renderer for window.CONTENT */
(function () {
  "use strict";

  function get(obj, path) {
    return path.split(".").reduce(function (x, k) {
      return x == null ? x : x[k];
    }, obj);
  }

  function render() {
    var C = window.CONTENT;
    if (!C) {
      console.warn("content.js: window.CONTENT not found.");
      return;
    }

    /* Fill data-c elements */
    document.querySelectorAll("[data-c]").forEach(function (el) {
      var key = el.getAttribute("data-c");
      var v = get(C, key);
      if (v == null) {
        console.warn("content.js: missing key \"" + key + "\"");
        return;
      }
      if (el.tagName === "TITLE") {
        document.title = v;
      } else {
        el.innerHTML = v;
      }
    });

    /* Fill meta description */
    var metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc && C.meta && C.meta.description != null) {
      metaDesc.setAttribute("content", C.meta.description);
    }

    /* Fill data-cph (placeholder) elements */
    document.querySelectorAll("[data-cph]").forEach(function (el) {
      var key = el.getAttribute("data-cph");
      var v = get(C, key);
      if (v == null) {
        console.warn("content.js: missing placeholder key \"" + key + "\"");
        return;
      }
      el.setAttribute("placeholder", v);
    });
  }

  /* This script is placed at the end of <body>. The entire DOM is parsed
     and available at this point even though readyState may still read
     "loading". Run render() immediately so injected nodes (including the
     #year span in footer.legal) exist in the DOM before script.js
     executes on the very next line. */
  render();
})();
