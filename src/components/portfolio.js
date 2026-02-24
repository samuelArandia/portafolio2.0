"use client";

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import PortfolioCard from "./portfolioCard";
import { projects } from "@/constants";
import { FaVuejs, FaReact } from "react-icons/fa";
import { BsBootstrap, BsFolder2Open } from "react-icons/bs";
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
    Aos.init();
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
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-10 md:px-20 lg:px-40" id="Portafolio">
      <div className="text-center mb-8 sm:mb-12">
        <div className="flex text-center justify-center items-center mb-6 sm:mb-8">
          <BsFolder2Open className="text-3xl sm:text-4xl text-indigo-500 mx-2" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl">Portafolio</h1>
        </div>
        <p className="text-base sm:text-lg md:text-xl">
          Conoce mi portafolio. Estos son algunos de los proyectos en los que he participado y también algunos realizados en cursos.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-5">
        {projectsWithIcons.map((project) => (
          <PortfolioCard key={project.id} {...project} />
        ))}
      </div>
      <div className="p-5 text-center">
        <h2 className="text-base sm:text-lg text-indigo-500">
          Esta sección se actualizará con nuevos proyectos. Para ver más, visita mi
          <a href="https://github.com/samuelArandia"> GitHub</a>.
        </h2>
      </div>
    </section>
  );
};

export default Portafolio;
