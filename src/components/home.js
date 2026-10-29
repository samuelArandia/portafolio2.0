"use client"
import React from "react";
import Image from "next/image";
import { FiArrowDown, FiDownload } from "react-icons/fi";
import { CV_FILES } from "@/constants";
import { useLanguage } from '@/i18n/LanguageContext';
import { handleSectionLinkClick } from "@/components/motion/scrollToSection";

function Inicio() {
  const { t, locale } = useLanguage();

  return (
    <section id="Inicio" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="container-page grid items-center gap-14 pb-16 pt-28 md:pb-20 md:pt-36 lg:min-h-[100svh] lg:grid-cols-12 lg:gap-10 lg:pb-20 lg:pt-28">
        <div className="lg:col-span-7">
          <div className="rise flex items-center gap-4">
            <Image
              src="/perfil.png"
              alt=""
              width={960}
              height={1280}
              sizes="64px"
              className="h-20 w-[3.75rem] rounded-[3px] border border-line-strong object-cover lg:hidden"
              priority
            />
            <p className="kicker flex items-center gap-3">
              <span className="hidden h-px w-8 bg-accent lg:block" aria-hidden="true" />
              <span>
                {t('hero.role')}
                <span className="hidden sm:inline" aria-hidden="true"> · </span>
                <br className="sm:hidden" />
                {t('contact.locationValue')}
              </span>
            </p>
          </div>

          <h1
            id="hero-title"
            className="rise mt-6 text-[clamp(3.5rem,11vw,8rem)] font-semibold leading-[0.88] tracking-[-0.055em]"
            style={{ '--d': '0.06s' }}
          >
            {t('hero.name')}
          </h1>

          <p
            className="rise mt-8 max-w-lg text-[clamp(1.3rem,2.3vw,1.65rem)] font-medium leading-[1.3] tracking-[-0.015em] text-fg-2"
            style={{ '--d': '0.14s' }}
          >
            {t('hero.lead')}
          </p>

          <div className="rise mt-10 flex flex-wrap items-center gap-3" style={{ '--d': '0.22s' }}>
            <a href="/#Portafolio" onClick={(e) => handleSectionLinkClick(e, 'Portafolio')} className="btn btn-primary">
              {t('hero.viewProjects')}
              <FiArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href={CV_FILES[locale]} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <FiDownload className="h-4 w-4" aria-hidden="true" />
              {t('hero.downloadCV')}
              <span className="sr-only">{t('common.newTab')}</span>
            </a>
            <p className="flex min-h-[2.75rem] items-center gap-2.5 px-1 text-sm text-fg-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              {t('hero.status')}
            </p>
          </div>
        </div>

        <div className="hidden lg:col-span-5 lg:block">
          <div className="viewfinder rise mx-auto w-full max-w-[19rem] xl:max-w-[21rem]" style={{ '--d': '0.1s' }}>
            <Image
              src="/perfil.png"
              alt={t('hero.profileAlt')}
              width={960}
              height={1280}
              sizes="(min-width: 1280px) 21rem, 19rem"
              className="relative aspect-[3/4] w-full rounded-[3px] object-cover"
              style={{ boxShadow: 'var(--shadow)' }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inicio;
