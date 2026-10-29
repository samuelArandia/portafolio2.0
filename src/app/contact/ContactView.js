"use client"
import Contact from "@/components/contact"
import SiteShell from "@/components/SiteShell"
import React from "react"

// Standalone route for the section; the header links back to the home page anchors.
function ContactView() {
  return (
    <SiteShell routeTitleKey="nav.Contact">
      <div className="pt-16">
        <Contact />
      </div>
    </SiteShell>
  )
}

export default ContactView
