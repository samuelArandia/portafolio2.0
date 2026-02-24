"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { socialMedia } from "@/constants";
import { TypeAnimation } from "react-type-animation";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

function Inicio() {
  const perfil = "/perfil.png";

  useEffect(() => {
    Aos.init();
  }, []);

  const contactId = "Contact"

  return (
    <section className="md:container min-h-screen md:mx-auto flex items-center" id="Inicio">
      <div className="px-6 py-16 sm:px-10 sm:py-20 md:px-20 md:py-28 lg:p-40 w-full">
        <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left">
          <div className="m-2 sm:m-5">
            <div className="flex flex-col">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                  Hola, Soy Samuel Arandia
                </h1>
              <TypeAnimation
                sequence={['Soy desarrollador de software', 1500, 'Soy analista y programador de sistemas', 1500, 'Bienvenido a mi portafolio', 1500]}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-4"
                cursor={true}
                repeat={Infinity}
              />
              <h4 className="text-base sm:text-lg font-light mt-4">
                Estoy preparado para afrontar desafíos y proyectos de alto impacto.
                <br />Siempre estoy buscando aprender y crecer como profesional, aportando experiencia y creatividad.
              </h4>
            </div>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={() => window.open("https://drive.google.com/file/d/1J-t-qPOVP2hqq85CteBTIR49wG7bqWLn/view?usp=sharing", "_blank")}
                className="text-white rounded-lg px-5 py-3 transition ease-in-out delay-150 bg-indigo-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-700 duration-300 shadow-lg shadow-indigo-500/40 cursor-pointer"
              >
                Descargar CV
              </button>
              <button
                className="text-white rounded-lg px-5 py-3 transition ease-in-out delay-150 bg-indigo-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-700 duration-300 shadow-lg shadow-indigo-500/40 cursor-pointer"
              >
                <Link
                  to={contactId} smooth={true} duration={500} offset={-70}
                >
                  Escríbeme
                </Link>
              </button>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-6 mt-6 sm:mt-8">
              {socialMedia.map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitar ${social.id.replace('social-media-', 'red social ')}`}
                  className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-700 duration-300 text-2xl sm:text-3xl cursor-pointer"
                >
                  {social.id === "social-media-1" && <FaInstagram />}
                  {social.id === "social-media-2" && <FaFacebook />}
                  {social.id === "social-media-3" && <BsTwitterX />}
                  {social.id === "social-media-4" && <FaLinkedin />}
                  {social.id === "social-media-5" && <FaGithub />}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:block flex-shrink-0 ml-10 lg:ml-20">
            <Image style={{ borderRadius: "50%" }} src={perfil} alt="Foto de perfil de Samuel Arandia" width={300} height={200} className="rounded-full w-48 lg:w-64 skew-y-0 shadow-lg shadow-indigo-500/40" data-aos="fade-right" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inicio;
