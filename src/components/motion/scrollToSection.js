"use client";

import { getLenis } from "./SmoothScroll";

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

export function scrollToSection(id, offset = -80) {
  const el = document.getElementById(id);
  if (!el) return;

  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(el, { offset, duration: 1.2, easing: easeOutCubic });
    return;
  }

  const top = el.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top, behavior: "smooth" });
}
