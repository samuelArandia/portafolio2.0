"use client";

import React from "react";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

const PortfolioCard = ({ imageSrc, title, subtitle, link, description, technologies, techNames, index }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="group block rounded-2xl overflow-hidden border shadow-lg transition-shadow duration-300 hover:shadow-xl"
    style={{
      background: 'var(--bg-card)',
      borderColor: 'var(--card-border)',
      boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
    }}
  >
    <div className="flex flex-col md:flex-row">
      {/* Content side */}
      <div className="md:w-1/2 p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center order-2 md:order-1">
        <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--accent-primary)' }}>
          {subtitle}
        </p>
        <h3 className="font-display font-bold text-lg sm:text-xl md:text-2xl mb-3" style={{ color: 'var(--text-primary)' }}>
          {title}
        </h3>
        <div className="w-10 h-0.5 rounded-full mb-3" style={{ background: 'var(--accent-gradient)' }} />
        <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>
          {description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((Icon, i) => (
            <span
              key={i}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors duration-200"
              style={{ color: 'var(--text-muted)', background: 'var(--glass-bg)', borderColor: 'var(--card-border)' }}
            >
              <Icon className="text-xs" />
              {techNames && techNames[i] && <span>{techNames[i]}</span>}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 group-hover:text-[var(--accent-primary)]"
          style={{ color: 'var(--text-secondary)' }}
        >
          Ver proyecto <FiExternalLink className="text-sm" />
        </div>
      </div>

      {/* Image side */}
      <div className="relative overflow-hidden md:w-1/2 h-[200px] sm:h-[240px] md:h-auto md:min-h-[300px] order-1 md:order-2">
        <Image
          src={imageSrc || "/placeholder.png"}
          alt={`Portada ${title}`}
          width={600}
          height={400}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
    </div>
  </a>
);

export default PortfolioCard;
