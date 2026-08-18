"use client";

import React from "react";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { SiAngular, SiSpringboot, SiPostgresql } from "react-icons/si";
import { useLanguage } from '@/i18n/LanguageContext';
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";

const archIcon = {
  Angular: SiAngular,
  "Spring Boot": SiSpringboot,
  PostgreSQL: SiPostgresql,
};

const archNoteKey = {
  Frontend: "archFrontendNote",
  Backend: "archBackendNote",
  Datos: "archDataNote",
};

const CaseStudy = ({ project }) => {
  const { t } = useLanguage();
  const { imageSrc, title, link, technologies, architecture } = project;

  return (
    <Reveal className="mb-14 sm:mb-16">
      <div
        className="rounded-2xl overflow-hidden border gradient-border-top"
        style={{ background: 'var(--bg-card)', borderColor: 'var(--card-border)', boxShadow: 'var(--card-shadow)' }}
      >
        <div className="p-6 sm:p-8 md:p-10 lg:p-12">
          {/* Header */}
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--accent-primary)' }}>
            {t('caseStudy.eyebrow')}
          </span>
          <h3
            className="font-display font-semibold mt-2"
            style={{ fontSize: 'clamp(1.6rem, 3.4vw, 2.4rem)', color: 'var(--text-primary)' }}
          >
            <SplitText text={title} stagger={0.04} />
          </h3>
          <p className="mt-2 max-w-xl text-sm sm:text-base" style={{ color: 'var(--text-secondary)' }}>
            {t('caseStudy.tagline')}
          </p>

          {/* Banner image */}
          <div className="relative mt-8 rounded-xl overflow-hidden h-[220px] sm:h-[300px] md:h-[380px]" style={{ border: '1px solid var(--card-border)' }}>
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 900px"
            />
          </div>

          {/* Narrative grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-10">
            <RevealGroup className="space-y-7" stagger={0.08}>
              <RevealItem>
                <h4 className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>
                  {t('caseStudy.contextLabel')}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{t('caseStudy.context')}</p>
              </RevealItem>
              <RevealItem>
                <h4 className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>
                  {t('caseStudy.problemLabel')}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{t('caseStudy.problem')}</p>
              </RevealItem>
              <RevealItem>
                <h4 className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>
                  {t('caseStudy.roleLabel')}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{t('caseStudy.role')}</p>
              </RevealItem>
            </RevealGroup>

            <RevealGroup className="space-y-7" stagger={0.08} delay={0.1}>
              <RevealItem>
                <h4 className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>
                  {t('caseStudy.architectureLabel')}
                </h4>
                <div className="space-y-0">
                  {architecture.map((layer, i) => {
                    const Icon = archIcon[layer.tech];
                    return (
                      <div key={layer.layer} className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <span
                            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}
                          >
                            {Icon && <Icon style={{ fontSize: '11px', color: 'var(--accent-primary)' }} />}
                          </span>
                          {i < architecture.length - 1 && (
                            <span className="w-px flex-1 my-1" style={{ background: 'var(--card-border)' }} />
                          )}
                        </div>
                        <div className="pb-4">
                          <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                            {layer.layer} <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>· {layer.tech}</span>
                          </div>
                          <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                            {t(`caseStudy.${archNoteKey[layer.layer]}`)}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </RevealItem>
              <RevealItem>
                <h4 className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>
                  {t('caseStudy.challengeLabel')}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{t('caseStudy.challenge')}</p>
              </RevealItem>
              <RevealItem>
                <h4 className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>
                  {t('caseStudy.resultLabel')}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{t('caseStudy.result')}</p>
              </RevealItem>
            </RevealGroup>
          </div>

          {/* Footer: stack + CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-10 pt-6" style={{ borderTop: '1px solid var(--card-border)' }}>
            <div className="flex items-center flex-wrap gap-x-2.5 gap-y-1.5 font-mono text-xs">
              <span style={{ color: 'var(--accent-primary)', opacity: 0.7 }}>stack:</span>
              {technologies.map((tech, i) => (
                <span key={tech} className="flex items-center gap-2.5">
                  {i > 0 && <span style={{ color: 'var(--text-muted)', opacity: 0.4 }}>/</span>}
                  <span style={{ color: 'var(--text-secondary)' }}>{tech}</span>
                </span>
              ))}
            </div>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 hover:text-[var(--accent-primary)]"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('caseStudy.cta')}
              <FiExternalLink className="text-sm" />
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default CaseStudy;
