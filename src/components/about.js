"use client"

import React from "react";
import Image from "next/image";

function About() {
  const svg = "/Web Developer_Monochromatic.svg";

  return (
    <section className="min-h-screen" id="sobreMi">
      <h1>Sobre mi</h1>
      <div className="">
        <div className="">
          <div className="">
            <Image src={svg} alt="perfil" width={100} height={100}/>
          </div>
          <div className="">
            <h3 className="text-3xl py-1">Mi nombre es Samuel Arandia soy Técnico en análisis y programación de sistemas con un año de experiencia, capacitado para realizar el ciclo de desarrollo de software, incorporando en ello el análisis de requerimientos, diseño, programación, pruebas e implementación de soluciones, asi como tambien, mantención de los mismos.</h3>
            <p className="text-indigo-300"> Formado para cumplir con los estándares de calidad técnica y requerimientos asignados. Entre mis destrezas se encuentran el pensamiento  lógico, trabajo en equipo, comunicación escrita y autodidacta. <span className="text-indigo-600">Busco un puesto desafiante y dinámico para continuar sumando experiencia y conocimientos</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )

}

export default About