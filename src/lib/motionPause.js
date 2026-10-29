"use client";

import { useCallback, useSyncExternalStore } from "react";

// One switch for the site's looping animations (rotating roles, stack
// marquees). Remembered across pages; prefers-reduced-motion is handled
// separately by each component and always wins.
const STORAGE_KEY = "motion-paused";
const listeners = new Set();
let paused = null;

function read() {
  if (paused === null) {
    try {
      paused = localStorage.getItem(STORAGE_KEY) === "1";
    } catch (e) {
      paused = false;
    }
  }
  return paused;
}

function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useMotionPaused() {
  const value = useSyncExternalStore(subscribe, read, () => false);
  const toggle = useCallback(() => {
    paused = !read();
    try {
      localStorage.setItem(STORAGE_KEY, paused ? "1" : "0");
    } catch (e) {
      // Without storage the choice still applies to this page.
    }
    listeners.forEach((listener) => listener());
  }, []);
  return [value, toggle];
}

export function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (listener) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", listener);
      return () => mq.removeEventListener("change", listener);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );
}
