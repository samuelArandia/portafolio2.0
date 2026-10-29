"use client"
import React from "react";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import { CV_FILES } from "@/constants";
import { useLanguage } from '@/i18n/LanguageContext';
import { Reveal } from "@/components/motion/Reveal";
import SectionHeading from "@/components/SectionHeading";

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
      <div className="container-page">
        <SectionHeading title={t('about.title')} titleId="about-title" />

        {/* Portrait + short bio */}
        <div className="mt-10 grid items-center gap-10 md:mt-14 md:grid-cols-12 md:gap-10 lg:gap-14">
          <Reveal className="md:col-span-5 lg:col-span-4" amount={0.3}>
            <div className="viewfinder max-w-[15rem] md:max-w-none">
              <Image
                src="/perfil.png"
                alt={t('hero.profileAlt')}
                width={960}
                height={1280}
                sizes="(min-width: 1024px) 22rem, (min-width: 768px) 40vw, 15rem"
                className="aspect-[4/5] w-full rounded-[3px] object-cover object-[50%_25%]"
                style={{ boxShadow: 'var(--shadow)' }}
              />
            </div>
          </Reveal>

          <Reveal className="md:col-span-7 lg:col-span-7 lg:col-start-5 xl:pl-6" delay={0.08} amount={0.3}>
            <p className="text-[clamp(1.375rem,2.4vw,1.75rem)] font-medium leading-snug tracking-[-0.015em] text-fg">{t('about.lead')}</p>
            <p className="mt-4 max-w-xl leading-relaxed text-fg-2">{t('about.p1')}</p>
            <p className="mt-4 text-sm text-muted">{t('about.p2')}</p>

            <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-6">
              <p className="flex items-baseline gap-3">
                <span className="text-[4rem] font-semibold leading-none tracking-[-0.05em] text-fg">4+</span>
                <span className="text-fg-2">{t('about.yearsExp')}</span>
              </p>
              <a href={CV_FILES[locale]} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <FiDownload className="h-4 w-4" aria-hidden="true" />
                {t('hero.downloadCV')}
                <span className="sr-only">{t('common.newTab')}</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Experience timeline + education */}
        <div className="mt-20 grid gap-14 md:mt-24 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7" amount={0.15}>
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
          </Reveal>

          <Reveal className="grid content-start gap-10 sm:grid-cols-2 lg:col-span-4 lg:col-start-9 lg:grid-cols-1" delay={0.08} amount={0.15}>
            <CompactList title={t('about.educationTitle')} items={t('about.education')} />
            <CompactList title={t('about.certificationsTitle')} items={t('about.certifications')} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
