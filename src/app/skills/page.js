"use client"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Skills from "@/components/skills"
import { LanguageProvider } from "@/i18n/LanguageContext"
import React from "react"

function Page() {
  return (
    <LanguageProvider>
      <Header />
      <Skills />
      <Footer />
    </LanguageProvider>
  )
}

export default Page
