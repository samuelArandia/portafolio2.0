"use client"
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "@/constants";
import { handleSectionLinkClick } from "@/components/motion/scrollToSection";
import { useLanguage } from '@/i18n/LanguageContext';
import { useTheme } from "@/lib/theme";

const sectionLinks = navLinks.filter((nav) => nav.id !== "Inicio");

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Inicio");
  const menuButtonRef = useRef(null);
  const { locale, toggleLocale, t } = useLanguage();
  const { toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
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

  // Escape closes the mobile menu; widening past the breakpoint resets it.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    // The panel becomes display:none at md, which can drop focus before the
    // media query event fires, so remember the last link focused inside it.
    const panel = document.getElementById('mobile-nav');
    let lastFocusedHref = null;
    const onFocusIn = (e) => { lastFocusedHref = e.target.getAttribute('href'); };
    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = (e) => {
      if (!e.matches) return;
      const focused = document.activeElement;
      const focusLost = !focused || focused === document.body || panel?.contains(focused);
      if (focusLost && lastFocusedHref) {
        document.querySelector(`header nav a[href="${lastFocusedHref}"]`)?.focus();
      }
      setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    panel?.addEventListener('focusin', onFocusIn);
    mq.addEventListener('change', onChange);
    return () => {
      window.removeEventListener('keydown', onKey);
      panel?.removeEventListener('focusin', onFocusIn);
      mq.removeEventListener('change', onChange);
    };
  }, [menuOpen]);

  const onNavClick = (e, id) => {
    setMenuOpen(false);
    handleSectionLinkClick(e, id);
  };

  const solid = scrolled || menuOpen;
  const nextLocale = locale === 'es' ? 'en' : 'es';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid ? 'border-line backdrop-blur-md' : 'border-transparent'
      }`}
      style={{ background: solid ? 'var(--nav-bg)' : 'transparent' }}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a
          href="/#Inicio"
          onClick={(e) => onNavClick(e, 'Inicio')}
          aria-label={t('header.home')}
          className="-ml-1 flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-md px-1 py-1 text-[0.9375rem] font-semibold tracking-tight text-fg"
        >
          <Image src="/icon.svg" alt="" width={28} height={28} className="h-7 w-7 max-[359px]:hidden" priority />
          <span aria-hidden="true">Samuel Arandia</span>
        </a>

        <nav aria-label={t('header.navLabel')} className="hidden md:block">
          <ul className="flex items-center gap-1">
            {sectionLinks.map((nav) => {
              const isActive = activeSection === nav.id;
              return (
                <li key={nav.id}>
                  <a
                    href={`/#${nav.id}`}
                    onClick={(e) => onNavClick(e, nav.id)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative block rounded-md px-3 py-2 text-sm transition-colors duration-200 ${
                      isActive ? 'text-fg' : 'text-fg-2 hover:text-fg'
                    }`}
                  >
                    {t(`nav.${nav.id}`)}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-3 -bottom-px h-px origin-left bg-accent transition-transform duration-300 ease-premium ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={toggleLocale}
            lang={nextLocale}
            className="h-10 min-w-[2.75rem] rounded-md px-2 font-mono text-xs font-medium text-fg-2 transition-colors hover:bg-surface hover:text-fg"
          >
            {/* Visible code first so the accessible name contains the visible label */}
            {nextLocale.toUpperCase()}
            <span className="sr-only">: {t('header.switchLang')}</span>
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-md text-fg-2 transition-colors hover:bg-surface hover:text-fg"
          >
            <FiSun className="when-dark h-[18px] w-[18px]" aria-hidden="true" />
            <FiMoon className="when-light h-[18px] w-[18px]" aria-hidden="true" />
            <span className="when-dark sr-only">{t('header.switchToLight')}</span>
            <span className="when-light sr-only">{t('header.switchToDark')}</span>
          </button>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? t('header.closeMenu') : t('header.openMenu')}
            className="flex h-10 w-10 items-center justify-center rounded-md text-fg transition-colors hover:bg-surface md:hidden"
          >
            {menuOpen ? <FiX className="h-5 w-5" aria-hidden="true" /> : <FiMenu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div id="mobile-nav" hidden={!menuOpen} className="border-t border-line md:hidden">
        <nav aria-label={t('header.navLabel')} className="container-page py-2">
          <ul>
            {sectionLinks.map((nav, i) => {
              const isActive = activeSection === nav.id;
              return (
                <li key={nav.id} className="border-b border-line last:border-b-0">
                  <a
                    href={`/#${nav.id}`}
                    onClick={(e) => onNavClick(e, nav.id)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`flex items-baseline gap-4 py-4 text-lg ${isActive ? 'text-fg' : 'text-fg-2'}`}
                  >
                    <span className="font-mono text-xs text-muted" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                    {t(`nav.${nav.id}`)}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
