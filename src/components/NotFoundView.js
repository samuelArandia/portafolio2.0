"use client"
import React from "react"
import { FiArrowDown } from "react-icons/fi"
import SiteShell from "@/components/SiteShell"
import { useLanguage } from "@/i18n/LanguageContext"

function NotFoundContent() {
  const { t } = useLanguage()
  return (
    <section aria-labelledby="not-found-title" className="flex min-h-[80svh] items-center pb-24 pt-32">
      <div className="container-page">
        <div className="flex items-center gap-4" aria-hidden="true">
          <span className="font-mono text-xs text-accent">404</span>
          <span className="h-px flex-1 bg-line-strong" />
        </div>
        <h1 id="not-found-title" className="mt-6 text-[clamp(2.125rem,5vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
          {t('notFound.title')}
        </h1>
        <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-fg-2">{t('notFound.body')}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="/" className="btn btn-primary">{t('notFound.home')}</a>
          <a href="/#Portafolio" className="btn btn-secondary">
            {t('notFound.projects')}
            <FiArrowDown className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default function NotFoundView() {
  return (
    <SiteShell titleKey="meta.notFoundTitle">
      <NotFoundContent />
    </SiteShell>
  )
}
