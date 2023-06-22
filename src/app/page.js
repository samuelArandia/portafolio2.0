
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

  //Esta funcion se ejecuta cuando el componente se monta
  useEffect(() => {
    setLoading(true);
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
    setLoading(false);
  }, []);

  //Esta funcion se ejecuta cuando el usuario cambia el modo oscuro
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    return () => setLoading(false); 
  }, []);

  return (
    loading ? <Loader /> :
    <>
      <main className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Inicio />
          <Portafolio />
          <About />
          <Skills />
          <Contact />
          <Footer />
        </main>
    </>
  )
}

export default Home;