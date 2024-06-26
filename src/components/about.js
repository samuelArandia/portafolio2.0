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
    <section className="min-h-screen px-10 md:px-40 mt-10" id="About" data-aos="fade-right">
      <div className="container mx-auto">
        <div className="flex justify-center text-center">
          <FaRocket className="text-4xl text-indigo-500 mx-5"/>
          <h1 className="text-3xl mb-20 text-center">Sobre mi</h1>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 flex-shrink-0" >
            <Image src={svg} alt="perfil" width={500} height={500}/>
          </div>
          <div className="md:w-1/2 md:pl-16" >
            <h3 className="text-2xl p-5 md:p-0 mb-6 md:mt-0  leading-relaxed space-y-4">
              ¡Hola! Soy desarrollador de software y resido en Santiago de Chile.
              Actualmente estudio Ingeniería en Computación e Informática en la Universidad Andrés Bello. 
              También tengo formación en el instituto AIEP y me considero una persona autodidacta y comunicativa.
              <br/>
              Disfruto desarrollar proyectos y siempre estoy en la búsqueda de oportunidades para aprender nuevas habilidades y perfeccionar mis conocimientos. 
              Me destaco en el trabajo en equipo, donde colaboro estrechamente con otros desarrolladores para resolver desafíos y compartir experiencias. 
              <br/>
              Fuera del trabajo, disfruto leer, escuchar música y hacer ejercicio, especialmente ir al GYM y salir a trotar.
              También me encanta la música rap y alternativa.
              <br/>
              <b className="">¿Qué tipo de música te gusta?</b>
            </h3>
            <div className="flex justify-center mt-8" >
            <Link to={"Contact"} smooth={true} duration={500} offset={-70}  className="text-white shadow-lg shadow-indigo-500/40 rounded-lg p-3 m-3 transition ease-in-out delay-150 bg-indigo-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-700 duration-300">
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