"use client"
import React from "react";
import { FiDownload } from "react-icons/fi";
import { CV_FILES } from "@/constants";
import { useLanguage } from '@/i18n/LanguageContext';
import { Reveal } from "@/components/motion/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CodeWindow from "@/components/motion/CodeWindow";

function CompactList({ title, items }) {
  return (
    <div>
      <h3 className="kicker">{title}</h3>
      <ul className="mt-4 space-y-4">
        {items.map((item) => (
          <li key={item.title}>
            <p className="leading-snug text-fg">{item.title}</p>
            <p className="mt-1 text-sm text-muted">
              {item.org} · <span className="whitespace-nowrap font-mono text-xs">{item.period}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function About() {
  const { t, locale } = useLanguage();
  const experience = t('about.experience');

  return (
    <section id="About" aria-labelledby="about-title" className="py-24 md:py-32">
      <div className="container-page grid gap-16 lg:grid-cols-12 lg:gap-12">
        {/* min-w-0 lets the code sample scroll inside its panel instead of widening the column */}
        <div className="min-w-0 lg:col-span-5">
          <SectionHeading title={t('about.title')} titleId="about-title" />
          <Reveal className="mt-8" amount={0.2}>
            <p className="text-[1.375rem] font-medium leading-snug tracking-[-0.015em] text-fg">{t('about.lead')}</p>
            <p className="mt-4 leading-relaxed text-fg-2">{t('about.p1')}</p>

            <p className="mt-10 flex items-baseline gap-3">
              <span className="text-[4.5rem] font-semibold leading-none tracking-[-0.05em] text-fg">4+</span>
              <span className="text-fg-2">{t('about.yearsExp')}</span>
            </p>

            <p className="mt-8 text-sm text-muted">{t('about.p2')}</p>

            <a href={CV_FILES[locale]} target="_blank" rel="noopener noreferrer" className="btn btn-secondary mt-8">
              <FiDownload className="h-4 w-4" aria-hidden="true" />
              {t('hero.downloadCV')}
              <span className="sr-only">{t('common.newTab')}</span>
            </a>

            <CodeWindow className="mt-12" label={t('about.codeLabel')} />
          </Reveal>
        </div>

        <Reveal className="lg:col-span-6 lg:col-start-7 lg:pt-3" delay={0.08} amount={0.15}>
          <h3 className="kicker">{t('about.experienceTitle')}</h3>
          <ol className="mt-6 border-l border-line-strong">
            {experience.map((item, i) => (
              <li key={item.org} className="relative pb-9 pl-7 last:pb-0">
                <span
                  aria-hidden="true"
                  className={`absolute -left-[5px] top-[0.4rem] h-[9px] w-[9px] rounded-full border ${
                    i === 0 ? 'border-accent bg-accent' : 'border-line-strong bg-bg'
                  }`}
                />
                <p className="font-mono text-xs text-muted">{item.period}</p>
                <p className="mt-1.5 text-lg font-medium leading-snug tracking-[-0.01em] text-fg">
                  {item.role}
                  {/* Company on its own line on phones, so no line starts with "·" */}
                  <span className="block font-normal text-fg-2 sm:inline">
                    <span className="hidden sm:inline" aria-hidden="true"> · </span>
                    <span className="sr-only sm:hidden">, </span>
                    {item.org}
                  </span>
                </p>
                <p className="mt-1 text-sm leading-relaxed text-fg-2">{item.detail}</p>
              </li>
            ))}
          </ol>

          <div className="mt-16 grid gap-10 sm:grid-cols-2">
            <CompactList title={t('about.educationTitle')} items={t('about.education')} />
            <CompactList title={t('about.certificationsTitle')} items={t('about.certifications')} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
