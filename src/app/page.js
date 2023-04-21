"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Inicio from '@/components/home'
import Portafolio from '@/components/porfolio'
import About from '@/components/about'
import Skills from '@/components/skills'
import Contact from '@/components/contact'

export default function Home() {
  
  return (
    <main>
      <Header />
      <Inicio />
      <About />
      <Portafolio />
      <Skills /> 
      <Contact />
      <Footer />
    </main>
  )
}
