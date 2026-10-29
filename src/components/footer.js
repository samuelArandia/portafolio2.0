"use client"
import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";
import ExternalArrow from "@/components/ExternalArrow";
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
        <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-lg font-semibold tracking-tight text-fg">Samuel Arandia</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-fg-2">{t('footer.aboutText')}</p>
            <a href={`mailto:${EMAIL}`} className="link-underline mt-4 inline-block font-mono text-sm text-fg">
              {EMAIL}
            </a>
          </div>

          <nav aria-label={t('footer.navigationTitle')}>
            <h2 className="kicker">{t('footer.navigationTitle')}</h2>
            <ul className="mt-4 space-y-1">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <a
                    href={`/#${nav.id}`}
                    onClick={(e) => handleSectionLinkClick(e, nav.id)}
                    className="inline-block py-1 text-sm text-fg-2 transition-colors hover:text-fg"
                  >
                    {t(`nav.${nav.id}`)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="kicker">{t('footer.socialTitle')}</h2>
            <ul className="mt-4 space-y-1">
              {socialMedia.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-baseline gap-2 py-1 text-sm text-fg-2 transition-colors hover:text-fg"
                  >
                    {social.name}
                    <span className="font-mono text-xs text-muted">{social.handle}</span>
                    <ExternalArrow className="h-3.5 w-3.5 self-center" />
                    <span className="sr-only">{t('common.newTab')}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-line">
          <p className="container-page py-6 font-mono text-xs text-muted">
            &copy; {year} Samuel Arandia. {t('footer.copyright')}
          </p>
        </div>
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
