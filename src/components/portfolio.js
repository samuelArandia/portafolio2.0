"use client";

import React from "react";
import ExternalArrow from "@/components/ExternalArrow";
import { ProjectLead, ProjectFeature, ProjectRow } from "./portfolioCard";
import { projects } from "@/constants";
import { useLanguage } from '@/i18n/LanguageContext';
import { Reveal } from "@/components/motion/Reveal";
import SectionHeading from "@/components/SectionHeading";

const featured = projects.filter((p) => p.featured);
const others = projects.filter((p) => !p.featured);
const [lead, ...secondary] = featured;

const Portafolio = () => {
  const { t } = useLanguage();
  const count = t('portfolio.count').replace('{n}', String(projects.length).padStart(2, '0'));

  return (
    <section id="Portafolio" aria-labelledby="portfolio-title" className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeading index={t('portfolio.section')} title={t('portfolio.title')} titleId="portfolio-title" meta={count} />

        <Reveal className="mt-16 md:mt-20" amount={0.15}>
          <ProjectLead project={lead} index={0} />
        </Reveal>

        <div className="mt-20 grid gap-x-10 gap-y-20 md:mt-28 md:grid-cols-2">
          {secondary.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08} amount={0.15} className="h-full">
              <ProjectFeature project={project} index={i + 1} />
            </Reveal>
          ))}
        </div>

        <div className="mt-24 md:mt-32">
          <h3 className="kicker flex items-center gap-4">
            {t('portfolio.others')}
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
          </h3>
          <div className="divide-y divide-line">
            {others.map((project, i) => (
              <Reveal key={project.id} amount={0.2}>
                <ProjectRow project={project} index={featured.length + i} />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-6 border-t border-line pt-8">
          <a
            href="https://github.com/samuelArandia"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-[2.75rem] items-center gap-1.5 font-mono text-sm text-fg-2 transition-colors hover:text-fg"
          >
            {t('portfolio.viewMore')}
            <ExternalArrow />
            <span className="sr-only">{t('common.newTab')}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portafolio;
