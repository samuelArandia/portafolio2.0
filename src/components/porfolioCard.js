"use client";

import React from "react";
import Image from "next/image";

const PortfolioCard = ({ imageSrc, title, subtitle, link, description, technologies }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="card block max-w-md m-3 rounded-xl shadow-lg shadow-indigo-500/40 hover:-translate-y-1 hover:scale-110 duration-300"
    data-aos="zoom-in"
  >
    <div className="card-image flex justify-center p-2 text-center" style={{ height: '200px', width: '100%' }}>
      <Image
        src={imageSrc || "/placeholder.png"}
        alt={`Portada ${title}`}
        width={300}
        height={200}
        className="w-full object-cover rounded-lg"
        loading="lazy"
      />
    </div>

    <div className="p-8">
      <p className="card-title uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</p>
      <p className="block mt-1 text-lg leading-tight font-medium">{subtitle}</p>
      <p className="card-body mt-2">{description}</p>
      <div className="footer flex flex-row justify-center p-3">
        {technologies.map((Icon, index) => (
          <Icon key={index} className="text-3xl mx-2" />
        ))}
      </div>
    </div>
  </a>
);

export default PortfolioCard;