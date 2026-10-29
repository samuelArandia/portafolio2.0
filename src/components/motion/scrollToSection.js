"use client";

import { getLenis } from "./SmoothScroll";

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

// Document Y of an element ignoring CSS transforms (offsetTop does), so a
// target still mid-reveal (translateY) resolves to where it will settle.
function documentTop(el) {
  let top = 0;
  for (let node = el; node; node = node.offsetParent) top += node.offsetTop;
  return top;
}

// Header clearance comes from html { scroll-padding-top } in globals.css, the
// same value the browser uses for native anchor jumps and focus scrolling.
function headerClearance() {
  const value = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop);
  return Number.isNaN(value) ? 0 : value;
}

export function scrollToSection(id, { immediate = false } = {}) {
  const el = document.getElementById(id);
  if (!el) return false;

  const top = Math.max(0, documentTop(el) - headerClearance());
  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(top, immediate ? { immediate: true } : { duration: 0.9, easing: easeOutCubic });
  } else {
    // "instant" overrides html { scroll-behavior: smooth }; "auto" would not.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top, behavior: immediate || reduced ? "instant" : "smooth" });
  }
  return true;
}

// onClick for <a href="/#id"> links. When the section is on the current page,
// scroll to it and move keyboard focus there; otherwise let the browser
// navigate to the home page anchor.
export function handleSectionLinkClick(event, id) {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const el = document.getElementById(id);
  if (!el) return;
  event.preventDefault();
  scrollToSection(id);
  if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
  el.focus({ preventScroll: true });
}
