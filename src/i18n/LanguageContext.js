"use client"
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import translations from './translations';

const LanguageContext = createContext();
const STORAGE_KEY = 'locale';

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('es');
  // False until the stored/browser language has been applied after hydration;
  // text that animates in (rotating roles) waits for it to avoid a language swap.
  const [resolved, setResolved] = useState(false);

  // A language the visitor picked wins over the browser's preference.
  useEffect(() => {
    let stored = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      // Storage unavailable (private mode); fall back to the browser language.
    }
    if (stored === 'es' || stored === 'en') {
      setLocale(stored);
    } else {
      const browserLang = navigator.language || navigator.languages?.[0] || '';
      if (browserLang.startsWith('en')) setLocale('en');
    }
    setResolved(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const t = useCallback((key) => {
    const keys = key.split('.');
    let value = translations[locale];
    for (const k of keys) {
      if (value == null) return key;
      value = value[k];
    }
    return value || key;
  }, [locale]);

  const toggleLocale = useCallback(() => {
    const next = locale === 'es' ? 'en' : 'es';
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
      // The toggle still works for this page without storage.
    }
    setLocale(next);
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, resolved, setLocale, t, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
