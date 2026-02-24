"use client";

import React from "react";
import Image from "next/image";

const PortfolioCard = ({ imageSrc, title, subtitle, link, description, technologies }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="card group block rounded-xl bg-gray-900 border border-gray-800 hover:border-indigo-500/40 transition-all duration-400"
    data-aos="fade-up"
  >
    <div className="relative overflow-hidden rounded-t-lg h-[160px] sm:h-[200px]">
      <Image
        src={imageSrc || "/placeholder.png"}
        alt={`Portada ${title}`}
        width={300}
        height={200}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>

    <div className="p-4 sm:p-5 md:p-6 text-white">
      <h2 className="text-base sm:text-lg font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">{title}</h2>
      <p className="mt-1 text-sm sm:text-base leading-tight font-medium text-gray-300">{subtitle}</p>
      <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed">{description}</p>
      <div className="flex flex-row justify-center pt-3 sm:pt-4 mt-3 border-t border-gray-700/50 gap-3">
        {technologies.map((Icon, index) => (
          <Icon key={index} className="text-xl sm:text-2xl text-gray-400 group-hover:text-indigo-400 transition-colors duration-300" />
        ))}
      </div>
    </div>
  </a>
);

export default PortfolioCard;
