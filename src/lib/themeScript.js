export const THEME_STORAGE_KEY = "theme";

// Runs inline in <head> before first paint so the stored or system theme is
// applied without a flash. Kept as a string because it can't import anything.
export const themeInitScript = `(function(){try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.setAttribute('data-theme',t)}catch(e){document.documentElement.setAttribute('data-theme','dark')}})()`;
