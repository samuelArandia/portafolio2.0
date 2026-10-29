"use client";

import React from "react";
import Image from "next/image";
import ExternalArrow from "@/components/ExternalArrow";
import { useLanguage } from '@/i18n/LanguageContext';
import { projectDomain } from "@/constants";

function number(index) {
  return String(index + 1).padStart(2, '0');
}

function Stack({ technologies, label }) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-x-2 gap-y-1 font-mono text-xs text-fg-2">
      {technologies.map((tech, i) => (
        <li key={tech} className="whitespace-nowrap">
          {tech}
          {i < technologies.length - 1 && <span aria-hidden="true" className="ml-2 text-muted">/</span>}
        </li>
      ))}
    </ul>
  );
}

function Screenshot({ project, index, sizes, compact = false }) {
  const { t } = useLanguage();
  const domain = projectDomain(project.link);
  return (
    <figure>
      {/* Duplicate of the text link below, so it's skipped by keyboard and screen readers */}
      <a href={project.link} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true" className="group block">
        <div className="overflow-hidden rounded-md border border-line bg-surface transition-colors duration-300 group-hover:border-line-strong">
          <Image
            src={project.imageSrc}
            alt={`${t('portfolio.imageAlt')} ${project.title}`}
            width={project.imageWidth}
            height={project.imageHeight}
            sizes={sizes}
            loading="lazy"
            className="aspect-[19/10] w-full object-cover object-left-top transition-transform duration-700 ease-premium group-hover:scale-[1.015]"
          />
        </div>
      </a>
      {!compact && (
        <figcaption className="mt-2.5 flex items-center justify-between font-mono text-[0.6875rem] text-muted">
          <span>fig. {number(index)}</span>
          <span>{domain}</span>
        </figcaption>
      )}
    </figure>
  );
}

function ProjectText({ project, index, titleSize = "text-2xl sm:text-[1.75rem]", Heading = "h3" }) {
  const titleId = `${project.id}-title`;
  const { t } = useLanguage();
  const role = t(`projectRoles.${project.id}`);
  const hasRole = role !== `projectRoles.${project.id}`;
  const domain = projectDomain(project.link);

  return (
    <div className="flex h-full flex-col">
      <p className="flex items-center gap-3 font-mono text-xs">
        <span className="text-accent">{number(index)}</span>
        <span className="h-px w-5 bg-line-strong" aria-hidden="true" />
        <span className="text-muted">{project.subtitle}</span>
      </p>
      <Heading id={titleId} className={`mt-3 font-semibold tracking-[-0.025em] ${titleSize}`}>{project.title}</Heading>
      <p className="mb-6 mt-3 max-w-prose leading-relaxed text-fg-2">{t(`projects.${project.id}`)}</p>

      {/* mt-auto lines up the details of side-by-side projects */}
      <dl className="mt-auto space-y-4 border-t border-line pt-5">
        {hasRole && (
          <div className="grid gap-1 sm:grid-cols-[6.5rem_1fr] sm:gap-4">
            <dt className="kicker pt-0.5">{t('portfolio.role')}</dt>
            <dd className="text-sm leading-relaxed text-fg-2">{role}</dd>
          </div>
        )}
        <div className="grid gap-1.5 sm:grid-cols-[6.5rem_1fr] sm:gap-4">
          <dt className="kicker pt-0.5">{t('portfolio.stack')}</dt>
          <dd><Stack technologies={project.technologies} label={`${t('portfolio.stack')} ${project.title}`} /></dd>
        </div>
      </dl>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-6 inline-flex min-h-[2.75rem] items-center gap-1.5 text-sm font-medium text-fg"
      >
        <span className="link-underline">
          {t('portfolio.visit')} {domain}
        </span>
        <ExternalArrow />
        <span className="sr-only">{t('common.newTab')}</span>
      </a>
    </div>
  );
}

// Lead project: wide screenshot beside the case details.
export function ProjectLead({ project, index }) {
  return (
    <article id={project.id} aria-labelledby={`${project.id}-title`} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-7">
        <Screenshot project={project} index={index} sizes="(min-width: 1024px) 40rem, 100vw" />
      </div>
      <div className="lg:col-span-5">
        <ProjectText project={project} index={index} titleSize="text-[clamp(1.75rem,3vw,2.375rem)]" />
      </div>
    </article>
  );
}

// Secondary featured project: screenshot stacked over details.
export function ProjectFeature({ project, index }) {
  return (
    <article id={project.id} aria-labelledby={`${project.id}-title`} className="flex h-full flex-col">
      <Screenshot project={project} index={index} sizes="(min-width: 768px) 34rem, 100vw" />
      <div className="mt-7 flex-1">
        <ProjectText project={project} index={index} />
      </div>
    </article>
  );
}

// Compact row for the remaining projects.
export function ProjectRow({ project, index }) {
  return (
    <article id={project.id} aria-labelledby={`${project.id}-title`} className="grid gap-6 py-8 sm:grid-cols-[11rem_1fr] sm:gap-8 md:grid-cols-[14rem_1fr]">
      <Screenshot project={project} index={index} sizes="14rem" compact />
      <ProjectText project={project} index={index} titleSize="text-xl" Heading="h4" />
    </article>
  );
}
