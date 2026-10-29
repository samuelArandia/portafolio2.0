"use client"
import React from "react";
import { FiDownload } from "react-icons/fi";
import { projects, CV_URL } from "@/constants";
import { handleSectionLinkClick } from "@/components/motion/scrollToSection";
import { useLanguage } from '@/i18n/LanguageContext';
import { Reveal } from "@/components/motion/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CodeWindow from "@/components/motion/CodeWindow";

function projectIdByTitle(title) {
  return projects.find((p) => p.title === title)?.id;
}

function Timeline({ title, items, renderItem }) {
  return (
    <div>
      <h3 className="kicker">{title}</h3>
      <ol className="mt-4 divide-y divide-line border-y border-line">
        {items.map((item, i) => (
          <li key={i} className="grid gap-2 py-6 sm:grid-cols-[10rem_1fr] sm:gap-6">
            {renderItem(item)}
          </li>
        ))}
      </ol>
    </div>
  );
}

function About() {
  const { t } = useLanguage();
  const experience = t('about.experience');
  const education = t('about.education');
  const certifications = t('about.certifications');
  const orgWithPeriod = (item) => (
    <div>
      <p className="font-medium text-fg">{item.org}</p>
      {item.period && <p className="mt-1 font-mono text-xs text-muted">{item.period}</p>}
    </div>
  );

  return (
    <section id="About" aria-labelledby="about-title" className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeading index={t('about.section')} title={t('about.title')} titleId="about-title" meta={t('contact.locationValue')} />

        <div className="mt-14 grid gap-16 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5" amount={0.2}>
            <p className="text-[clamp(1.375rem,2.4vw,1.75rem)] font-medium leading-[1.3] tracking-[-0.015em] text-fg">
              {t('about.lead')}
            </p>
            <p className="mt-6 leading-relaxed text-fg-2">{t('about.p1')}</p>
            <p className="mt-4 leading-relaxed text-fg-2">{t('about.p2')}</p>

            <dl className="mt-10 grid grid-cols-2 border-y border-line">
              <div className="flex flex-col-reverse gap-1 border-r border-line py-5 pr-4">
                <dt className="text-sm text-fg-2">{t('about.yearsExp')}</dt>
                <dd className="text-4xl font-semibold tracking-[-0.03em]">4+</dd>
              </div>
              <div className="flex flex-col-reverse gap-1 py-5 pl-5">
                <dt className="text-sm text-fg-2">{t('about.projectsPublished')}</dt>
                <dd className="text-4xl font-semibold tracking-[-0.03em]">{projects.length}</dd>
              </div>
            </dl>

            <a href={CV_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary mt-8">
              <FiDownload className="h-4 w-4" aria-hidden="true" />
              {t('hero.downloadCV')}
              <span className="sr-only">{t('common.newTab')}</span>
            </a>

            <CodeWindow className="mt-12" />
          </Reveal>

          <Reveal className="space-y-14 lg:col-span-6 lg:col-start-7" delay={0.08} amount={0.15}>
            <Timeline
              title={t('about.experienceTitle')}
              items={experience}
              renderItem={(item) => {
                const projectId = projectIdByTitle(item.project);
                return (
                  <>
                    {orgWithPeriod(item)}
                    <div>
                      {item.role && <p className="text-fg">{item.role}</p>}
                      <p className={`${item.role ? 'mt-1.5 ' : ''}text-sm leading-relaxed text-fg-2`}>{item.detail}</p>
                      {projectId && (
                        <p className="mt-3 font-mono text-xs text-muted">
                          {t('about.projectLabel')}:{' '}
                          <a
                            href={`/#${projectId}`}
                            onClick={(e) => handleSectionLinkClick(e, projectId)}
                            className="link-underline text-fg"
                          >
                            {item.project}
                          </a>
                        </p>
                      )}
                    </div>
                  </>
                );
              }}
            />

            <Timeline
              title={t('about.educationTitle')}
              items={education}
              renderItem={(item) => (
                <>
                  {orgWithPeriod(item)}
                  <div>
                    <p className="text-fg">{item.title}</p>
                    {item.detail && <p className="mt-1.5 text-sm leading-relaxed text-fg-2">{item.detail}</p>}
                  </div>
                </>
              )}
            />

            <Timeline
              title={t('about.certificationsTitle')}
              items={certifications}
              renderItem={(item) => (
                <>
                  {orgWithPeriod(item)}
                  <p className="text-fg">{item.title}</p>
                </>
              )}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
