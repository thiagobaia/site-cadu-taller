import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "@dxkit-org/react-floating-whatsapp";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import avatarWhats from "../images/cadu-taller-sobre-nos.jpeg";

const Layout = ({ children }) => {
  useEffect(() => {
    const AOS = require("aos");

    AOS.init({
      once: true,
      duration: 1200,
    });

    AOS.refresh();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.refresh();
    }
  });
  return (
    <div className="layout">
      <Navbar />
      <main>{children}</main>
      <FloatingWhatsApp
        phoneNumber="+34642594689"
        accountName="Cadu Taller"
        avatar={avatarWhats}
        statusMessage="Suele responder en menos de una hora."
        chatMessage="¡Hola! 👋 ¿En qué podemos ayudarte hoy?"
        darkMode={false}
        allowClickAway={true}
        allowEsc={true}
        notification={true}
        notificationSound={true}
        placeholder={"Escribe tu mensaje..."}
        className="flex object-cover"
      />
      <Footer />
    </div>
  );
};

export default Layout;
