"use client"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { LanguageProvider } from "@/i18n/LanguageContext"
import React from "react"

function Page() {
  return (
    <LanguageProvider>
      <Header />
      <Contact />
      <Footer />
    </LanguageProvider>
  )
}

export default Page
