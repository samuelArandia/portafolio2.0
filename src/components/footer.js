"use client"
import React, { useState, useEffect } from "react";
import { FaChevronUp, FaHeart } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import ExternalArrow from "@/components/ExternalArrow";
import { socialMedia, navLinks, projects, EMAIL, CV_FILES } from "@/constants";
import { handleSectionLinkClick } from "@/components/motion/scrollToSection";
import { getLenis } from "@/components/motion/SmoothScroll";
import { useLanguage } from '@/i18n/LanguageContext';

const professional = socialMedia.filter((s) => s.name === 'LinkedIn' || s.name === 'GitHub');
const personal = socialMedia.filter((s) => !professional.includes(s));

// Closing block: contact first (email, professional links, CV), then
// navigation and projects, the <samuel.dev/> wordmark, and the credits bar.
function Footer() {
  const year = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { t, locale } = useLanguage();

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

  const columnLink = "inline-block py-1 text-fg-2 transition-colors duration-200 hover:text-accent";

  return (
    <>
      <footer className="relative overflow-hidden border-t border-line" id="Footer">
        <div className="container-page pb-8 pt-20 md:pt-24">
          <div className="grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-12 md:gap-10">
            {/* Contact */}
            <div className="col-span-2 md:col-span-12 lg:col-span-6">
              <h2 className="kicker">{t('footer.cta')}</h2>
              <a
                href={`mailto:${EMAIL}`}
                className="link-underline mt-4 inline-block break-all text-[clamp(1.2rem,6.2vw,2.375rem)] font-semibold tracking-[-0.03em] text-fg lg:text-[2rem] xl:text-[2.375rem]"
              >
                {EMAIL}
              </a>
              <p className="mt-4 flex items-center gap-2 text-sm text-muted">
                <FiMapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                {t('contact.locationValue')}
              </p>
              <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-2">
                {professional.map((social) => (
                  <li key={social.id}>
                    <a href={social.link} target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-[2.75rem] items-center gap-1.5 font-medium text-fg">
                      <span className="link-underline">{social.name}</span>
                      <ExternalArrow />
                      <span className="sr-only">{t('common.newTab')}</span>
                    </a>
                  </li>
                ))}
                <li>
                  <a href={CV_FILES[locale]} target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-[2.75rem] items-center gap-1.5 font-medium text-fg">
                    <span className="link-underline">{t('hero.downloadCV')}</span>
                    <ExternalArrow />
                    <span className="sr-only">{t('common.newTab')}</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Navigation */}
            <nav aria-label={t('footer.navigationTitle')} className="col-span-1 md:col-span-5 lg:col-span-2 lg:col-start-8">
              <h2 className="kicker">{t('footer.navigationTitle')}</h2>
              <ul className="mt-4 space-y-1">
                {navLinks.map((nav) => (
                  <li key={nav.id}>
                    <a href={`/#${nav.id}`} onClick={(e) => handleSectionLinkClick(e, nav.id)} className={columnLink}>
                      {t(`nav.${nav.id}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Projects */}
            <div className="col-span-1 md:col-span-7 lg:col-span-3">
              <h2 className="kicker">{t('footer.projectsTitle')}</h2>
              <ul className="mt-4 space-y-1">
                {projects.map((project) => (
                  <li key={project.id}>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={`group ${columnLink} inline-flex items-center gap-1.5`}>
                      {project.title}
                      <ExternalArrow className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                      <span className="sr-only">{t('common.newTab')}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Wordmark: decorative, sized so 13 monospace characters always fit the container */}
          <p
            aria-hidden="true"
            className="mt-20 select-none whitespace-nowrap font-mono text-[clamp(2rem,11vw,8.5rem)] font-semibold leading-none tracking-[-0.06em] text-fg md:mt-24"
          >
            <span className="text-accent">&lt;</span>samuel.dev<span className="text-accent">/&gt;</span>
          </p>

          {/* Credits bar */}
          <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 text-sm text-muted lg:flex-row lg:items-center lg:justify-between">
            <p>&copy; {year} Samuel Arandia. {t('footer.copyright')}</p>
            <ul aria-label={t('footer.socialTitle')} className="-mx-2 flex flex-wrap gap-x-1 lg:mx-0 lg:gap-x-3">
              {personal.map((social) => (
                <li key={social.id}>
                  <a href={social.link} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[2.75rem] min-w-[2.75rem] items-center px-2 transition-colors hover:text-accent lg:min-h-0 lg:min-w-0 lg:px-0">
                    {social.name}
                    <span className="sr-only">{t('common.newTab')}</span>
                  </a>
                </li>
              ))}
            </ul>
            <p>
              {t('footer.builtWith')}{' '}
              <span className="whitespace-nowrap">
                <FaHeart className="inline align-[-1px] text-[10px] text-accent" aria-hidden="true" />{' '}
                <span className="font-mono text-accent">samuel.dev</span>
              </span>
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
