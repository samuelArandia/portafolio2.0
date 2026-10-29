"use client";

import React from "react";
import Image from "next/image";
import ExternalArrow from "@/components/ExternalArrow";
import TechMark from "@/components/TechMark";
import { useLanguage } from '@/i18n/LanguageContext';
import { projectDomain } from "@/constants";

function Screenshot({ project, sizes, className = "" }) {
  const { t } = useLanguage();
  return (
    // Duplicate of the text link, so it's skipped by keyboard and screen readers
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={-1}
      aria-hidden="true"
      className={`group block overflow-hidden rounded-md border border-line bg-surface transition-colors duration-300 hover:border-line-strong ${className}`}
    >
      <Image
        src={project.imageSrc}
        alt={`${t('portfolio.imageAlt')} ${project.title}`}
        width={project.imageWidth}
        height={project.imageHeight}
        sizes={sizes}
        loading="lazy"
        className="aspect-[19/10] h-full w-full object-cover object-left-top transition-transform duration-700 ease-premium group-hover:scale-[1.015]"
      />
    </a>
  );
}

function ProjectText({ project, size = "md", Heading = "h3" }) {
  const { t } = useLanguage();
  const role = t(`projectRoles.${project.id}`);
  const hasRole = role !== `projectRoles.${project.id}`;
  const showContext = project.subtitle !== project.title;
  const titleClass = {
    lg: "text-[clamp(2rem,3.4vw,2.75rem)]",
    md: "text-[1.75rem]",
    sm: "text-xl",
  }[size];

  return (
    <div>
      {showContext && <p className="text-sm text-muted">{project.subtitle}</p>}
      <Heading id={`${project.id}-title`} className={`${showContext ? 'mt-1 ' : ''}font-semibold leading-tight tracking-[-0.03em] ${titleClass}`}>
        {project.title}
      </Heading>
      <p className="mt-3 max-w-prose leading-relaxed text-fg-2">{t(`projects.${project.id}`)}</p>
      {hasRole && (
        <p className="mt-4 max-w-prose border-l-2 border-accent pl-3 text-sm leading-relaxed text-fg">{role}</p>
      )}

      <ul aria-label={`${project.title}: Stack`} className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
        {project.technologies.map((name) => (
          <li key={name} className="flex items-center gap-1.5 text-sm text-fg-2">
            <TechMark name={name} className="text-[1.0625rem]" />
            {name}
          </li>
        ))}
      </ul>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-5 inline-flex min-h-[2.75rem] items-center gap-1.5 text-sm font-medium text-fg"
      >
        <span className="link-underline">{projectDomain(project.link)}</span>
        <ExternalArrow />
        <span className="sr-only">{t('common.newTab')}</span>
      </a>
    </div>
  );
}

// Lead project: wide screenshot with the details beside it.
export function ProjectLead({ project }) {
  return (
    <article id={project.id} aria-labelledby={`${project.id}-title`} className="grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-8">
        <Screenshot project={project} sizes="(min-width: 1024px) 46rem, 100vw" />
      </div>
      <div className="lg:col-span-4 lg:pb-2">
        <ProjectText project={project} size="lg" />
      </div>
    </article>
  );
}

// Featured project: screenshot stacked over the details.
export function ProjectFeature({ project }) {
  return (
    <article id={project.id} aria-labelledby={`${project.id}-title`}>
      <Screenshot project={project} sizes="(min-width: 768px) 34rem, 100vw" />
      <div className="mt-7">
        <ProjectText project={project} />
      </div>
    </article>
  );
}

// Smaller project: thumbnail beside a compact text block.
export function ProjectCompact({ project }) {
  return (
    <article id={project.id} aria-labelledby={`${project.id}-title`} className="grid gap-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
      <Screenshot project={project} sizes="10rem" className="self-start" />
      <ProjectText project={project} size="sm" />
    </article>
  );
}
