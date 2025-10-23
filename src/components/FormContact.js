import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Impede o recarregamento da página

    // Exibe um feedback para o usuário (opcional)
    alert("Enviando mensagem...");

    emailjs
      .sendForm(
        process.env.GATSBY_EMAILJS_SERVICE_ID,
        process.env.GATSBY_EMAILJS_TEMPLATE_ID,
        form.current, // O elemento <form>
        process.env.GATSBY_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Mensagem enviada com sucesso! ✅");
          form.current.reset(); // Limpa o formulário após o envio
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Ocorreu um erro ao enviar a mensagem. ❌");
        }
      );
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Fale Conosco
      </h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        {/* Campo Nome */}
        <div>
          <label
            htmlFor="from_name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Seu Nome
          </label>
          <input
            type="text"
            name="from_name" // !! Importante !!
            id="from_name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="João Silva"
          />
        </div>

        {/* Campo Email */}
        <div>
          <label
            htmlFor="from_email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Seu Email
          </label>
          <input
            type="email"
            name="from_email" // !! Importante !!
            id="from_email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="joao.silva@exemplo.com"
          />
        </div>

        {/* Campo Mensagem */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Mensagem
          </label>
          <textarea
            name="message" // !! Importante !!
            id="message"
            rows="4"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Sua mensagem aqui..."
          ></textarea>
        </div>

        {/* Botão Enviar */}
        <div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
          >
            Enviar Mensagem
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
