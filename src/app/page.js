"use client"
import React, { useState, useEffect } from "react";
import Header from '@/components/header'
import Footer from '@/components/footer'
import Inicio from '@/components/home'
import Portafolio from '@/components/portfolio'
import About from '@/components/about'
import Skills from '@/components/skills'
import Contact from '@/components/contact'
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    Aos.init({ once: true, duration: 600, easing: 'ease-out' });
  }, []);

  return (
    <>
      {/* Background */}
      {darkMode ? (
        <div
          className="fixed inset-0 z-[-10]"
          style={{
            backgroundColor: 'var(--bg-primary)',
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      ) : (
        <div
          className="fixed inset-0 z-[-10]"
          style={{
            backgroundColor: '#fafafa',
            backgroundImage: 'radial-gradient(#e0e0e0 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
      )}

      <main className={darkMode ? 'text-[var(--text-primary)]' : 'text-gray-800'}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="relative z-10">
          <Inicio />
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
