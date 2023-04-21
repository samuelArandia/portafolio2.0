"use client"
import React from "react";
import Image from "next/image";

function Portafolio() {
    const Atm = "/atm.png";
    const Sill = "/SILL.png";
    const Platzi = "/platzi.png";


    return ( 
        <section className="min-h-screen">
            <h1>Portafolio</h1>
            <h3 className="subtitulo">Conoce mi portfolio. Estos son algunos de los proyectos en los que he participado como freelance.</h3>
            <div className="">
                <div className="text-center shadow-lg rounded-xl my-10">
                    <a href="https://atodamakina.cl" target="_blank" className="link" />
                    <div className="">
                        <Image src={Atm} alt="Atm" width={100} height={100}/>
                    </div>
                    <h3 className="text-lg font-medium pt-8 pb-2"   >ATM</h3>
                    <p> Arriendo de Herramientas y Maquinaria para el area de construcción</p>
                    <hr />
                    <div className="">
                        <h3 className="user__name">A toda makina SPA</h3>
                    </div>
                </div>
                <div className="text-center shadow-lg rounded-xl ">
                    <a href="https://center.sill.cl/login" target="_blank" className="link" />
                    <div className="">
                        <Image src={Sill} alt="Sill" width={100} height={100}/>
                    </div>
                    <h3 className="text-lg font-medium pt-8 pb-2" >SILL</h3>
                    <p>Aplicación para la gestion y control de inventario de equipos tegnologicos</p>
                    <hr />
                    <div className="">
                        <h3 className="">Eleva SPA</h3>
                    </div>
                </div>
                <div className="text-center shadow-lg rounded-xl ">
                    <a href="https://samuelarandia.github.io/curso-practico-javascript/" target="_blank" className="link" />
                    <div className="">
                        <Image src={Platzi} alt="Platzi" href="https://samuelarandia.github.io/curso-practico-javascript/" target="_blank"  width={100} height={100}/>
                    </div>
                    <h3 className="text-lg font-medium pt-8 pb-2">PLATZI</h3>
                    <p>Calculo de figuras geométricas</p>
                    <hr />
                    <div className="">
                        <h3 className="">Escuela de desarrollo web</h3>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Portafolio;