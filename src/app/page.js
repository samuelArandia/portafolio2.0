"use client"
import React from "react";
import SiteShell from '@/components/SiteShell'
import Inicio from '@/components/home'
import Portafolio from '@/components/portfolio'
import About from '@/components/about'
import Skills from '@/components/skills'
import Contact from '@/components/contact'

function Home() {
  return (
    <SiteShell>
      <Inicio />
      <Portafolio />
      <About />
      <Skills />
      <Contact />
    </SiteShell>
  );
}

export default Home;
