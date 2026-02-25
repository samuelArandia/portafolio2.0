"use client"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Portafolio from "@/components/portfolio"
import { LanguageProvider } from "@/i18n/LanguageContext"
import React from "react"

function Page() {
  return (
    <LanguageProvider>
      <Header />
      <Portafolio />
      <Footer />
    </LanguageProvider>
  )
}

export default Page
