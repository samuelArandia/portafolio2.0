"use client"
import About from "@/components/about"
import SiteShell from "@/components/SiteShell"
import React from "react"

// Standalone route for the section; the header links back to the home page anchors.
function AboutView() {
  return (
    <SiteShell routeTitleKey="nav.About">
      <div className="pt-16">
        <About />
      </div>
    </SiteShell>
  )
}

export default AboutView
