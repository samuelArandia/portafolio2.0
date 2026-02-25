"use client";

import React from "react";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

const PortfolioCard = ({ imageSrc, title, subtitle, link, description, technologies, techNames, index }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="card group block rounded-2xl overflow-hidden"
    style={{ background: 'var(--bg-card)', border: '1px solid rgba(255,255,255,0.06)' }}
    data-aos="fade-up"
    data-aos-delay={index ? index * 100 : 0}
    data-aos-duration="600"
  >
    {/* Image */}
    <div className="relative overflow-hidden h-[180px] sm:h-[200px]">
      <Image
        src={imageSrc || "/placeholder.png"}
        alt={`Portada ${title}`}
        width={400}
        height={250}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent opacity-70" />

      {/* Hover badge */}
      <div className="absolute top-3 right-3 text-white text-xs font-medium px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex items-center gap-1.5 backdrop-blur-sm"
        style={{ background: 'rgba(224, 64, 251, 0.85)' }}
      >
        Ver proyecto <FiExternalLink className="text-sm" />
      </div>

      {/* Title overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-base sm:text-lg font-bold font-display uppercase tracking-wide text-white drop-shadow-lg">{title}</h3>
      </div>
    </div>

    {/* Content */}
    <div className="p-4 sm:p-5">
      <div className="w-10 h-0.5 rounded-full mb-3" style={{ background: 'var(--accent-gradient)' }} />
      <p className="text-xs sm:text-sm font-medium text-[var(--accent-primary)]">{subtitle}</p>
      <p className="mt-2 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed line-clamp-3">{description}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/[0.06]">
        {technologies.map((Icon, i) => (
          <span key={i} className="flex items-center gap-1 px-2 py-1 rounded-md text-xs text-[var(--text-muted)] bg-white/[0.03] border border-white/[0.06] group-hover:text-[var(--accent-primary)] group-hover:border-[var(--accent-primary)]/20 transition-all duration-300">
            <Icon className="text-xs" />
            {techNames && techNames[i] && <span>{techNames[i]}</span>}
          </span>
        ))}
      </div>
    </div>
  </a>
);

export default PortfolioCard;
