/* ============================================
   Micro Apps — Minimal JS
   No dependencies
   ============================================ */

(function () {
  'use strict';

  // -- Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // -- Header scroll effect
  const header = document.querySelector('.header');
  let lastScroll = 0;
  const SCROLL_THRESHOLD = 10;

  function onScroll() {
    const y = window.scrollY;
    if (y > SCROLL_THRESHOLD) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScroll = y;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // initial check

  // -- Scroll-reveal (IntersectionObserver)
  const revealTargets = document.querySelectorAll(
    '.app-card, .principle, .section-header, .cta-card, .store-badges, .hero-content, .hero-visual'
  );

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    revealTargets.forEach((el, i) => {
      el.classList.add('reveal');
      // Stagger cards
      if (el.classList.contains('app-card') || el.classList.contains('principle')) {
        const siblings = el.parentElement.children;
        const index = Array.from(siblings).indexOf(el);
        el.classList.add('reveal-delay-' + (index + 1));
      }
      observer.observe(el);
    });
  }

  // -- Smooth scroll for anchor links (fallback for older browsers)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
