"use client"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { LanguageProvider } from "@/i18n/LanguageContext"
import SmoothScroll from "@/components/motion/SmoothScroll"
import Cursor from "@/components/motion/Cursor"
import React from "react"

function ContactView() {
  return (
    <LanguageProvider>
      <div className="grain-overlay" />
      <Cursor />
      <SmoothScroll>
        <Header />
        <Contact />
        <Footer />
      </SmoothScroll>
    </LanguageProvider>
  )
}

export default ContactView
