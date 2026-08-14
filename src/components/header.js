"use client"
import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { navLinks } from "@/constants";
import { BsSun } from "react-icons/bs";
import { GiDeathStar } from "react-icons/gi";
import { scrollToSection } from "@/components/motion/scrollToSection";
import { EASE_PREMIUM } from "@/lib/motion";
import { useLanguage } from '@/i18n/LanguageContext';

function Header({ darkMode, toggleDarkMode }) {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Inicio");
  const { locale, toggleLocale, t } = useLanguage();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    navLinks.forEach((nav) => {
      const el = document.getElementById(nav.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setToggle(false);
  };

  const langButton = (size = "text-xs") => (
    <button
      onClick={toggleLocale}
      className={`${size} font-semibold font-body px-2.5 py-1.5 rounded-lg transition-all duration-200 cursor-pointer hover:text-[var(--accent-primary)]`}
      style={{ color: 'var(--text-secondary)', background: 'var(--glass-bg)' }}
      aria-label={locale === 'es' ? 'Switch to English' : 'Cambiar a Español'}
      data-cursor-hover
    >
      {locale === 'es' ? 'EN' : 'ES'}
    </button>
  );

  return (
    <>
      {/* Top bar - visible when NOT scrolled */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50"
        animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? -24 : 0 }}
        transition={{ duration: 0.5, ease: EASE_PREMIUM }}
        style={{ pointerEvents: scrolled ? 'none' : 'auto' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-end items-center">
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((nav) => {
              const isActive = activeSection === nav.id;
              return (
                <button
                  key={nav.id}
                  onClick={() => handleNavClick(nav.id)}
                  data-cursor-hover
                  className={`relative px-3 py-2 text-sm font-medium cursor-pointer transition-colors duration-200 ${
                    isActive ? 'text-[var(--accent-primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {t(`nav.${nav.id}`)}
                  {isActive && (
                    <motion.span
                      layoutId="topbar-underline"
                      className="absolute left-3 right-3 -bottom-0.5 h-px"
                      style={{ background: 'var(--accent-primary)' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
            {langButton()}
            <button
              onClick={toggleDarkMode}
              aria-label={darkMode ? t('header.switchToLight') : t('header.switchToDark')}
              data-cursor-hover
              className="ml-1 p-2.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--glass-bg)] transition-all duration-200 cursor-pointer"
            >
              {darkMode ? <BsSun className="text-lg" /> : <GiDeathStar className="text-lg" />}
            </button>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-2">
            {langButton()}
            <button
              onClick={toggleDarkMode}
              aria-label={darkMode ? t('header.switchToLight') : t('header.switchToDark')}
              className="p-2.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors cursor-pointer"
            >
              {darkMode ? <BsSun className="text-lg" /> : <GiDeathStar className="text-lg" />}
            </button>
            <button
              onClick={() => setToggle(!toggle)}
              aria-label={toggle ? t('header.closeMenu') : t('header.openMenu')}
              className="relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[var(--glass-bg)] transition-colors cursor-pointer"
            >
              <div className="w-5 flex flex-col gap-[5px]">
                <span className={`block h-[2px] rounded-full transition-all duration-300 ${toggle ? 'rotate-45 translate-y-[7px]' : ''}`} style={{ background: 'var(--text-primary)' }} />
                <span className={`block h-[2px] rounded-full transition-all duration-300 ${toggle ? 'opacity-0 scale-0' : ''}`} style={{ background: 'var(--text-primary)' }} />
                <span className={`block h-[2px] rounded-full transition-all duration-300 ${toggle ? '-rotate-45 -translate-y-[7px]' : ''}`} style={{ background: 'var(--text-primary)' }} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu - top bar */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${toggle ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 pb-4 pt-2 mx-4 rounded-xl glass">
            {navLinks.map((nav) => (
              <button
                key={nav.id}
                onClick={() => handleNavClick(nav.id)}
                className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-lg cursor-pointer transition-colors duration-200 ${
                  activeSection === nav.id
                    ? 'text-[var(--accent-primary)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
                style={activeSection === nav.id ? { background: 'var(--glass-bg)' } : {}}
              >
                {t(`nav.${nav.id}`)}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating pill navbar - visible when scrolled */}
      <motion.div
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
        animate={{ opacity: scrolled ? 1 : 0, y: scrolled ? 0 : -24 }}
        transition={{ duration: 0.5, ease: EASE_PREMIUM }}
        style={{ pointerEvents: scrolled ? 'auto' : 'none' }}
      >
        {/* Desktop pill */}
        <div className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full backdrop-blur-xl border"
          style={{ background: 'var(--nav-bg)', borderColor: 'var(--glass-border)', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
        >
          {navLinks.map((nav) => {
            const isActive = activeSection === nav.id;
            return (
              <button
                key={nav.id}
                onClick={() => handleNavClick(nav.id)}
                data-cursor-hover
                className={`relative px-4 py-2 text-sm font-medium rounded-full cursor-pointer transition-colors duration-200 whitespace-nowrap ${
                  isActive ? 'text-white' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="pill-active-bg"
                    className="absolute inset-0 rounded-full -z-10"
                    style={{ background: 'var(--accent-gradient)' }}
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                {t(`nav.${nav.id}`)}
              </button>
            );
          })}
          {langButton()}
          <button
            onClick={toggleDarkMode}
            aria-label={darkMode ? t('header.switchToLight') : t('header.switchToDark')}
            data-cursor-hover
            className="p-2 rounded-full text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-all duration-200 cursor-pointer"
          >
            {darkMode ? <BsSun className="text-base" /> : <GiDeathStar className="text-base" />}
          </button>
        </div>

        {/* Mobile pill */}
        <div className="flex md:hidden items-center gap-2 px-3 py-2 rounded-full backdrop-blur-xl border"
          style={{ background: 'var(--nav-bg)', borderColor: 'var(--glass-border)', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
        >
          {langButton("text-[10px]")}
          <button
            onClick={toggleDarkMode}
            aria-label={darkMode ? t('header.switchToLight') : t('header.switchToDark')}
            className="p-1.5 rounded-full text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors cursor-pointer"
          >
            {darkMode ? <BsSun className="text-sm" /> : <GiDeathStar className="text-sm" />}
          </button>
          <button
            onClick={() => setToggle(!toggle)}
            aria-label={toggle ? t('header.closeMenu') : t('header.openMenu')}
            className="p-1.5 rounded-full hover:bg-[var(--glass-bg)] transition-colors cursor-pointer"
          >
            <div className="w-4 flex flex-col gap-[3px]">
              <span className={`block h-[1.5px] rounded-full transition-all duration-300 ${toggle ? 'rotate-45 translate-y-[4.5px]' : ''}`} style={{ background: 'var(--text-primary)' }} />
              <span className={`block h-[1.5px] rounded-full transition-all duration-300 ${toggle ? 'opacity-0 scale-0' : ''}`} style={{ background: 'var(--text-primary)' }} />
              <span className={`block h-[1.5px] rounded-full transition-all duration-300 ${toggle ? '-rotate-45 -translate-y-[4.5px]' : ''}`} style={{ background: 'var(--text-primary)' }} />
            </div>
          </button>
        </div>

        {/* Mobile dropdown from pill */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 mt-2 ${toggle && scrolled ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="rounded-2xl px-2 py-2 backdrop-blur-xl border"
            style={{ background: 'var(--nav-bg)', borderColor: 'var(--glass-border)', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
          >
            {navLinks.map((nav) => (
              <button
                key={nav.id}
                onClick={() => handleNavClick(nav.id)}
                className={`block w-full text-left px-4 py-2.5 text-sm font-medium rounded-xl cursor-pointer transition-colors duration-200 ${
                  activeSection === nav.id
                    ? 'text-white'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
                style={activeSection === nav.id ? { background: 'var(--accent-gradient)' } : {}}
              >
                {t(`nav.${nav.id}`)}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Header;
