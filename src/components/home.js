"use client"
import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { socialMedia } from "@/constans";


function Inicio() {
  const perfil = "/perfil.png";

  return ( 
    <section className="">
      <div className="text-center p-10">
        <div className="flex justify-center items-center">
          <div className="text-left ">
            <h1 className="text-5xl py-2 font-medium text-indigo-700">Hola, Soy Samuel Arandia</h1>
            <h2 className="text-2xl font-semibold">Desarrollador de software</h2>
            <h4 className="text-lg font-light">Formado para construir sobre bases y fundamentos. Busco un puesto de trabajo desafiante y dinámico para continuar sumando experiencia y conocimientos.</h4>
            <div className="mt-8">
              <input type="button" onclick="window.location.href='https://drive.google.com/file/d/1cSYAWENGx7xBDv369pYlYbjlWnAxP9sK/view?usp=sharing';" download="CvSamuelArandia" defaultValue="Descargar Cv" target="_blank" className="bg-indigo-700 hover:bg-indigo-800 text-white font-medium py-2 px-4 rounded mr-4" />
              <input type="button" onclick="window.location.href='mailto:samuelarandia@gmail.com';" defaultValue="Escríbeme" target="_blank" className="bg-gray-400 hover:bg-gray-500 text-white font-medium py-2 px-4 rounded" />
            </div>
            <div className="">
                <div className="flex flex-row text-center justify-center">
                  {socialMedia.map((social) => (
                    <a
                      key={social.id}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-700 text-3xl hover:text-indigo-800 m-4"
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
          <div className=" mx-auto w-1/2">
            <Image src={perfil} alt="perfil" width={200} height={200} className="rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inicio;