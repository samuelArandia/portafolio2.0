"use client";

import React from "react";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { useLanguage } from '@/i18n/LanguageContext';

const PortfolioCard = ({ imageSrc, title, subtitle, link, description, technologies, techNames, index }) => {
  const { t } = useLanguage();

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl overflow-hidden transition-all duration-300 gradient-border-left"
      style={{
        background: 'var(--bg-card)',
        boxShadow: 'var(--card-shadow)',
      }}
    >
      <div className="flex flex-col md:flex-row">
        {/* Content side */}
        <div className="md:w-1/2 p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center order-2 md:order-1">
          {/* Project number */}
          <span className="font-mono text-xs mb-2" style={{ color: 'var(--text-muted)', opacity: 0.5 }}>
            {String(index + 1).padStart(2, '0')} /
          </span>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--accent-primary)' }}>
            {subtitle}
          </p>
          <h3 className="font-display font-bold text-lg sm:text-xl md:text-2xl mb-3" style={{ color: 'var(--text-primary)' }}>
            {title}
          </h3>
          <div className="w-10 h-0.5 rounded-full mb-3" style={{ background: 'var(--accent-gradient)' }} />
          <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
            {description}
          </p>

          {/* Tech stack */}
          <div className="flex items-center flex-wrap gap-x-2.5 gap-y-1.5 mb-5 font-mono text-xs">
            <span style={{ color: 'var(--accent-primary)', opacity: 0.7 }}>stack:</span>
            {technologies.map((Icon, i) => (
              <span key={i} className="flex items-center gap-2.5">
                {i > 0 && <span style={{ color: 'var(--text-muted)', opacity: 0.4 }}>/</span>}
                <span className="flex items-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
                  <span className="tech-icon-accent flex items-center opacity-80"><Icon className="text-[13px]" /></span>
                  {techNames && techNames[i] && <span>{techNames[i]}</span>}
                </span>
              </span>
            ))}
          </div>

          <div className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 group-hover:text-[var(--accent-primary)]"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('portfolio.viewProject')} <FiExternalLink className="text-sm transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Image side */}
        <div className="relative overflow-hidden md:w-1/2 h-[200px] sm:h-[240px] md:h-auto md:min-h-[300px] order-1 md:order-2">
          <Image
            src={imageSrc || "/placeholder.png"}
            alt={`${t('portfolio.coverAlt')} ${title}`}
            width={600}
            height={400}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>
    </a>
  );
};

export default PortfolioCard;
