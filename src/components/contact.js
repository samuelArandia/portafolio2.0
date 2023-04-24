"use client"
import React, { useState, useEffect } from "react"
import { GiMailbox } from "react-icons/gi"

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const correoNombre = name;
    const correoDestinatario = email;
    const correoMensaje = message;

    fetch('https://prod-00.brazilsouth.logic.azure.com:443/workflows/3918c47902ab4a9fb53a8893cb2cdcd2/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=02rKDvooNdj6W46NG7_tO3No8ZK7nh54JCn_eIHlX_Q', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          correoNombre: correoNombre,
          correoDestinatario: correoDestinatario,
          correoMensaje: correoMensaje
      })
    })
    .then(response => {
      if (response.ok) {
        console.log('Correo electrónico enviado exitosamente');
        console.log()
      } else {
        console.log('Error al enviar el correo electrónico');
      }
    })
    .catch(error => console.error('Error al hacer la solicitud HTTP', error));
  }

  return (
    <section className="min-h-screen">
      <div className="flex flex-row text-center justify-center">
        <GiMailbox className="text-2xl text-indigo-500 mx-5" />
        <h1 className="text-3xl text-center">Contáctame</h1>
      </div>
        <div className="rounded-xl shadow-lg shadow-indigo-500/40 overflow-hidden text-center m-10 p-20">
          <div >
            <p className="text-xl text-center">Si tienes alguna duda o quieres contactarme, puedes hacerlo a través de este formulario.</p>
          </div>
          <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-bold text-left ">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 placeholder-gray-400 text-black border-2 border-indigo-500 rounded-lg focus:outline-none focus:shadow-outline-indigo"
                placeholder="Ingresa tu nombre"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-bold text-left">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 placeholder-gray-400 text-black border-2 border-indigo-500 rounded-lg focus:outline-none focus:shadow-outline-indigo"
                placeholder="Ingresa tu correo electrónico"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2 font-bold text-left">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-3 py-2 placeholder-gray-400 text-black border-2 border-indigo-500 rounded-lg focus:outline-none focus:shadow-outline-indigo"
                placeholder="Escribe tu mensaje"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="text-white rounded-lg p-3 m-3 transition ease-in-out delay-150 bg-indigo-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-700 duration-300 shadow-lg shadow-indigo-500/40"
              >
                Enviar mensaje
              </button>
            </div>
          </form>
        </div>
    </section>
  )
}

export default Contact;