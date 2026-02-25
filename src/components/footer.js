"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaChevronUp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { socialMedia, navLinks, projects } from "@/constants";
import { Link } from "react-scroll";
import { useLanguage } from '@/i18n/LanguageContext';

function Footer() {
  const logoUrl = "/logo.png";
  const year = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="pt-16 pb-8 px-5 sm:px-8 border-t" style={{ borderColor: 'var(--card-border)', background: 'var(--bg-secondary)' }} id="Footer">
        <div className="max-w-6xl mx-auto">
          {/* Main grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

            {/* About column */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <Image src={logoUrl} alt="Samuel Arandia Logo" width={90} height={24} />
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>
                {t('footer.aboutText')}
              </p>
              <div className="flex items-center gap-2 text-xs mb-2" style={{ color: 'var(--text-muted)' }}>
                <FaEnvelope className="text-[var(--accent-primary)] text-sm" />
                <a href="mailto:samuelarandia@gmail.com" className="hover:text-[var(--accent-primary)] transition-colors">
                  samuelarandia@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                <FaMapMarkerAlt className="text-[var(--accent-primary)] text-sm" />
                <span>{t('contact.locationValue')}</span>
              </div>
            </div>

            {/* Projects column */}
            <div>
              <h3 className="text-xs font-semibold font-display uppercase tracking-widest mb-4" style={{ color: 'var(--accent-primary)' }}>
                {t('footer.projectsTitle')}
              </h3>
              <ul className="space-y-2.5">
                {projects.map((project) => (
                  <li key={project.id}>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-[var(--accent-primary)] transition-all duration-200 hover:translate-x-1 inline-block"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {project.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation column */}
            <div>
              <h3 className="text-xs font-semibold font-display uppercase tracking-widest mb-4" style={{ color: 'var(--accent-primary)' }}>
                {t('footer.navigationTitle')}
              </h3>
              <ul className="space-y-2.5">
                {navLinks.map((nav) => (
                  <li key={nav.id}>
                    <Link
                      to={nav.id}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      className="text-sm hover:text-[var(--accent-primary)] transition-all duration-200 cursor-pointer hover:translate-x-1 inline-block"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {t(`nav.${nav.id}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social column */}
            <div>
              <h3 className="text-xs font-semibold font-display uppercase tracking-widest mb-4" style={{ color: 'var(--accent-primary)' }}>
                Social
              </h3>
              <div className="flex flex-wrap gap-2">
                {socialMedia.map((social) => (
                  <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t('footer.visitSocial')}
                    className="p-2.5 rounded-xl border text-lg transition-all duration-200 hover:-translate-y-0.5 hover:text-[var(--accent-primary)] cursor-pointer"
                    style={{ borderColor: 'var(--card-border)', color: 'var(--text-muted)' }}
                  >
                    {social.id === "social-media-1" && <FaInstagram />}
                    {social.id === "social-media-2" && <FaFacebook />}
                    {social.id === "social-media-3" && <BsTwitterX />}
                    {social.id === "social-media-4" && <FaLinkedin />}
                    {social.id === "social-media-5" && <FaGithub />}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: 'var(--card-border)' }}>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              &copy; {year} Samuel Arandia. {t('footer.copyright')}
            </p>
            <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-muted)' }}>
              <span className="inline-block w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--accent-primary)' }} />
              {t('contact.locationValue')}
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        aria-label={t('footer.scrollTop')}
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-xl text-white transition-all duration-300 cursor-pointer ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
        }`}
        style={{ background: 'var(--accent-gradient)', boxShadow: '0 4px 20px rgba(224, 64, 251, 0.3)' }}
      >
        <FaChevronUp className="text-sm" />
      </button>
    </>
  );
}

export default Footer;
