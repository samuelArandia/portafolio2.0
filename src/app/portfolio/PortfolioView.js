"use client"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Portafolio from "@/components/portfolio"
import { LanguageProvider } from "@/i18n/LanguageContext"
import SmoothScroll from "@/components/motion/SmoothScroll"
import Cursor from "@/components/motion/Cursor"
import React from "react"

function PortfolioView() {
  return (
    <LanguageProvider>
      <div className="grain-overlay" />
      <Cursor />
      <SmoothScroll>
        <Header />
        <Portafolio />
        <Footer />
      </SmoothScroll>
    </LanguageProvider>
  )
}

export default PortfolioView
