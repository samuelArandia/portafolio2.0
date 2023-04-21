import React from "react";
import Image from "next/image";

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { socialMedia } from "@/constans";
import { navLinks } from "@/constans";
import { projects } from "@/constans";


function Footer() {
  const logoUrl = "/logo.png";

    return ( 
      <footer className="min-h-min">
      <div className="">
        <div className="flex flex-wrap justify-around text-center ">
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h2 className="text-2xl text-indigo-700">Sobre mí</h2>
            <div className="">
              <p>Mi nombre es Samuel Arandia, soy  Técnico en Programación y Análisis de Sistemas, titutado en Instituto AIEP y actuamente me encuentro viviendo en Santiago de chile.</p>
            </div>
            <div className="w-full">
              <Image src={logoUrl} alt="Logo" width={100} height={100}/>
            </div>
          </div>
          <div className="">
            <h2 className="text-2xl text-indigo-700 m-3">Portafolio</h2>
            <div className="">
              <ul className="list-none">
                {projects.map((project) => (
                  <li key={project.id} className="cursor-pointer text-xl ">
                    <a 
                      key={project.id}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      >
                      {project.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="">
            <h2 className="text-indigo-700 text-2xl m-3">Menú</h2>
            <ul className="list-none items-center">
              {navLinks.map((nav) => (
                <li key={nav.id} className="cursor-pointer text-xl">
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
          <div className=" m-5 flex-col justify-center ">
            <div className="flex flex-col">
              <h2 className="text-indigo-700 text-2xl m-3 text-center">Sígueme</h2>
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
            <p className="flex-row text-center justify-center mt-4">© 2022 Samuel Arandia. Todos los derechos reservados. Hecho como ❤ desde Santiago de chile</p>
          </div>
      </div>
      </footer>
    )

}

export default Footer;