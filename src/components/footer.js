"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaChevronUp } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { socialMedia, navLinks, projects } from "@/constants";
import { Link } from "react-scroll";

function Footer() {
  const logoUrl = "/logo.png";
  const year = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

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
      <footer className="pt-16 px-5 sm:px-8 border-t border-white/[0.06]" style={{ background: 'var(--bg-secondary)' }} id="Footer">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* About column */}
            <div className="text-center sm:text-left">
              <div className="flex justify-center sm:justify-start mb-4">
                <Image src={logoUrl} alt="Samuel Arandia Logo" width={90} height={24} />
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Desarrollador de software en Santiago de Chile. Técnico en Programación y Análisis de Sistemas, en constante aprendizaje.
              </p>
            </div>

            {/* Portfolio column */}
            <div className="text-center sm:text-left">
              <h3 className="text-sm font-semibold font-display text-[var(--text-primary)] mb-4 uppercase tracking-wider">Proyectos</h3>
              <ul className="space-y-2.5">
                {projects.map((project) => (
                  <li key={project.id}>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors duration-200"
                    >
                      {project.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation column */}
            <div className="text-center sm:text-left">
              <h3 className="text-sm font-semibold font-display text-[var(--text-primary)] mb-4 uppercase tracking-wider">Navegación</h3>
              <ul className="space-y-2.5">
                {navLinks.map((nav) => (
                  <li key={nav.id}>
                    <Link
                      to={nav.id}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      className="text-sm text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors duration-200 cursor-pointer"
                    >
                      {nav.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-6 pb-8 border-t border-white/[0.06]">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Social icons */}
              <div className="flex gap-3">
                {socialMedia.map((social) => (
                  <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visitar ${social.id.replace('social-media-', 'red social ')}`}
                    className="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--accent-primary)] hover:bg-white/5 transition-all duration-200 text-base cursor-pointer"
                  >
                    {social.id === "social-media-1" && <FaInstagram />}
                    {social.id === "social-media-2" && <FaFacebook />}
                    {social.id === "social-media-3" && <BsTwitterX />}
                    {social.id === "social-media-4" && <FaLinkedin />}
                    {social.id === "social-media-5" && <FaGithub />}
                  </a>
                ))}
              </div>

              <p className="text-xs text-[var(--text-muted)]">
                © {year} Samuel Arandia. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        aria-label="Volver arriba"
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
