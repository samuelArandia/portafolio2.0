"use client"
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { navLinks } from "@/constants";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { Link } from 'react-scroll';

function Header({ darkMode, toggleDarkMode }) {
  const [toggle, setToggle] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Inicio");
  const [lastScrollY, setLastScrollY] = useState(0);
  const logoUrl = "/logo.png";

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setScrolled(currentScrollY > 20);
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setVisible(false);
      setToggle(false);
    } else {
      setVisible(true);
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${
        scrolled
          ? 'py-2 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20'
          : 'py-4 bg-transparent'
      }`}
      aria-label="Navegación principal"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="cursor-pointer flex-shrink-0">
          <Image
            src={logoUrl}
            alt="Samuel Arandia - Inicio"
            width={100}
            height={28}
            className="transition-opacity hover:opacity-80"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((nav, index) => (
            <Link
              key={nav.id}
              to={nav.id}
              smooth={true}
              duration={500}
              offset={-80}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg cursor-pointer transition-all duration-200 ${
                activeSection === nav.id
                  ? 'text-[var(--accent-primary)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {nav.title}
              {activeSection === nav.id && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-[var(--accent-primary)] rounded-full" />
              )}
            </Link>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggleDarkMode}
            aria-label={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            className="ml-3 p-2.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-white/5 transition-all duration-200 cursor-pointer"
          >
            {darkMode ? <BsSun className="text-lg" /> : <BsMoonStars className="text-lg" />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleDarkMode}
            aria-label={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            className="p-2.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors cursor-pointer"
          >
            {darkMode ? <BsSun className="text-lg" /> : <BsMoonStars className="text-lg" />}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setToggle(!toggle)}
            aria-label={toggle ? "Cerrar menú" : "Abrir menú"}
            className="relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
          >
            <div className="w-5 flex flex-col gap-[5px]">
              <span className={`block h-[2px] bg-current rounded-full transition-all duration-300 ${
                toggle ? 'rotate-45 translate-y-[7px]' : ''
              }`} />
              <span className={`block h-[2px] bg-current rounded-full transition-all duration-300 ${
                toggle ? 'opacity-0 scale-0' : ''
              }`} />
              <span className={`block h-[2px] bg-current rounded-full transition-all duration-300 ${
                toggle ? '-rotate-45 -translate-y-[7px]' : ''
              }`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          toggle ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 pt-2 mt-2 mx-4 rounded-xl glass">
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
                  ? 'text-[var(--accent-primary)] bg-white/5'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5'
              }`}
            >
              {nav.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Header;
