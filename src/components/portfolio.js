"use client";

import React from "react";
import ExternalArrow from "@/components/ExternalArrow";
import { ProjectLead, ProjectFeature, ProjectCompact } from "./portfolioCard";
import { projects } from "@/constants";
import { useLanguage } from '@/i18n/LanguageContext';
import { Reveal } from "@/components/motion/Reveal";
import SectionHeading from "@/components/SectionHeading";

const featured = projects.filter((p) => p.featured);
const others = projects.filter((p) => !p.featured);
const [lead, ...secondary] = featured;

const Portafolio = () => {
  const { t } = useLanguage();

  return (
    <section id="Portafolio" aria-labelledby="portfolio-title" className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeading title={t('portfolio.title')} titleId="portfolio-title" />

        <Reveal className="mt-12 md:mt-16" amount={0.15}>
          <ProjectLead project={lead} />
        </Reveal>

        {/* Staggered pair: the second column starts lower to break the grid */}
        <div className="mt-24 grid gap-x-12 gap-y-20 md:mt-32 md:grid-cols-2">
          {secondary.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08} amount={0.15} className={i === 1 ? 'md:mt-24' : ''}>
              <ProjectFeature project={project} />
            </Reveal>
          ))}
        </div>

        <div className="mt-24 grid gap-14 border-t border-line pt-14 md:mt-32 md:grid-cols-2 md:gap-12">
          {others.map((project) => (
            <Reveal key={project.id} amount={0.2}>
              <ProjectCompact project={project} />
            </Reveal>
          ))}
        </div>

        <a
          href="https://github.com/samuelArandia"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-12 inline-flex min-h-[2.75rem] items-center gap-1.5 text-sm font-medium text-fg-2 transition-colors hover:text-fg"
        >
          {t('portfolio.viewMore')}
          <ExternalArrow />
          <span className="sr-only">{t('common.newTab')}</span>
        </a>
      </div>
    </section>
  );
};

export default Portafolio;
