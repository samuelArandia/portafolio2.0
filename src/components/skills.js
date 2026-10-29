"use client"
import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Reveal } from "@/components/motion/Reveal";
import SectionHeading from "@/components/SectionHeading";
import TechMark from "@/components/TechMark";

// Groups follow the technical stack in the CV; marks come from lib/tech.js.
const groups = [
  { key: 'backend', items: ["Java", "Spring Boot", "Apache Camel", "NestJS", "Node.js", "Django", "Go"] },
  { key: 'frontend', items: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap"] },
  { key: 'data', items: ["PostgreSQL", "MongoDB", "SQL Server", "Oracle", "BigQuery"] },
  { key: 'cloud', items: ["Google Cloud", "Docker", "Kubernetes", "GitHub Actions", "Azure", "AWS"] },
  { key: 'tooling', items: ["Git", "GitHub", "GitLab", "Jira", "IntelliJ", "VS Code", "JUnit", "Bruno", "Claude Code"] },
];

// Concepts without a brand mark stay as a secondary line of text.
const practices = [
  { es: "Microservicios", en: "Microservices" }, "Event-driven", "BFF", "REST", "GraphQL", "SOAP",
  "API-First (OpenAPI)", "Clean Architecture", "TDD", "Mockito",
];

const Skills = () => {
  const { t, locale } = useLanguage();

  return (
    <section id="Skills" aria-labelledby="skills-title" className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeading title={t('skills.title')} titleId="skills-title" />

        <div className="mt-12 md:mt-16">
          {groups.map((group) => (
            <Reveal
              key={group.key}
              amount={0.25}
              className="grid gap-6 border-t border-line py-9 lg:grid-cols-[11rem_1fr] lg:gap-8"
            >
              <h3 className="kicker lg:pt-3">{t(`skills.${group.key}`)}</h3>
              <ul className="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
                {group.items.map((name) => (
                  <li key={name} className="flex flex-col items-center gap-3 text-center">
                    <TechMark name={name} className="text-[2.25rem]" />
                    <span className="text-sm leading-tight text-fg-2">{name}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          <Reveal amount={0.4} className="grid gap-4 border-t border-line pt-9 lg:grid-cols-[11rem_1fr] lg:gap-8">
            <h3 className="kicker lg:pt-1">{t('skills.practices')}</h3>
            <p className="leading-relaxed text-fg-2">
              {practices.map((item) => (typeof item === 'string' ? item : item[locale])).join(' · ')}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Skills;
