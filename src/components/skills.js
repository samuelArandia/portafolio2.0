"use client"
import React from 'react';
import { projects } from '@/constants';
import { useLanguage } from '@/i18n/LanguageContext';
import { Reveal } from "@/components/motion/Reveal";
import SectionHeading from "@/components/SectionHeading";

// Groups follow the technical stack in the CV. Names must match project
// stacks (constants/index.js) exactly for the "used in" mapping; a name can be
// an { es, en } pair when it is a concept rather than a product.
const groups = [
  { key: 'backend', items: ["Java", "Spring Boot", "Apache Camel", "NestJS", "Node.js", "Django", "Go"] },
  { key: 'frontend', items: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap"] },
  { key: 'data', items: ["PostgreSQL", "MongoDB", "SQL Server", "Oracle", "BigQuery"] },
  { key: 'cloud', items: ["Google Cloud", "Docker", "Kubernetes", "GitHub Actions", "Azure", "AWS"] },
  {
    key: 'architecture',
    items: [{ es: "Microservicios", en: "Microservices" }, "Event-driven", "BFF", "REST", "GraphQL", "SOAP", "API-First (OpenAPI)", "Clean Architecture"],
  },
  { key: 'tooling', items: ["JUnit", "Mockito", "TDD", "Git", "GitHub", "GitLab", "Bruno", "Jira", "IntelliJ", "VS Code", "Claude Code"] },
];

// Only projects whose stack (constants/index.js) names the tech exactly.
function projectsUsing(name) {
  return projects.filter((p) => p.technologies.includes(name)).map((p) => p.title);
}

function SkillGroup({ title, items, usedInLabel, locale }) {
  return (
    <div>
      <h3 className="kicker">{title}</h3>
      <ul className="mt-4 divide-y divide-line border-y border-line">
        {items.map((item) => {
          const name = typeof item === 'string' ? item : item[locale];
          const usedIn = projectsUsing(name);
          return (
            <li key={name} className="flex min-h-[3rem] items-center justify-between gap-4 py-2">
              <span className="shrink-0 whitespace-nowrap text-[0.9375rem] text-fg">{name}</span>
              {usedIn.length > 0 && (
                <span className="text-right font-mono text-[0.6875rem] leading-5 text-muted">
                  <span className="sr-only">{usedInLabel}: </span>
                  {usedIn.map((title, i) => (
                    <React.Fragment key={title}>
                      <span className="whitespace-nowrap">{title}</span>
                      {i < usedIn.length - 1 ? ', ' : ''}
                    </React.Fragment>
                  ))}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const Skills = () => {
  const { t, locale } = useLanguage();

  return (
    <section id="Skills" aria-labelledby="skills-title" className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeading index={t('skills.section')} title={t('skills.title')} titleId="skills-title">
          {t('skills.intro')}
        </SectionHeading>

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-x-10 lg:grid-cols-3">
          {groups.map((group, i) => (
            <Reveal key={group.key} delay={i * 0.06} amount={0.15}>
              <SkillGroup title={t(`skills.${group.key}`)} items={group.items} usedInLabel={t('skills.usedIn')} locale={locale} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
