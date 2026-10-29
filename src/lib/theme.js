"use client";

import { useCallback } from "react";
import { THEME_STORAGE_KEY } from "./themeScript";

// The current theme lives on <html data-theme>; UI that depends on it uses the
// .when-dark / .when-light classes, so there is no state to sync on hydration.
export function useTheme() {
  const toggleTheme = useCallback(() => {
    const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch (e) {
      // Storage can be unavailable (private mode); the toggle still works for this visit.
    }
  }, []);

  return { toggleTheme };
}
