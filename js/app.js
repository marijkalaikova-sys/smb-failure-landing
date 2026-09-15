/* =============================================================
   app.js — language switching and the one animated moment.
   No dependencies. Runs from file:// with no server.
   ============================================================= */

(function () {
  'use strict';

  /* ---------- language switcher ------------------------------ */

  function initLang() {
    var buttons = document.querySelectorAll('.lang-btn');
    if (!buttons.length) return;

    function paint(active) {
      for (var i = 0; i < buttons.length; i++) {
        var btn = buttons[i];
        var on = btn.getAttribute('data-lang') === active;
        btn.classList.toggle('is-active', on);
        if (on) {
          btn.setAttribute('aria-current', 'true');
        } else {
          btn.removeAttribute('aria-current');
        }
      }
    }

    paint(applyI18n(i18nStoredLang()));

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function (event) {
        var wanted = event.currentTarget.getAttribute('data-lang');
        var applied = applyI18n(wanted);
        i18nRememberLang(applied);
        paint(applied);
      });
    }
  }

  /* ---------- the single animated moment ---------------------
     The survival line draws itself once, when it scrolls into
     view. It is the only motion on the page, and it carries the
     section's argument: the rate climbs steeply, then flattens.
     If anything here fails, the line is already fully visible —
     priming only ever happens after a successful measurement.
     ----------------------------------------------------------- */

  function initChart() {
    var chart = document.querySelector('.chart');
    if (!chart) return;

    var line = chart.querySelector('.chart-line');
    if (!line || typeof line.getTotalLength !== 'function') return;

    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    var length;
    try {
      length = line.getTotalLength();
    } catch (e) {
      return;
    }
    if (!length || !isFinite(length)) return;

    line.style.strokeDasharray = String(length);
    chart.style.setProperty('--dash', String(length));
    chart.classList.add('is-primed');

    function draw() {
      chart.classList.add('is-drawn');
    }

    if (!('IntersectionObserver' in window)) {
      draw();
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          draw();
          observer.disconnect();
          return;
        }
      }
    }, { threshold: 0.35 });

    observer.observe(chart);
  }

  function init() {
    initLang();
    initChart();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
