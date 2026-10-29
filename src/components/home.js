"use client"
import React from "react";
import Image from "next/image";
import { FiArrowDown, FiDownload } from "react-icons/fi";
import { CV_FILES } from "@/constants";
import { useLanguage } from '@/i18n/LanguageContext';
import { handleSectionLinkClick } from "@/components/motion/scrollToSection";
import SplitText from "@/components/motion/SplitText";
import RoleCycle from "@/components/motion/RoleCycle";
import CodeWindow from "@/components/motion/CodeWindow";

function Inicio() {
  const { t, locale } = useLanguage();
  const roles = [t('hero.role1'), t('hero.role2'), t('hero.role3')];

  return (
    <section id="Inicio" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="container-page grid items-center gap-14 pb-16 pt-28 md:pb-20 md:pt-36 lg:min-h-[100svh] lg:grid-cols-12 lg:gap-10 lg:pb-20 lg:pt-28">
        <div className="lg:col-span-6">
          <Image
            src="/perfil.png"
            alt=""
            width={960}
            height={1280}
            sizes="64px"
            className="rise mb-6 h-20 w-[3.75rem] rounded-[3px] border border-line-strong object-cover lg:hidden"
            priority
          />

          <SplitText
            as="h1"
            id="hero-title"
            text={t('hero.name')}
            stagger={0.06}
            className="block text-[clamp(3.5rem,10vw,7.25rem)] font-semibold leading-[0.9] tracking-[-0.055em]"
          />

          <div className="rise mt-6" style={{ '--d': '0.2s' }}>
            <RoleCycle
              roles={roles}
              pauseLabel={t('common.pauseMotion')}
              className="font-mono text-[clamp(0.9rem,1.6vw,1.05rem)] font-medium text-accent"
            />
          </div>

          <p
            className="rise mt-6 max-w-md text-[clamp(1.2rem,2vw,1.45rem)] font-medium leading-[1.35] tracking-[-0.015em] text-fg-2"
            style={{ '--d': '0.28s' }}
          >
            {t('hero.lead')}
          </p>

          <div className="rise mt-9 flex flex-wrap items-center gap-3" style={{ '--d': '0.36s' }}>
            <a href="/#Portafolio" onClick={(e) => handleSectionLinkClick(e, 'Portafolio')} className="btn btn-primary">
              {t('hero.viewProjects')}
              <FiArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href={CV_FILES[locale]} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <FiDownload className="h-4 w-4" aria-hidden="true" />
              {t('hero.downloadCV')}
              <span className="sr-only">{t('common.newTab')}</span>
            </a>
          </div>
        </div>

        {/* Code window first, portrait overlapping its top-right corner */}
        <div className="relative min-w-0 lg:col-span-6 lg:pl-4">
          {/* Positioning lives on the wrapper: .viewfinder sets position: relative */}
          <div className="absolute -top-6 right-0 z-10 hidden w-32 lg:block xl:w-36">
            <div className="viewfinder">
            <Image
              src="/perfil.png"
              alt={t('hero.profileAlt')}
              width={960}
              height={1280}
              sizes="10rem"
              className="aspect-[3/4] w-full rounded-[3px] object-cover"
              style={{ boxShadow: 'var(--shadow)' }}
              priority
            />
            </div>
          </div>
          <CodeWindow className="lg:mr-14 lg:mt-20" label={t('hero.codeLabel')} />
        </div>
      </div>
    </section>
  );
}

export default Inicio;
