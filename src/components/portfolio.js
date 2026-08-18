"use client";

import React from "react";
import PortfolioCard from "./portfolioCard";
import CaseStudy from "./caseStudy";
import { projects } from "@/constants";
import { FaVuejs, FaReact, FaJava } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { SiPostgresql, SiTailwindcss, SiAngular, SiTypescript, SiSpringboot } from "react-icons/si";
import { DiCss3, DiDjango, DiJavascript } from "react-icons/di";
import { TbBrandNextjs, TbBrandGolang } from "react-icons/tb";
import { AiFillHtml5 } from "react-icons/ai";
import { useLanguage } from '@/i18n/LanguageContext';
import { Reveal } from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";

const techIconMap = {
  "Vue.js": FaVuejs,
  "Go": TbBrandGolang,
  "Tailwind CSS": SiTailwindcss,
  "Bootstrap": BsBootstrap,
  "Django": DiDjango,
  "PostgreSQL": SiPostgresql,
  "React": FaReact,
  "JavaScript": DiJavascript,
  "Next.js": TbBrandNextjs,
  "HTML": AiFillHtml5,
  "CSS": DiCss3,
  "Angular": SiAngular,
  "TypeScript": SiTypescript,
  "Spring Boot": SiSpringboot,
  "Java": FaJava,
};

const Portafolio = () => {
  const { t } = useLanguage();

  const flagshipProject = projects.find((project) => project.flagship);

  const projectsWithIcons = projects
    .filter((project) => !project.flagship)
    .map((project) => {
      const validTechs = project.technologies.filter((tech) => techIconMap[tech]);
      return {
        ...project,
        description: t(`projects.${project.id}`),
        technologies: validTechs.map((tech) => techIconMap[tech]),
        techNames: validTechs,
      };
    });

  return (
    <section className="py-20 sm:py-24 md:py-28 px-5 sm:px-8 md:px-12 lg:px-16" id="Portafolio">
      <div className="max-w-6xl mx-auto">
        {/* Section Header — left-aligned, split from subtitle */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <span className="section-number">{t('portfolio.section')} {'//'}</span>
            <h2
              className="font-display font-semibold mt-2"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--text-primary)' }}
            >
              <SplitText text={t('portfolio.title')} stagger={0.06} />
            </h2>
          </div>
          <p style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.05rem)', color: 'var(--text-secondary)' }} className="max-w-xs md:text-right">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* Flagship case study */}
        {flagshipProject && <CaseStudy project={flagshipProject} />}

        {/* Projects - sticky stacking cards */}
        <div className="relative">
          {projectsWithIcons.map((project, index) => (
            <div
              key={project.id}
              className="sticky mb-6 last:mb-0"
              style={{
                top: `${90 + index * 20}px`,
                zIndex: index + 1,
              }}
            >
              <PortfolioCard {...project} index={index} />
            </div>
          ))}
        </div>

        {/* GitHub link */}
        <Reveal className="text-center mt-12">
          <a
            href="https://github.com/samuelArandia"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="inline-flex items-center gap-2 text-sm font-mono hover:text-[var(--accent-primary)] transition-colors duration-200"
            style={{ color: 'var(--text-secondary)' }}
          >
            {t('portfolio.viewMore')}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Portafolio;
