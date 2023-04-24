"use client"
import React from 'react';
import { useEffect } from 'react';
import {
  FaVuejs,
  FaPython,
  FaCodeBranch,
  FaHtml5,
  FaReact,
  FaCss3Alt
} from 'react-icons/fa';
import { DiDjango } from 'react-icons/di';
import {
  SiPug,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiAzuredevops,
  SiPostman
} from 'react-icons/si';
import { BsBootstrap, BsGit } from 'react-icons/bs';
import { SiJavascript, SiMicrosoftazure } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { RxNotionLogo } from 'react-icons/rx';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Skills = () => {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className='min-h-screen mt-20' id="Skills">
      <div className="flex text-center justify-center my-20">
        <FaCodeBranch className="text-2xl text-indigo-500 mx-5" />
        <h1 className="text-3xl text-center">Habilidades</h1>
      </div>
      <p className="text-lg mb-8 text-center gap-5">
        Estas son algunas de las tecnologias y leguajes de programación en las que tengo
        experiencia trabajando y que me gustaría seguir aprendiendo. 
        <br/>Tambien herramientas que uso a diario para trabajar en equipo y gestionar proyectos.
      </p>
      <div className="bg-slate-200 rounded-xl shadow-lg shadow-indigo-500/40 overflow-hidden text-center m-10">
        <div
          className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 text-center justify-center p-10 md:p-20"
          data-aos="fade-up"
        >
          <FaHtml5 
            className="text-5xl sm:text-6xl md:text-8xl m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-700 duration-300 cursor-pointer text-red-500 mx-2 sm:mx-5" />
          <FaCss3Alt
            className="text-5xl sm:text-6xl md:text-8xl m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-700 duration-300 cursor-pointer text-blue-500 mx-2 sm:mx-5"
          />
          <SiJavascript
            className="text-5xl sm:text-6xl md:text-8xl m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-700 duration-300 cursor-pointer text-yellow-500 mx-2 sm:mx-5"
          />
          <SiTypescript
            className="text-5xl sm:text-6xl md:text-8xl m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-700 duration-300 cursor-pointer text-blue-500 mx-2 sm:mx-5"
          />
          <FaPython
            className="text-5xl sm:text-6xl md:text-8xl m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-700 duration-300 cursor-pointer text-blue-500 mx-2 sm:mx-5"
          />
          <FaVuejs
            className="text-5xl sm:text-6xl md:text-8xl m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-700 duration-300 cursor-pointer text-green-700 mx-2 sm:mx-5"
          />
          <FaReact
            className="text-5xl sm:text-6xl md:text-8xl m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-700 duration-300 cursor-pointer text-sky-700 mx-2 sm:mx-5"
          />
          <SiPug
            className="text-5xl sm:text-6xl md:text-8xl m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-700 duration-300 cursor-pointer text-amber-950 mx-2 sm:mx-5"
          />
          <BsBootstrap
            className="text-5xl sm:text-6xl md:text-8xl m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-700 duration-300 cursor-pointer text-purple-500 mx-2 sm:mx-5"
          />
          <SiTailwindcss
            className="text-5xl sm:text-6xl md:text-8xl m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-700 duration-300 cursor-pointer text-cyan-500 mx-2 sm:mx-5"
          />
          <DiDjango
            className="text-5xl sm:text-6xl md:text-8xl m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-700 duration-300 cursor-pointer text-green-500 mx-2 sm:mx-5"
          />
          <SiPostgresql
            className="text-5xl sm:text-6xl md:text-8xl m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-700 duration-300 cursor-pointer text-blue-500 mx-2 sm:mx-5"
          />
          <SiAzuredevops
            className="text-5xl sm:text-6xl md:text-8xl m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-700 duration-300 cursor-pointer text-blue-500 mx-2 sm:mx-5"
          />
          <SiPostman
            className="text-5xl sm:text-6xl md:text-8xl m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-700 duration-300 cursor-pointer text-orange-500 mx-2 sm:mx-5"
          />
          <SiMicrosoftazure
            className="text-5xl sm:text-6xl md:text-8xl m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-700 duration-300 cursor-pointer text-blue-500 mx-2 sm:mx-5"
          />
          <BsGit
            className="text-5xl sm:text-6xl md:text-8xl m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-700 duration-300 cursor-pointer text-red-500 mx-2 sm:mx-5"
          />
          <TbBrandVscode
            className="text-5xl sm:text-6xl md:text-8xl m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:text-indigo-700 duration-300 cursor-pointer text-blue-500 mx-2 sm:mx-5"
          />
          <RxNotionLogo
            className="text-5xl sm:text-6xl md:text-8xl m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:text-indigo-700 duration-300 cursor-pointer text-gray-500 mx-2 sm:mx-5"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;


