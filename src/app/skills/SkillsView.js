"use client"
import Skills from "@/components/skills"
import SiteShell from "@/components/SiteShell"
import React from "react"

// Standalone route for the section; the header links back to the home page anchors.
function SkillsView() {
  return (
    <SiteShell routeTitleKey="nav.Skills">
      <div className="pt-16">
        <Skills />
      </div>
    </SiteShell>
  )
}

export default SkillsView
