"use client"
import React from 'react';
import { FiPause, FiPlay } from 'react-icons/fi';
import { useLanguage } from '@/i18n/LanguageContext';
import { useMotionPaused } from '@/lib/motionPause';
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

// Seconds per logo: slow enough to read each name as it passes.
const SECONDS_PER_ITEM = 7;
// Each half of the loop needs at least this many logos (~1280px) so it is
// wider than the container and the loop never shows an empty gap.
const MIN_PER_HALF = 10;

function LogoList({ items, label, hidden = false }) {
  return (
    <ul
      className={`marquee__list ${hidden ? 'marquee__copy' : ''}`}
      aria-label={hidden ? undefined : label}
      aria-hidden={hidden || undefined}
    >
      {items.map((name, i) => (
        <li key={`${name}-${i}`} className="flex w-32 shrink-0 flex-col items-center gap-3 py-2 text-center">
          <TechMark name={name} className="text-[2.5rem]" />
          <span className="text-sm leading-tight text-fg-2">{name}</span>
        </li>
      ))}
    </ul>
  );
}

function Marquee({ items, label, direction }) {
  const repeats = Math.max(1, Math.ceil(MIN_PER_HALF / items.length));
  const extra = Array.from({ length: repeats - 1 }, () => items).flat();
  const half = Array.from({ length: repeats }, () => items).flat();

  return (
    <div
      className="marquee"
      data-direction={direction}
      style={{ '--marquee-duration': `${half.length * SECONDS_PER_ITEM}s` }}
    >
      <div className="marquee__track">
        <div className="marquee__half">
          <LogoList items={items} label={label} />
          {extra.length > 0 && <LogoList items={extra} hidden />}
        </div>
        <div className="marquee__half marquee__copy" aria-hidden="true">
          <LogoList items={half} hidden />
        </div>
      </div>
    </div>
  );
}

const Skills = () => {
  const { t, locale } = useLanguage();
  const [paused, togglePaused] = useMotionPaused();

  return (
    <section id="Skills" aria-labelledby="skills-title" className="py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading title={t('skills.title')} titleId="skills-title" />
          <button
            type="button"
            onClick={togglePaused}
            aria-pressed={paused}
            className="btn btn-secondary motion-reduce:hidden"
          >
            {paused ? <FiPlay className="h-4 w-4" aria-hidden="true" /> : <FiPause className="h-4 w-4" aria-hidden="true" />}
            {t('skills.pause')}
          </button>
        </div>

        <div className="mt-12 space-y-10 md:mt-16">
          {groups.map((group, i) => (
            <Reveal key={group.key} amount={0.25}>
              <h3 className="kicker">{t(`skills.${group.key}`)}</h3>
              <div className="mt-4">
                <Marquee items={group.items} label={t(`skills.${group.key}`)} direction={i % 2 ? 'right' : 'left'} />
              </div>
            </Reveal>
          ))}

          <Reveal amount={0.4} className="border-t border-line pt-8">
            <h3 className="kicker">{t('skills.practices')}</h3>
            <p className="mt-3 max-w-3xl leading-relaxed text-fg-2">
              {practices.map((item) => (typeof item === 'string' ? item : item[locale])).join(' · ')}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Skills;
