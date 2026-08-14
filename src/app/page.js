"use client"
import React, { useState, useEffect } from "react";
import Header from '@/components/header'
import Footer from '@/components/footer'
import Inicio from '@/components/home'
import Portafolio from '@/components/portfolio'
import About from '@/components/about'
import Skills from '@/components/skills'
import Contact from '@/components/contact'
import TechMarquee from '@/components/techMarquee'
import { LanguageProvider } from '@/i18n/LanguageContext'
import SmoothScroll from '@/components/motion/SmoothScroll'
import Cursor from '@/components/motion/Cursor'

function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <LanguageProvider>
      {/* Base background */}
      <div
        className="fixed inset-0 z-[-10] transition-colors duration-300"
        style={{ backgroundColor: 'var(--bg-primary)' }}
      />
      <div className="grain-overlay" />
      <Cursor />

      <SmoothScroll>
        <main>
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <div className="relative z-10">
            <Inicio />
            <TechMarquee />
            <Portafolio />
            <About />
            <Skills />
            <Contact />
            <Footer />
          </div>
        </main>
      </SmoothScroll>
    </LanguageProvider>
  );
}

export default Home;
