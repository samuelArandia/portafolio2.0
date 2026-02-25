"use client"
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { navLinks } from "@/constants";
import { BsSun } from "react-icons/bs";
import { GiDeathStar } from "react-icons/gi";
import { Link } from 'react-scroll';
import { useLanguage } from '@/i18n/LanguageContext';

function Header({ darkMode, toggleDarkMode }) {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Inicio");
  const logoUrl = "/logo.png";
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

  const langButton = (size = "text-xs") => (
    <button
      onClick={toggleLocale}
      className={`${size} font-semibold font-display px-2.5 py-1.5 rounded-lg transition-all duration-200 cursor-pointer hover:text-[var(--accent-primary)]`}
      style={{ color: 'var(--text-secondary)', background: 'var(--glass-bg)' }}
      aria-label={locale === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      {locale === 'es' ? 'EN' : 'ES'}
    </button>
  );

  return (
    <>
      {/* Top bar - visible when NOT scrolled */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100 translate-y-0'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <a href="/" className="cursor-pointer flex-shrink-0">
            <Image
              src={logoUrl}
              alt="Samuel Arandia - Home"
              width={100}
              height={28}
              className="transition-opacity hover:opacity-80"
              style={{ filter: 'hue-rotate(150deg) saturate(1.4) brightness(1.1)' }}
            />
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((nav) => (
              <Link
                key={nav.id}
                to={nav.id}
                smooth={true}
                duration={500}
                offset={-80}
                className={`px-3 py-2 text-sm font-medium rounded-lg cursor-pointer transition-all duration-200 ${
                  activeSection === nav.id
                    ? 'text-[var(--accent-primary)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {t(`nav.${nav.id}`)}
              </Link>
            ))}
            {langButton()}
            <button
              onClick={toggleDarkMode}
              aria-label={darkMode ? t('header.switchToLight') : t('header.switchToDark')}
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
              <Link
                key={nav.id}
                to={nav.id}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setToggle(false)}
                className={`block px-4 py-3 text-sm font-medium rounded-lg cursor-pointer transition-colors duration-200 ${
                  activeSection === nav.id
                    ? 'text-[var(--accent-primary)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
                style={activeSection === nav.id ? { background: 'var(--glass-bg)' } : {}}
              >
                {t(`nav.${nav.id}`)}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Floating pill navbar - visible when scrolled */}
      <div
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6 pointer-events-none'
        }`}
      >
        {/* Desktop pill */}
        <div className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full backdrop-blur-xl border"
          style={{ background: 'var(--nav-bg)', borderColor: 'var(--glass-border)', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
        >
          {navLinks.map((nav) => (
            <Link
              key={nav.id}
              to={nav.id}
              smooth={true}
              duration={500}
              offset={-80}
              className={`px-4 py-2 text-sm font-medium rounded-full cursor-pointer transition-all duration-200 whitespace-nowrap ${
                activeSection === nav.id
                  ? 'text-white'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
              style={activeSection === nav.id ? { background: 'var(--accent-gradient)' } : {}}
            >
              {t(`nav.${nav.id}`)}
            </Link>
          ))}
          {langButton()}
          <button
            onClick={toggleDarkMode}
            aria-label={darkMode ? t('header.switchToLight') : t('header.switchToDark')}
            className="p-2 rounded-full text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-all duration-200 cursor-pointer"
          >
            {darkMode ? <BsSun className="text-base" /> : <GiDeathStar className="text-base" />}
          </button>
        </div>

        {/* Mobile pill */}
        <div className="flex md:hidden items-center gap-2 px-3 py-2 rounded-full backdrop-blur-xl border"
          style={{ background: 'var(--nav-bg)', borderColor: 'var(--glass-border)', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
        >
          <a href="/" className="flex-shrink-0">
            <Image src={logoUrl} alt="Logo" width={28} height={28} className="rounded-full" style={{ filter: 'hue-rotate(150deg) saturate(1.4) brightness(1.1)' }} />
          </a>
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
              <Link
                key={nav.id}
                to={nav.id}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setToggle(false)}
                className={`block px-4 py-2.5 text-sm font-medium rounded-xl cursor-pointer transition-colors duration-200 ${
                  activeSection === nav.id
                    ? 'text-white'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
                style={activeSection === nav.id ? { background: 'var(--accent-gradient)' } : {}}
              >
                {t(`nav.${nav.id}`)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
