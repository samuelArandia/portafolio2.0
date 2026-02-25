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
import Aos from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
    Aos.init({ once: true, duration: 600, easing: 'ease-out' });
  }, []);

  return (
    <>
      {/* Background dots */}
      <div
        className="fixed inset-0 z-[-10] transition-colors duration-300"
        style={{
          backgroundColor: 'var(--bg-primary)',
          backgroundImage: 'radial-gradient(var(--dot-color) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />

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
    </>
  );
}

export default Home;
