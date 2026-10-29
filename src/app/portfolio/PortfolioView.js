"use client"
import Portafolio from "@/components/portfolio"
import SiteShell from "@/components/SiteShell"
import React from "react"

// Standalone route for the section; the header links back to the home page anchors.
function PortfolioView() {
  return (
    <SiteShell routeTitleKey="nav.Portafolio">
      <div className="pt-16">
        <Portafolio />
      </div>
    </SiteShell>
  )
}

export default PortfolioView
