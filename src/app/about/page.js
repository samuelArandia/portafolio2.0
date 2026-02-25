"use client"
import About from "@/components/about"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { LanguageProvider } from "@/i18n/LanguageContext"
import React from "react"

function Page() {
  return (
    <LanguageProvider>
      <Header />
      <About />
      <Footer />
    </LanguageProvider>
  )
}

export default Page
