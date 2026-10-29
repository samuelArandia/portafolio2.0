"use client"
import React, { useState, useEffect } from "react";
import { FaChevronUp, FaEnvelope, FaMapMarkerAlt, FaHeart, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { socialMedia, navLinks, projects, EMAIL } from "@/constants";
import { handleSectionLinkClick } from "@/components/motion/scrollToSection";
import { getLenis } from "@/components/motion/SmoothScroll";
import { useLanguage } from '@/i18n/LanguageContext';

// Restored from the previous design: about + tagline, projects, navigation and
// social columns, with the "built by" bar underneath.
const socialIcons = {
  Instagram: FaInstagram,
  Facebook: FaFacebook,
  X: BsTwitterX,
  LinkedIn: FaLinkedin,
  GitHub: FaGithub,
};

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

  const columnTitle = "mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-accent";
  const columnLink = "inline-block py-0.5 text-sm text-muted transition-all duration-200 hover:translate-x-1 hover:text-accent";

  return (
    <>
      <footer className="relative overflow-hidden border-t border-line pb-8 pt-16" id="Footer">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {/* About column */}
            <div className="sm:col-span-2 lg:col-span-1">
              <p className="mb-4 text-sm leading-relaxed text-muted">{t('footer.aboutText')}</p>
              <span className="inline-block rounded-full border border-line-strong bg-surface px-3 py-1 font-mono text-xs text-accent">
                {t('footer.tagline')}
              </span>
              <div className="mb-2 mt-4 flex items-center gap-2 text-xs text-muted">
                <FaEnvelope className="text-sm text-accent" aria-hidden="true" />
                <a href={`mailto:${EMAIL}`} className="py-1 transition-colors hover:text-accent">{EMAIL}</a>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted">
                <FaMapMarkerAlt className="text-sm text-accent" aria-hidden="true" />
                <span>{t('contact.locationValue')}</span>
              </div>
            </div>

            {/* Projects column */}
            <div>
              <h2 className={columnTitle}>{t('footer.projectsTitle')}</h2>
              <ul className="space-y-2">
                {projects.map((project) => (
                  <li key={project.id}>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={columnLink}>
                      {project.title}
                      <span className="sr-only">{t('common.newTab')}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation column */}
            <nav aria-label={t('footer.navigationTitle')}>
              <h2 className={columnTitle}>{t('footer.navigationTitle')}</h2>
              <ul className="space-y-2">
                {navLinks.map((nav) => (
                  <li key={nav.id}>
                    <a href={`/#${nav.id}`} onClick={(e) => handleSectionLinkClick(e, nav.id)} className={columnLink}>
                      {t(`nav.${nav.id}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social column */}
            <div>
              <h2 className={columnTitle}>{t('footer.socialTitle')}</h2>
              <ul className="flex flex-wrap gap-2">
                {socialMedia.map((social) => {
                  const Icon = socialIcons[social.name];
                  return (
                  <li key={social.id}>
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-lg text-muted transition-all duration-200 hover:-translate-y-0.5 hover:text-accent"
                    >
                      <Icon aria-hidden="true" />
                      <span className="sr-only">{social.name} {t('common.newTab')}</span>
                    </a>
                  </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 pt-6 sm:flex-row">
            <p className="text-xs text-muted">
              &copy; {year} Samuel Arandia. {t('footer.copyright')}
            </p>
            <p className="flex items-center gap-1.5 text-xs text-muted">
              {t('footer.builtWith')}
              <FaHeart className="text-[10px] text-accent" aria-hidden="true" />
              <span className="font-mono text-accent">samuel.dev</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label={t('footer.scrollTop')}
        tabIndex={showScrollTop ? 0 : -1}
        aria-hidden={!showScrollTop}
        className={`fixed bottom-6 right-6 z-40 rounded-xl bg-accent p-3 text-on-accent transition-all duration-300 hover:-translate-y-0.5 ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
        style={{ boxShadow: '0 4px 20px var(--accent-soft)' }}
      >
        <FaChevronUp className="text-sm" aria-hidden="true" />
      </button>
    </>
  );
}

export default Footer;
