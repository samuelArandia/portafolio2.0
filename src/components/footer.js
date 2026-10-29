"use client"
import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";
import TechMark from "@/components/TechMark";
import { socialMedia, navLinks, EMAIL } from "@/constants";
import { handleSectionLinkClick } from "@/components/motion/scrollToSection";
import { getLenis } from "@/components/motion/SmoothScroll";
import { useLanguage } from '@/i18n/LanguageContext';

function Footer() {
  const year = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // On phones the floating button would sit over the text column, so it
    // only appears once the footer is in view.
    const wide = window.matchMedia('(min-width: 640px)');
    const handleScroll = () => {
      const nearBottom = window.innerHeight + window.scrollY > document.documentElement.scrollHeight - 400;
      setShowScrollTop(window.scrollY > 800 && (wide.matches || nearBottom));
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(0, { duration: 0.9 });
    else window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    document.querySelector('header a')?.focus({ preventScroll: true });
  };

  return (
    <>
      <footer className="border-t border-line">
        <div className="container-page flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold tracking-tight text-fg">Samuel Arandia</p>
            <a href={`mailto:${EMAIL}`} className="link-underline mt-1 inline-block text-sm text-fg-2">
              {EMAIL}
            </a>
          </div>

          <nav aria-label={t('footer.navigationTitle')}>
            <ul className="flex flex-wrap gap-x-5 gap-y-1">
              {navLinks.filter((nav) => nav.id !== 'Inicio').map((nav) => (
                <li key={nav.id}>
                  <a
                    href={`/#${nav.id}`}
                    onClick={(e) => handleSectionLinkClick(e, nav.id)}
                    className="inline-flex min-h-[2.75rem] items-center text-sm text-fg-2 transition-colors hover:text-fg"
                  >
                    {t(`nav.${nav.id}`)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul aria-label={t('footer.socialTitle')} className="-ml-2.5 flex items-center gap-1 md:ml-0 md:-mr-2.5">
            {socialMedia.map((social) => (
              <li key={social.id}>
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-md text-fg-2 transition-colors hover:bg-surface"
                >
                  <TechMark name={social.name} className="text-lg" />
                  <span className="sr-only">{social.name} {t('common.newTab')}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="container-page pb-8 font-mono text-xs text-muted">&copy; {year} Samuel Arandia</p>
      </footer>

      <button
        type="button"
        onClick={scrollToTop}
        aria-label={t('footer.scrollTop')}
        tabIndex={showScrollTop ? 0 : -1}
        aria-hidden={!showScrollTop}
        className={`fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-md border border-line-strong text-fg backdrop-blur-md transition-all duration-300 hover:border-fg-2 ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
        style={{ background: 'var(--nav-bg)' }}
      >
        <FiArrowUp className="h-4 w-4" aria-hidden="true" />
      </button>
    </>
  );
}

export default Footer;
