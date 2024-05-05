"use client"
import React, { useState, useEffect } from "react";
import Header from '@/components/header'
import Footer from '@/components/footer'
import Inicio from '@/components/home'
import Portafolio from '@/components/porfolio'
import About from '@/components/about'
import Skills from '@/components/skills'
import Contact from '@/components/contact'
import Aos from "aos";
import "aos/dist/aos.css";
import Loader from "@/components/loader";

function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    return () => setLoading(false);
  }, []);

  return (
    loading ? <Loader /> :
    <>
      {/* Fondo condicional basado en darkMode */}
      {darkMode ? (
        <div
          className="fixed inset-0 z-[-10] w-full h-full"
          style={{ backgroundColor: '#000000', backgroundImage: 'radial-gradient(#ffffff33 1px, #00091d 1px)', backgroundSize: '20px 20px', backgroundAttachment: 'fixed' }}
        ></div>
      ) : (
        <div
          className="fixed inset-0 z-[-10] w-full h-full"
          style={{ backgroundColor: 'rgb(255 255 255)', backgroundImage: 'radial-gradient(#e5e7eb 1px,transparent 1px)', backgroundSize: '16px 16px', backgroundAttachment: 'fixed' }}
        ></div>
      )}

      <main className={`${darkMode ? 'text-white' : 'text-gray-800'}`}>
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
