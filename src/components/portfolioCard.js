"use client";

import React from "react";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

const PortfolioCard = ({ imageSrc, title, subtitle, link, description, technologies, techNames }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="card group block rounded-2xl bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800 hover:border-indigo-500/50 transition-all duration-500 overflow-hidden"
    data-aos="fade-up"
  >
    {/* Image with overlay */}
    <div className="relative overflow-hidden h-[180px] sm:h-[220px]">
      <Image
        src={imageSrc || "/placeholder.png"}
        alt={`Portada ${title}`}
        width={400}
        height={250}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

      {/* Hover badge */}
      <div className="absolute top-3 right-3 bg-indigo-500/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex items-center gap-1.5">
        Ver proyecto <FiExternalLink className="text-sm" />
      </div>

      {/* Title overlay on image */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
        <h2 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-white drop-shadow-lg">{title}</h2>
      </div>
    </div>

    {/* Content */}
    <div className="p-4 sm:p-5 text-white">
      {/* Accent line */}
      <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-3"></div>

      <p className="text-sm sm:text-base font-medium text-indigo-300">{subtitle}</p>
      <p className="mt-2 text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-3">{description}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-800/80">
        {technologies.map((Icon, index) => (
          <span key={index} className="flex items-center gap-1.5 bg-gray-800/80 px-2.5 py-1 rounded-full text-xs text-gray-400 group-hover:text-indigo-300 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 border border-transparent transition-all duration-300">
            <Icon className="text-sm" />
            {techNames && techNames[index] && <span>{techNames[index]}</span>}
          </span>
        ))}
      </div>
    </div>
  </a>
);

export default PortfolioCard;
