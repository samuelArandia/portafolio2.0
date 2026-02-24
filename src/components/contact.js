"use client"
import React, { useState } from "react"
import { BsFillSendCheckFill } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    fetch('https://prod-00.brazilsouth.logic.azure.com:443/workflows/3918c47902ab4a9fb53a8893cb2cdcd2/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=02rKDvooNdj6W46NG7_tO3No8ZK7nh54JCn_eIHlX_Q', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          correoNombre: name,
          correoDestinatario: email,
          correoMensaje: message
      })
    })
    .then(response => {
      if (response.ok) {
        setShowAlert(true);
        setEmail("");
        setName("");
        setMessage("");
      } else {
        alert('Error al enviar el correo electrónico');
      }
    })
    .catch(() => {
      alert('Error al enviar el correo electrónico');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  }

  const handleClose = () => {
    setShowAlert(false);
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-10 md:px-20 lg:px-40" id="Contact">
      <div className="flex flex-row text-center justify-center items-center mb-6 sm:mb-8">
        <RiContactsLine className="text-3xl sm:text-4xl text-indigo-500 mx-3 sm:mx-5" />
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center">Contáctame</h1>
      </div>
        <div className="rounded-2xl overflow-hidden text-center mx-0 sm:mx-10 p-6 sm:p-8 md:p-10 bg-gray-900/80 backdrop-blur-sm border border-gray-800 text-white">
          <p className="text-sm sm:text-base md:text-lg text-center text-gray-300 mb-6">Si tienes alguna duda o quieres contactarme, puedes hacerlo a través de este formulario.</p>
          <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 font-semibold text-left text-sm sm:text-base text-gray-200">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 bg-gray-800 placeholder-gray-500 text-white border border-gray-700 rounded-lg focus:outline-none transition-all duration-200 text-sm sm:text-base"
                placeholder="Ingresa tu nombre"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 font-semibold text-left text-sm sm:text-base text-gray-200">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 bg-gray-800 placeholder-gray-500 text-white border border-gray-700 rounded-lg focus:outline-none transition-all duration-200 text-sm sm:text-base"
                placeholder="Ingresa tu correo electrónico"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="block mb-2 font-semibold text-left text-sm sm:text-base text-gray-200">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-3 bg-gray-800 placeholder-gray-500 text-white border border-gray-700 rounded-lg focus:outline-none transition-all duration-200 text-sm sm:text-base resize-none"
                placeholder="Escribe tu mensaje"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="text-white rounded-lg px-8 py-3 font-medium transition-all duration-300 bg-indigo-500 hover:-translate-y-1 hover:bg-indigo-600 shadow-lg shadow-indigo-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 text-sm sm:text-base cursor-pointer"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            {showAlert && (
              <div className="alert-success bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-4 rounded-xl mt-6" role="status">
                <div className="flex items-center justify-center gap-3">
                  <BsFillSendCheckFill className="text-green-400 text-2xl sm:text-3xl flex-shrink-0" />
                  <span className="text-sm sm:text-base">El correo electrónico ha sido enviado exitosamente.</span>
                </div>
                <button onClick={handleClose} className="mt-3 text-xs text-green-500 hover:text-green-300 transition-colors cursor-pointer" aria-label="Cerrar notificación">
                  Cerrar
                </button>
              </div>
            )}
          </div>
          </form>
        </div>
    </section>
  )
}

export default Contact;
