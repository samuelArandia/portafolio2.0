"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import { FaPython, FaVuejs, FaReact } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { SiMicrosoftazure, SiPostgresql, SiPug, SiTailwindcss } from "react-icons/si";
import { DiCss3, DiDjango, DiJavascript } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { AiFillHtml5 } from "react-icons/ai";
import { BsFolder2Open } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

function Portafolio() {
  const atm = "/atm.png";
  const sill = "/SILL.png";
  const platzi = "/platzi.png";
  const portafolio = "/portafolio.png";

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="min-h-screen dark:bg-gradient-to-b dark:bg-gray-900  dark:to-indigo-900" id="Portafolio">
      <div className="text-center p-10 mt-20 md:mt-0 md:p-0">
        <div className="flex text-center justify-center"> 
          <BsFolder2Open className="text-2xl text-indigo-500 mx-2"/>
          <h1 className="text-3xl mb-20 text-center"> Portafolio</h1>
        </div>
        <h5 className="text-2xl">Conoce mi portfolio. Estos son algunos de los proyectos en los que he participado y tambien algunos que hecho en los cursos</h5>
      </div>
      <div className="flex flex-row flex-wrap justify-around w-auto mt-5">
        <div className="max-w-md m-3 bg-white rounded-xl shadow-lg shadow-indigo-500/40 overflow-hidden md:max-w-2xl p-2 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" data-aos="zoom-in">
          <div className="md:flex  justify-center align-middle">
            <div className="md:shrink-0">
              <Image src={atm} alt="Portada empresa" width={300} height={200} className="w-full object-cover md:h-full md:w-48" loading="lazy"/>
            </div>
            <div className="p-8" >
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">ATM</div>
              <a href="https://atodamakina.cl" target="_blank" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">A toda makina Spa</a>
              <p className="mt-2 text-slate-500">Landing page de empresa de rriendo de Herramientas y Maquinaria para el area de construcción</p>
              <div className="flex flex-row justify-center p-3">
                <DiJavascript className="text-3xl text-yellow-500 " />
                <FaVuejs className="text-3xl text-green-700 mx-5" />
                <BsBootstrap className="text-3xl text-purple-500" />
              </div>
            </div>
          </div>
        </div>
        <div className=" max-w-md m-3 bg-white rounded-xl shadow-lg shadow-indigo-500/40 overflow-hidden md:max-w-2xl p-2 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" data-aos="zoom-in">
          <div className="md:flex justify-center align-middle">
            <div className="md:shrink-0">
              <Image src={sill} alt="Portada empresa" width={400} height={200} className=" h-48 w-full object-cover md:h-full md:w-48" loading="lazy" />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Sill</div>
              <a href="https://center.sill.cl/login" target="_blank" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Eleva Spa</a>
              <p className="mt-2 text-slate-500">Aplicación para la gestión y control de inventario de equipos tecnológicos, proyecto en cual trabaje en mi practicas</p>
              <div className="flex flex-wrap justify-center md:p-3 md:flex-row" >
                <FaVuejs className="text-3xl text-green-700 mx-5" />
                <SiPug className="text-3xl text-amber-950 mx-5" />
                <BsBootstrap className="text-3xl text-purple-500 mx-5" />
                <FaPython className="text-3xl text-blue-500 mx-5" />
                <DiDjango className="text-3xl text-green-900 mx-5" />
                <SiPostgresql className="text-3xl text-blue-500 mx-5" />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-md m-3 bg-white rounded-xl shadow-lg shadow-indigo-500/40 overflow-hidden md:max-w-2xl p-2 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" data-aos="zoom-in">
          <div className="md:flex justify-center align-middle">
            <div className="md:shrink-0">
              <Image src={platzi} alt="Portada empresa" width={300} height={200} className="h-48 w-full object-cover md:h-full md:w-48" loading="lazy" />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Platzi</div>
              <a href="https://samuelarandia.github.io/curso-practico-javascript/" target="_blank" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Escuela de desarrollo web</a>
              <p className="mt-2 text-slate-500">Curso de JavaScript realizamos un pagina que calcula distintas medidas de figuras geométricas</p>
              <div className="flex flex-row justify-center p-3" >
                <DiJavascript className="text-3xl text-yellow-500 " />
                <AiFillHtml5 className="text-3xl text-red-500 mx-5" />
                <DiCss3 className="text-3xl text-blue-500" />
              </div>
            </div>
          </div>
        </div>
        <div className=" max-w-md m-3 bg-white rounded-xl shadow-lg shadow-indigo-500/40 overflow-hidden md:max-w-2xl p-2 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" data-aos="zoom-in">
          <div className="md:flex justify-center align-middle">
            <div className="md:shrink-0">
              <Image src={portafolio} alt="Portada empresa" width={300} height={200} className=" h-48 w-full object-cover md:h-full md:w-48" loading="lazy" />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Mi portafolio</div>
              <a href="https://samuelarandia.com" target="_blank" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Samuel Arandia</a>
              <p className="mt-2 text-slate-500">Mi portafolio web lo cree en base a todo lo aprendiendo en todos los cursos y proyectos en lo que he participado</p>

              <div className="flex flex-row justify-center p-3" >
                <FaReact className="text-3xl text-blue-500 mx-5" />
                <DiJavascript className="text-3xl text-yellow-500 " />
                <SiTailwindcss className="text-3xl text-blue-600 mx-5" />
                <TbBrandNextjs className="text-3xl text-blue-900 " />
                <SiMicrosoftazure className="text-3xl text-blue-500 mx-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 text-center">
        <p className="text-sm">Esta sección la estaré actualizando con nuevos proyectos al paso del tiempo.</p>
      </div>
    </section>
  );
}

export default Portafolio;