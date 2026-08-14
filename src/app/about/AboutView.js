"use client"
import About from "@/components/about"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { LanguageProvider } from "@/i18n/LanguageContext"
import SmoothScroll from "@/components/motion/SmoothScroll"
import Cursor from "@/components/motion/Cursor"
import React from "react"

function AboutView() {
  return (
    <LanguageProvider>
      <div className="grain-overlay" />
      <Cursor />
      <SmoothScroll>
        <Header />
        <About />
        <Footer />
      </SmoothScroll>
    </LanguageProvider>
  )
}

export default AboutView
