"use client";

import React from "react";
import Image from "next/image";

const PortfolioCard = ({ imageSrc, title, subtitle, link, description, technologies }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="card block rounded-xl shadow-lg shadow-indigo-500/40 hover:-translate-y-2 duration-300 bg-gray-900"
    data-aos="zoom-in"
  >
    <div className="flex justify-center p-2 text-center h-[160px] sm:h-[200px]">
      <Image
        src={imageSrc || "/placeholder.png"}
        alt={`Portada ${title}`}
        width={300}
        height={200}
        className="w-full object-cover rounded-lg"
        loading="lazy"
      />
    </div>

    <div className="p-4 sm:p-6 md:p-8 text-white">
      <h2 className="card-title uppercase bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">{title}</h2>
      <p className="block mt-1 text-base sm:text-lg leading-tight font-medium">{subtitle}</p>
      <p className="card-body mt-2 text-sm sm:text-base">{description}</p>
      <div className="footer flex flex-row justify-center p-2 sm:p-3 gap-2">
        {technologies.map((Icon, index) => (
          <Icon key={index} className="text-2xl sm:text-3xl" />
        ))}
      </div>
    </div>
  </a>
);

export default PortfolioCard;
