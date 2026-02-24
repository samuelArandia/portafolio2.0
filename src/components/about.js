"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaRocket } from "react-icons/fa";
import { Link } from 'react-scroll';

function About() {
  const svg = "/Web Developer_Monochromatic.svg";

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="py-16 sm:py-20 md:py-24 px-6 sm:px-10 md:px-20 lg:px-40" id="About" data-aos="fade-right">
      <div className="container mx-auto">
        <div className="flex justify-center text-center items-center mb-8 sm:mb-12">
          <FaRocket className="text-3xl sm:text-4xl text-indigo-500 mx-3 sm:mx-5"/>
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-center">Sobre mi</h1>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 flex-shrink-0 w-3/4 sm:w-auto">
            <Image src={svg} alt="Ilustración de desarrollador web" width={500} height={500}/>
          </div>
          <div className="md:w-1/2 md:pl-10 lg:pl-16 mt-6 md:mt-0">
            <p className="text-sm sm:text-base md:text-lg p-2 sm:p-5 md:p-0 mb-6 leading-relaxed">
              ¡Hola! Soy desarrollador de software y resido en Santiago de Chile.
              Actualmente estudio Ingeniería en Computación e Informática en la Universidad Andrés Bello.
              También tengo formación en el instituto AIEP y me considero una persona autodidacta y comunicativa.
              <br/><br/>
              Disfruto desarrollar proyectos y siempre estoy en la búsqueda de oportunidades para aprender nuevas habilidades y perfeccionar mis conocimientos.
              Me destaco en el trabajo en equipo, donde colaboro estrechamente con otros desarrolladores para resolver desafíos y compartir experiencias.
              <br/><br/>
              Fuera del trabajo, disfruto leer, escuchar música y hacer ejercicio, especialmente ir al GYM y salir a trotar.
              También me encanta la música rap y alternativa.
              <br/><br/>
              <b>¿Qué tipo de música te gusta?</b>
            </p>
            <div className="flex justify-center mt-6 sm:mt-8">
              <Link to={"Contact"} smooth={true} duration={500} offset={-70} className="text-white shadow-lg shadow-indigo-500/40 rounded-lg px-5 py-3 transition ease-in-out delay-150 bg-indigo-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-700 duration-300">
                Cuentame más
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
