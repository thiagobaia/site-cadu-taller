import React, { useState } from "react";
import emailjs from "@emailjs/browser";

// Chaves de configuração (substitua por variáveis de ambiente se preferir)
const SERVICE_ID = "service_b7ux5f7";
const TEMPLATE_ID = "template_8pv74ua";
const PUBLIC_KEY = "vEMD3glLOHHSHvEfC";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    // Enviar o email via EmailJS
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then((response) => {
        console.log("Email enviado com sucesso!", response);
        setStatus("Mensagem enviada com sucesso!");
        setFormData({ name: "", email: "", message: "" }); // Limpar formulário
      })
      .catch((error) => {
        console.error("Erro ao enviar email:", error);
        setStatus("Erro ao enviar mensagem. Tente novamente.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Contato</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
        </div>
        <div>
          <label htmlFor="message">Mensagem:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
        </div>
        <button
          type="submit"
          disabled={isSending}
          style={{
            padding: "10px 20px",
            backgroundColor: isSending ? "#ccc" : "#007bff",
            color: "white",
            border: "none",
            cursor: isSending ? "not-allowed" : "pointer",
          }}
        >
          {isSending ? "Enviando..." : "Enviar"}
        </button>
      </form>
      {status && (
        <p
          style={{
            marginTop: "10px",
            color: status.includes("Erro") ? "red" : "green",
          }}
        >
          {status}
        </p>
      )}
    </div>
  );
};

export default ContactForm;
