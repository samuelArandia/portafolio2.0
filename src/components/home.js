"use client"
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { socialMedia } from "@/constans";
import { TypeAnimation } from "react-type-animation";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

function Inicio() {
  const perfil = "/perfil.png";

  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current.focus();
  }, []);

  useEffect(() => {
    Aos.init();
  }, []);

  const contactId = "Contact"

  return (
    <section className="md:container h-screen md:mx-auto" id="Inicio">
      <div className="p-40 md:p-40">
        <div className="flex justify-center text-center md:text-left">
          <div className="m-5">
            <div className="flex flex-col">
                <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                  Hola, Soy Samuel Arandia
                </h1>
              <TypeAnimation
                sequence={['Soy desarrollador de software', 1500, 'Soy analista y programador de sistemas', 1500, 'Bienvenido a mi portafolio', 1500]}
                style={{ fontSize: '2em', display: 'inline-block' }}
                className="text-2xl font-semibold"
                cursor={true}
                repeat={Infinity}
              />
              <h4 className="text-lg font-light">
                Formado para construir sobre bases y fundamentos.
                <br/>Apto para un puesto de trabajo
                desafiante y dinámico para continuar sumando experiencia y conocimientos.
              </h4>
            </div>
            <div className="mt-8 justify-between text-center">
              {/* descargar archivo pdf */}
              <button
                ref={buttonRef}
                onClick={() => window.open("https://drive.google.com/file/d/1J-t-qPOVP2hqq85CteBTIR49wG7bqWLn/view?usp=sharing", "_blank")}
                download="CvSamuelArandia"
                target="_blank"
                className="text-white rounded-lg p-3 m-3 transition ease-in-out delay-150 bg-indigo-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-700 duration-300 shadow-lg shadow-indigo-500/40 cursor-pointer"
              >
                Descargar CV
              </button>
              <button
                className="text-white rounded-lg p-3 m-3 transition ease-in-out delay-150 bg-indigo-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-700 duration-300 shadow-lg shadow-indigo-500/40 cursor-pointer"
              >
                <Link
                  to={contactId} smooth={true} duration={500} offset={-70}
                >
                  Escríbeme
                </Link>
              </button>
            </div>
            <div className="">
              <div className="flex flex-row text-center justify-center p-5">
                {socialMedia.map((social) => (
                  <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="m-5 md:m-10 md:mr-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-700 duration-300 text-3xl cursor-pointer"
                  >
                    {social.id === "social-media-1" && <FaInstagram />}
                    {social.id === "social-media-2" && <FaFacebook />}
                    {social.id === "social-media-3" && <FaTwitter />}
                    {social.id === "social-media-4" && <FaLinkedin />}
                    {social.id === "social-media-5" && <FaGithub />}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="w-auto ml-20 hidden md:block">
            <Image  style={{ borderRadius: "50%" }} src={perfil} alt="perfil" width={300} height={200} className="rounded-full w-64 skew-y-0 shadow-lg shadow-indigo-500/40" data-aos="fade-right" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inicio;
