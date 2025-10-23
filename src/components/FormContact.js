import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// Importando as variáveis de ambiente
const SERVICE_ID = import.meta.env.SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// (Se usar Create React App, use process.env.REACT_APP_... em vez de import.meta.env.VITE_...)

export const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault(); // Previne o recarregamento da página
    setLoading(true);
    setMessage("");

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current, // O elemento <form>
        PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setMessage("Mensagem enviada com sucesso!");
          form.current.reset(); // Limpa o formulário
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          setMessage(
            "Falha ao enviar. Verifique suas chaves e tente novamente."
          );
        }
      );
  };

  return (
    <div>
      {/* O "ref" conecta o formulário com o useRef.
        O "onSubmit" chama nossa função.
      */}
      <form ref={form} onSubmit={sendEmail}>
        <label>Nome</label>
        {/* IMPORTANTE: O atributo "name" DEVE ser igual 
          à variável no seu template EmailJS (ex: {{user_name}})
        */}
        <input type="text" name="user_name" required />

        <label>Email</label>
        {/* O "name" aqui deve ser {{user_email}} no template */}
        <input type="email" name="user_email" required />

        <label>Mensagem</label>
        {/* O "name" aqui deve ser {{message}} no template */}
        <textarea name="message" required />

        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default ContactForm;
