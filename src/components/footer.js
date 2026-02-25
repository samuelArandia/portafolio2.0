"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaChevronUp } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { socialMedia } from "@/constants";

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
      <footer className="py-12 sm:py-16 px-5 sm:px-8" id="Footer">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          {/* Logo */}
          <Image src={logoUrl} alt="Samuel Arandia Logo" width={80} height={20} className="mb-6 opacity-80" />

          {/* Social icons */}
          <div className="flex items-center gap-4 mb-8">
            {socialMedia.map((social) => (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar ${social.id.replace('social-media-', 'red social ')}`}
                className="text-xl transition-all duration-200 hover:text-[var(--accent-primary)] hover:-translate-y-0.5 cursor-pointer"
                style={{ color: 'var(--text-muted)' }}
              >
                {social.id === "social-media-1" && <FaInstagram />}
                {social.id === "social-media-2" && <FaFacebook />}
                {social.id === "social-media-3" && <BsTwitterX />}
                {social.id === "social-media-4" && <FaLinkedin />}
                {social.id === "social-media-5" && <FaGithub />}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-16 h-px mb-6" style={{ background: 'var(--card-border)' }} />

          {/* Copyright */}
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            © {year} Samuel Arandia. Todos los derechos reservados.
          </p>
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
