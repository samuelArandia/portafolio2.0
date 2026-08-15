"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

let activeLenis = null;

export function getLenis() {
  return activeLenis;
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

export default function SmoothScroll({ children }) {
  const rafId = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return undefined;

    const lenis = new Lenis({
      duration: 0.6,
      easing: easeOutCubic,
      smoothWheel: true,
      wheelMultiplier: 1.1,
    });
    activeLenis = lenis;

    function raf(time) {
      lenis.raf(time);
      rafId.current = requestAnimationFrame(raf);
    }
    rafId.current = requestAnimationFrame(raf);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      lenis.destroy();
      activeLenis = null;
    };
  }, []);

  return children;
}
