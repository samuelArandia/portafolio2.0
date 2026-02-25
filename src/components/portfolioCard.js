"use client";

import React from "react";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

const PortfolioCard = ({ imageSrc, title, subtitle, link, description, technologies, techNames, index, reversed }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="card group block rounded-2xl overflow-hidden border"
    style={{ background: 'var(--bg-card)', borderColor: 'var(--card-border)' }}
    data-aos="fade-up"
    data-aos-delay={index ? Math.min(index * 80, 240) : 0}
    data-aos-duration="600"
  >
    <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      {/* Image side */}
      <div className="relative overflow-hidden md:w-1/2 h-[200px] sm:h-[240px] md:h-[280px]">
        <Image
          src={imageSrc || "/placeholder.png"}
          alt={`Portada ${title}`}
          width={600}
          height={400}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:bg-none" />

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
          style={{ background: 'rgba(10, 10, 15, 0.6)' }}
        >
          <span className="flex items-center gap-2 text-white text-sm font-medium px-5 py-2.5 rounded-full backdrop-blur-sm"
            style={{ background: 'rgba(224, 64, 251, 0.8)' }}
          >
            Ver proyecto <FiExternalLink className="text-sm" />
          </span>
        </div>
      </div>

      {/* Content side */}
      <div className="md:w-1/2 p-5 sm:p-6 md:p-8 flex flex-col justify-center">
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
        <div className="flex flex-wrap gap-2">
          {technologies.map((Icon, i) => (
            <span
              key={i}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 group-hover:border-[var(--accent-primary)]/30"
              style={{ color: 'var(--text-muted)', background: 'var(--glass-bg)', borderColor: 'var(--card-border)' }}
            >
              <Icon className="text-xs" />
              {techNames && techNames[i] && <span>{techNames[i]}</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  </a>
);

export default PortfolioCard;
