import React from "react";
import Layout from "../components/Layout";
import ContactForm from "../components/FormContact";

const Contact = () => {
  return (
    <Layout>
      <div
        className="max-w-6xl mx-auto lg:flex lg:justify-center lg:items-center mt-5 lg:my-20 lg:gap-x-5 lg:py-10 pt-10 bg-white"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-easing="ease-in-sine"
      >
        <div>
          <p className="font-medium text-3xl w-full max-w-72 px-5">
            Póngase en contacto con nosotros
          </p>
          <ContactForm />
        </div>

        <iframe
          title="Localização da Empresa no Google Maps"
          className="w-full max-w-[566px] h-[400px] lg:h-[510px] border-0 rounded-lg shadow-xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.8059310524895!2d-0.057427324011157146!3d39.96809147151534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd60013478314c53%3A0x366c2091f416f4c1!2sCadu%20Taller!5e0!3m2!1spt-BR!2sbr!4v1761276650821!5m2!1spt-BR!2sbr"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Layout>
  );
};

export default Contact;
