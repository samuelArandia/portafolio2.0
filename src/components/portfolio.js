"use client";

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import PortfolioCard from "./portfolioCard";
import { projects } from "@/constants";
import { FaVuejs, FaReact } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { SiPostgresql, SiTailwindcss } from "react-icons/si";
import { DiCss3, DiDjango, DiJavascript } from "react-icons/di";
import { TbBrandNextjs, TbBrandGolang } from "react-icons/tb";
import { AiFillHtml5 } from "react-icons/ai";

const techIconMap = {
  "Vue.js": FaVuejs,
  "Go": TbBrandGolang,
  "Tailwind CSS": SiTailwindcss,
  "Bootstrap": BsBootstrap,
  "Django": DiDjango,
  "PostgreSQL": SiPostgresql,
  "React": FaReact,
  "JavaScript": DiJavascript,
  "Next.js": TbBrandNextjs,
  "HTML": AiFillHtml5,
  "CSS": DiCss3,
};

const Portafolio = () => {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  const projectsWithIcons = projects.map((project) => {
    const validTechs = project.technologies.filter((tech) => techIconMap[tech]);
    return {
      ...project,
      technologies: validTechs.map((tech) => techIconMap[tech]),
      techNames: validTechs,
    };
  });

  return (
    <section className="py-20 sm:py-24 md:py-28 px-5 sm:px-8 md:px-12 lg:px-16" id="Portafolio">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <h2
            className="font-display font-bold"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--text-primary)' }}
          >
            Portafolio
          </h2>
          <div className="section-divider mx-auto mt-3 mb-5" />
          <p style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.05rem)', color: 'var(--text-secondary)' }} className="max-w-2xl mx-auto">
            Estos son algunos de los proyectos en los que he participado y también algunos realizados en cursos.
          </p>
        </div>

        {/* Projects - large horizontal cards */}
        <div className="space-y-6 sm:space-y-8">
          {projectsWithIcons.map((project, index) => (
            <PortfolioCard key={project.id} {...project} index={index} reversed={index % 2 !== 0} />
          ))}
        </div>

        {/* GitHub link */}
        <div className="text-center mt-12" data-aos="fade-up">
          <a
            href="https://github.com/samuelArandia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm hover:text-[var(--accent-primary)] transition-colors duration-200"
            style={{ color: 'var(--text-secondary)' }}
          >
            Ver más proyectos en GitHub
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portafolio;
