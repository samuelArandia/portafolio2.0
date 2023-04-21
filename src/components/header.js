"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaHamburger } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai"
import { navLinks } from "@/constans";
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const logoUrl = "/logo.png";

  //Esta funcion se ejecuta cuando el componente se monta
  useEffect(() => {
    //Si el usuario tiene el modo oscuro activado
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

    // Esta función se ejecuta cada vez que el estado isDarkMode cambia
    useEffect(() => {
      // Agrega o elimina la clase "dark" de la etiqueta <html> según el modo actual
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [darkMode]);
  
    // Esta función se ejecuta cuando el botón de modo oscuro se presiona
    function toggleDarkMode() {
      setIsDarkMode(!darkMode);
    }
  
  return (
    <nav className="w-full flex py-2 justify-between items-center navbar">
      <Image src={logoUrl} alt="Logo" width={124} height={32} />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`cursor-pointer text-xl mr-10 ${index === navLinks.length - 1 ? 'mr-0': 'mr-10'}`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        {
          darkMode ? (  
            <li>
              <BsFillMoonStarsFill onClick={toggleDarkMode} className="text-2xl cursor-pointer mr-10 text-black" />
            </li>
          ) : (
            <li>
              <BsSun onClick={toggleDarkMode} className="text-2xl cursor-pointer mr-10 text-black" />
            </li>
          )
        }
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
      { 
        !toggle ? (
          <FaHamburger
            className="text-2xl cursor-pointer mr-10"
            onClick={() => setToggle((prev) => !prev)}
          />
        ) : (
          <AiOutlineClose
            className="text-2xl cursor-pointer mr-10"
            onClick={() => setToggle((prev) => !prev)}
          />
        )
      }
      </div>
      <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}
        >
        <ul className="list-none flex flex-col">
          {navLinks.map((nav, index) => (
            <li key={nav.id} className={`cursor-pointer text-xl mr-10 ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}>
              <a href={`/${nav.id}`}>{nav.title}</a>
            </li>

          ))}

        </ul>
      </div>
    </nav>

  );
}

export default Header;