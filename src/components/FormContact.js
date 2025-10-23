import React, { useState, useRef } from "react";

// ====================================================================
// CONFIGURAÇÃO DO EMAILJS (Substitua pelos seus valores reais)
// O EmailJS usa uma API POST simples que pode ser acessada via fetch.
// ====================================================================
const EMAILJS_CONFIG = {
  SERVICE_ID: "service_5llnhpd", // Ex: "service_xxxxx"
  TEMPLATE_ID: "template_th56yct", // Ex: "template_yyyyy"
  PUBLIC_KEY: "iBaxqO5tKhkDJsp5A", // Ex: "user_zzzzz"
  API_URL: "https://api.emailjs.com/api/v1.0/email/send",
};

// ====================================================================
// Componente de Formulário de Contato
// ====================================================================

export const ContactForm = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success', 'error', 'idle'

  // Manipulador de mudança de campos
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Função de submissão do formulário (simula a chamada EmailJS)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    if (
      EMAILJS_CONFIG.SERVICE_ID === "service_5llnhpd" ||
      EMAILJS_CONFIG.TEMPLATE_ID === "template_th56yct" ||
      EMAILJS_CONFIG.PUBLIC_KEY === "iBaxqO5tKhkDJsp5A"
    ) {
      // Simulação de erro se as chaves não forem alteradas
      setTimeout(() => {
        setLoading(false);
        setStatus("error");
        console.error(
          "ERRO: Por favor, substitua os placeholders das chaves do EmailJS no código."
        );
      }, 1000);
      return;
    }

    // Estrutura de dados exigida pelo EmailJS
    const emailJsPayload = {
      service_id: EMAILJS_CONFIG.SERVICE_ID,
      template_id: EMAILJS_CONFIG.TEMPLATE_ID,
      user_id: EMAILJS_CONFIG.PUBLIC_KEY,
      template_params: {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
    };

    try {
      const response = await fetch(EMAILJS_CONFIG.API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailJsPayload),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Limpa o formulário
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-2xl">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Entre em Contato
      </h2>

      {/* Mensagens de Status */}
      {status === "success" && (
        <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50">
          Mensagem enviada com sucesso! Em breve entraremos em contato.
        </div>
      )}
      {status === "error" && (
        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50">
          Falha ao enviar a mensagem. Por favor, tente novamente mais tarde.
          <p className="text-xs mt-1 font-semibold">
            Verifique se as suas chaves do MailJS estão corretas.
          </p>
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        {/* Nome */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nome Completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
            placeholder="Seu nome"
            disabled={loading}
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
            placeholder="seu@email.com"
            disabled={loading}
          />
        </div>

        {/* Assunto */}
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700"
          >
            Assunto
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
            placeholder="Assunto da mensagem"
            disabled={loading}
          />
        </div>

        {/* Mensagem */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 resize-none"
            placeholder="Escreva sua mensagem aqui..."
            disabled={loading}
          />
        </div>

        {/* Botão de Envio */}
        <button
          type="submit"
          className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-md text-sm font-medium text-white transition duration-200 ${
            loading
              ? "bg-indigo-400 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          }`}
          disabled={loading}
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            "Enviar Mensagem"
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
