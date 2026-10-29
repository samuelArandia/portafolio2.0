"use client"
import React from "react";
import Image from "next/image";
import { FiArrowDown, FiDownload } from "react-icons/fi";
import { projects, CV_URL } from "@/constants";
import { useLanguage } from '@/i18n/LanguageContext';
import { handleSectionLinkClick } from "@/components/motion/scrollToSection";

const featured = projects.filter((p) => p.featured);

// Construction drawing around the portrait. The viewBox is the portrait box
// (300×400 at x75,y100) grown by 50%, so the circle of r=250 passes exactly
// through the portrait's corners; the axes run out past the section edges.
function PortraitDrawing({ coords }) {
  const line = { stroke: 'var(--line-strong)', strokeWidth: 1, vectorEffect: 'non-scaling-stroke' };
  const accent = { stroke: 'var(--accent)', strokeWidth: 1.5, vectorEffect: 'non-scaling-stroke' };
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 450 600"
      className="pointer-events-none absolute left-[-25%] top-[-25%] h-[150%] w-[150%] overflow-visible"
      fill="none"
    >
      <defs>
        {/* userSpaceOnUse: a straight line has a zero-height bbox */}
        <linearGradient id="axis-h" gradientUnits="userSpaceOnUse" x1="-900" y1="0" x2="1400" y2="0">
          <stop offset="0.3" style={{ stopColor: 'var(--fg)', stopOpacity: 0 }} />
          <stop offset="0.42" style={{ stopColor: 'var(--fg)', stopOpacity: 0.2 }} />
          <stop offset="0.7" style={{ stopColor: 'var(--fg)', stopOpacity: 0.2 }} />
          <stop offset="1" style={{ stopColor: 'var(--fg)', stopOpacity: 0 }} />
        </linearGradient>
        <linearGradient id="axis-v" gradientUnits="userSpaceOnUse" x1="0" y1="-300" x2="0" y2="900">
          <stop offset="0" style={{ stopColor: 'var(--fg)', stopOpacity: 0 }} />
          <stop offset="0.3" style={{ stopColor: 'var(--fg)', stopOpacity: 0.2 }} />
          <stop offset="0.7" style={{ stopColor: 'var(--fg)', stopOpacity: 0.2 }} />
          <stop offset="1" style={{ stopColor: 'var(--fg)', stopOpacity: 0 }} />
        </linearGradient>
      </defs>
      <line x1="-900" y1="300" x2="1400" y2="300" {...line} stroke="url(#axis-h)" pathLength="1" className="draw" style={{ '--d': '0.2s' }} />
      <line x1="225" y1="-300" x2="225" y2="900" {...line} stroke="url(#axis-v)" pathLength="1" className="draw" style={{ '--d': '0.35s' }} />
      <circle cx="225" cy="300" r="250" {...line} pathLength="1" className="draw" style={{ '--d': '0.5s' }} transform="rotate(-90 225 300)" />
      <circle cx="225" cy="300" r="292" {...line} strokeDasharray="1 7" opacity="0.8" />

      {/* quadrant ticks; none on the left, which faces the text column */}
      <path d="M475 300h16M225 50v-16M225 550v16" {...accent} />

      {/* crop marks at the portrait corners */}
      <path
        d="M57 100h12M75 82v12M393 100h-12M375 82v12M57 500h12M75 518v-12M393 500h-12M375 518v-12"
        {...accent}
      />

      {/* dimension line under the portrait */}
      <path d="M75 556h300M75 549v14M375 549v14" {...line} />

      <text x="233" y="40" fill="var(--muted)" fontSize="11" fontFamily="var(--font-mono), monospace" letterSpacing="0.06em">
        {coords}
      </text>
    </svg>
  );
}

function Inicio() {
  const { t } = useLanguage();

  return (
    <section id="Inicio" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="container-page grid items-center gap-14 pb-16 pt-28 md:pb-20 md:pt-36 lg:min-h-[100svh] lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-32">
        <div className="lg:col-span-6 xl:col-span-7">
          <div className="rise flex items-center gap-4">
            <Image
              src="/perfil.png"
              alt=""
              width={960}
              height={1280}
              sizes="64px"
              className="h-20 w-[3.75rem] rounded-[3px] border border-line-strong object-cover lg:hidden"
              priority
            />
            <p className="kicker flex items-center gap-3">
              <span className="hidden h-px w-8 bg-accent lg:block" aria-hidden="true" />
              <span>
                {t('hero.role')}
                <span className="hidden sm:inline" aria-hidden="true"> · </span>
                <br className="sm:hidden" />
                {t('contact.locationValue')}
              </span>
            </p>
          </div>

          <h1
            id="hero-title"
            className="rise mt-6 text-[clamp(3.25rem,10vw,7.25rem)] font-semibold leading-[0.9] tracking-[-0.05em]"
            style={{ '--d': '0.06s' }}
          >
            {t('hero.name')}
          </h1>

          <p
            className="rise mt-8 max-w-xl text-[clamp(1.3rem,2.3vw,1.7rem)] font-medium leading-[1.25] tracking-[-0.015em] text-fg"
            style={{ '--d': '0.14s' }}
          >
            {t('hero.lead')}
          </p>
          <p className="rise mt-4 max-w-xl text-base leading-relaxed text-fg-2" style={{ '--d': '0.2s' }}>
            {t('hero.description')}
          </p>

          <div className="rise mt-9 flex flex-wrap gap-3" style={{ '--d': '0.26s' }}>
            <a href="/#Portafolio" onClick={(e) => handleSectionLinkClick(e, 'Portafolio')} className="btn btn-primary">
              {t('hero.viewProjects')}
              <FiArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href={CV_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <FiDownload className="h-4 w-4" aria-hidden="true" />
              {t('hero.downloadCV')}
              <span className="sr-only">{t('common.newTab')}</span>
            </a>
            <p className="flex min-h-[2.75rem] items-center gap-2.5 px-1 text-sm text-fg-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              {t('hero.status')}
            </p>
          </div>

          <nav aria-label={t('hero.featured')} className="rise mt-12 max-w-xl border-t border-line pt-5" style={{ '--d': '0.34s' }}>
            <p className="kicker">{t('hero.featured')}</p>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
              {featured.map((project, i) => (
                <li key={project.id}>
                  <a
                    href={`/#${project.id}`}
                    onClick={(e) => handleSectionLinkClick(e, project.id)}
                    className="group inline-flex items-baseline gap-2 py-1.5 text-[0.9375rem] text-fg-2 transition-colors hover:text-fg"
                  >
                    <span className="font-mono text-xs text-muted transition-colors group-hover:text-accent" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {project.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="hidden lg:col-span-6 lg:block xl:col-span-5">
          {/* The dashed ring reaches ~47% of the portrait width past each side;
              these widths keep the drawing inside the viewport and clear of the text. */}
          <div className="relative mx-auto w-full max-w-[15rem] xl:max-w-[16rem] min-[1400px]:mr-0 min-[1400px]:max-w-[19rem]">
            <PortraitDrawing coords={t('hero.coords')} />
            <Image
              src="/perfil.png"
              alt={t('hero.profileAlt')}
              width={960}
              height={1280}
              sizes="(min-width: 1400px) 19rem, (min-width: 1024px) 16rem, 0px"
              className="rise relative aspect-[3/4] w-full rounded-[3px] object-cover"
              style={{ '--d': '0.15s', boxShadow: 'var(--shadow)' }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inicio;
