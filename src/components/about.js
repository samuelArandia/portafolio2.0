"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { BsFillPersonFill } from "react-icons/bs";

function About() {
  const svg = "/Web Developer_Monochromatic.svg";

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="min-h-screen" id="About" data-aos="fade-right">
      <div className="container mx-auto px- py-20 md:py-32">
        <div className="flex justify-center text-center">
          <BsFillPersonFill className="text-5xl text-indigo-500 mx-5"/>
          <h1 className="text-3xl mb-20 text-center">Sobre mi</h1>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 flex-shrink-0" >
            <Image src={svg} alt="perfil" width={500} height={500}/>
          </div>
          <div className="md:w-1/2 md:pl-16" >
            <h3 className="text-2xl p-5 md:p-0 mb-6 md:mt-0">
              ¡Hola! Soy desarrollador de software y vivo en Chile. 
              Estudié en el instituto AIEP y me considero autodidacta y comunicativo. 
              Me encanta programar y siempre trato de aprender cosas nuevas para mejorar mis habilidades. 
              <br/>Me gusta trabajar en equipo y colaborar con otros desarrolladores para resolver problemas y aprender de ellos. 
              Fuera del trabajo, disfruto de leer, escuchar música y hacer ejercicio, sobre todo correr y hacer senderismo. También me encanta el rap y la música lofi.
              <br/><b className="">¿Qué música te gusta a ti?</b>
            </h3>
            <div className="flex justify-center mt-8">
            <a href="mailto:samuelarandia@gmail.com" className="text-white shadow-lg shadow-indigo-500/40 rounded-lg p-3 m-3 transition ease-in-out delay-150 bg-indigo-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-700 duration-300">
              Cuentame
            </a>
          </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;