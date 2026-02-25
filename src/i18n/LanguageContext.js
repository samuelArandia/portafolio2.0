"use client"
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import translations from './translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('es');

  useEffect(() => {
    const browserLang = navigator.language || navigator.languages?.[0] || '';
    if (browserLang.startsWith('en')) {
      setLocale('en');
    }
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
    setLocale(prev => prev === 'es' ? 'en' : 'es');
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
