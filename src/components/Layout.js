import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

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
      <Footer />
    </div>
  );
};

export default Layout;
