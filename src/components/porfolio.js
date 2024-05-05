"use client";

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import PorfolioCard from "./porfolioCard";
import { FaVuejs, FaReact } from "react-icons/fa";
import { BsBootstrap, BsFolder2Open } from "react-icons/bs";
import { SiPostgresql, SiTailwindcss } from "react-icons/si";
import { DiCss3, DiDjango, DiJavascript } from "react-icons/di";
import { TbBrandNextjs, TbBrandGolang } from "react-icons/tb";
import { AiFillHtml5 } from "react-icons/ai";

const Portafolio = () => {
  const projects = [
    {
      imageSrc: "/postal.png",
      title: "PostalExpress",
      subtitle: "Advise SPA",
      link: "https://thor.advise.cl/postal-chile/#/",
      description: "Aplicación para la gestión de envíos de encomiendas y paquetería.",
      technologies: [FaVuejs, TbBrandGolang, SiTailwindcss],
    },
    {
      imageSrc: "/SILL.png",
      title: "Sill",
      subtitle: "Eleva SPA",
      link: "https://center.sill.cl/login",
      description: "Aplicación para la gestión y control de inventario de equipos tecnológicos.",
      technologies: [FaVuejs, BsBootstrap, DiDjango, SiPostgresql],
    },
    {
      imageSrc: "/atm.png",
      title: "ATM",
      subtitle: "A Todo Makina SPA",
      link: "https://atodamakina.cl",
      description: "Landing page de empresa de alquiler de Herramientas y Maquinaria para el área de construcción.",
      technologies: [DiJavascript, FaVuejs, BsBootstrap],
    },
    {
      imageSrc: "/portafolio.png",
      title: "Mi Portafolio",
      subtitle: "Personal",
      link: "https://samuelarandia.vercel.app",
      description: "Portafolio personal basado en experiencias previas.",
      technologies: [FaReact, DiJavascript, SiTailwindcss, TbBrandNextjs ],
    },
    {
      imageSrc: "/platzi.png",
      title: "Platzi",
      subtitle: "Curso de JavaScript",
      link: "https://samuelarandia.github.io/curso-practico-javascript/",
      description: "Proyecto para calcular distintas medidas de figuras geométricas.",
      technologies: [DiJavascript, AiFillHtml5, DiCss3],
    },
  ];

  useEffect(() => {
    Aos.init();
  }, []);

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
        {projects.map((project, index) => (
          <PorfolioCard key={index} {...project} />
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