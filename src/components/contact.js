"use client"
import React, { useState, useEffect } from "react"
import { BsFillSendCheckFill } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

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
        setShowAlert(true);
        setEmail("");
        setName("");
        setMessage("");
      } else if (response.status === 400) {
        alert('Error al enviar el correo electrónico (400)');
        setEmail("");
        console.log('Error al enviar el correo electrónico');
      } else {
        alert('Error al enviar el correo electrónico');
        console.log('Error al enviar el correo electrónico');
      }
    })
    .catch(error => console.error('Error al hacer la solicitud HTTP', error));
  }

  const handleClose = () => {
    setShowAlert(false);
  };

  return (
    <section className="min-h-screen px-15 md:px-40 mt-10" id="Contact">
      <div className="flex flex-row text-center justify-center">
        <RiContactsLine className="text-4xl text-indigo-500 mx-5" />
        <h1 className="text-3xl text-center">Contáctame</h1>
      </div>
        <div className="rounded-xl shadow-lg shadow-indigo-500/40 overflow-hidden text-center m-10 p-10 bg-gray-900 text-white">
        <div >
          <p className="text-xl text-center my-2">Si tienes alguna duda o quieres contactarme, puedes hacerlo a través de este formulario.</p>
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
            {showAlert && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                <div className="flex justify-center text-center">
                  <BsFillSendCheckFill className="text-green-500 mx-2 inline-block align-text-bottom mr-2 text-5xl" />
                </div>
                <span className="block sm:inline"> El correo electrónico ha sido enviado exitosamente.</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                  <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" onClick={handleClose}>
                    <title>Cerrar</title>
                    <path d="M14.348 6.165c.292-.293.292-.767 0-1.06l-.708-.707a.752.752 0 0 0-1.06 0L10 7.88 7.418 5.298a.752.752 0 0 0-1.06 0l-.708.707a.752.752 0 0 0 0 1.06L8.12 10l-2.582 2.582a.752.752 0 0 0 0 1.06l.708.707c.292.293.767.293 1.06 0L10 12.12l2.582 2.582c.292.293.767.293 1.06 0l.708-.707a.752.752 0 0 0 0-1.06L11.88 10l2.582-2.582z" />
                  </svg>
                </span>
              </div>
            )}
          </div>
          </form>
        </div>
    </section>
  )
}

export default Contact;