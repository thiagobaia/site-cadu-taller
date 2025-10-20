import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Não se esqueça de importar o CSS!

const Layout = ({ children }) => {
  useEffect(() => {
    // 1. Importa AOS DENTRO do useEffect
    const AOS = require("aos");

    // 2. Inicializa o AOS
    AOS.init({
      once: true, // Configuração de exemplo
      duration: 1200, // Configuração de exemplo
    });

    // 3. (Opcional) Usa AOS.refresh() para garantir que tudo funciona após mudanças de rota
    AOS.refresh();
  }, []); // O array vazio garante que rode apenas uma vez (após a montagem)

  // Você pode adicionar um useEffect separado para o refresh após a navegação
  useEffect(() => {
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.refresh();
    }
  });
  return (
    <div className="layout">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
