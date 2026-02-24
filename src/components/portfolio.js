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

  const projectsWithIcons = projects.map((project) => ({
    ...project,
    technologies: project.technologies
      .map((tech) => techIconMap[tech])
      .filter(Boolean),
  }));

  return (
    <section className="min-h-screen px-10 md:px-40" id="Portafolio">
      <div className="text-center p-10 mt-20 md:mt-0 md:p-0">
        <div className="flex text-center justify-center">
          <BsFolder2Open className="text-4xl text-indigo-500 mx-2" />
          <h1 className="text-3xl mb-20">Portafolio</h1>
        </div>
        <h5 className="text-2xl">
          Conoce mi portafolio. Estos son algunos de los proyectos en los que he participado y también algunos realizados en cursos.
        </h5>
      </div>
      <div className="flex flex-row flex-wrap justify-around w-auto mt-5">
        {projectsWithIcons.map((project) => (
          <PortfolioCard key={project.id} {...project} />
        ))}
      </div>
      <div className="p-5 text-center">
        <h2 className="text-lg text-indigo-500">
          Esta sección se actualizará con nuevos proyectos. Para ver más, visita mi
          <a href="https://github.com/samuelArandia"> GitHub</a>.
        </h2>
      </div>
    </section>
  );
};

export default Portafolio;
