import React, { useState, useEffect } from "react";

// Components
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import { Link } from "gatsby";

// Styles
import "../styles/global.css";

// Assets
import home1 from "../images/home-foto-01.jpg";
import sobreNos from "../images/sobre-nos.jpg";
import preItv from "../images/pre-itv.png";
import AvatarAvaliacao from "../images/avatar-avaliacao.png";

const Home = () => {
  // Loader state
  const [isLoading, setIsLoading] = useState(true);

  // Let create async method to fetch fake data
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    fakeDataFetch();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Layout>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center max-w-6xl  lg:items-start relative">
          <img
            src={home1}
            className="object-cover w-full h-auto"
            data-aos="fade-right"
            data-aos-delay="200" // Começa com 0.5s de atraso
            data-aos-easing="ease-in-sine"
            alt="foto homem com ferramentas home"
          />

          <div
            className="flex flex-col gap-y-5 w-full bg-white px-10 py-5 lg:py-5 lg:absolute lg:text-white lg:bg-black/25 lg:bottom-0 lg:bg-[rgba(0, 0, 0, 0.5)]"
            data-aos="fade-left"
            data-aos-delay="200" // Começa com 0.5s de atraso
            data-aos-easing="ease-in-sine"
            alt="foto homem com ferramentas home"
          >
            <h1 className="font-bold text-4xl font-roboto">
              Mecánicos certificados altamente calificados
            </h1>
            <span>
              <p className="text-2xl font-roboto">
                Nuestro equipo está comprometido con la excelencia, utilizando
                la última tecnología para garantizar la máxima seguridad y un
                rendimiento óptimo de su vehículo.
              </p>
            </span>
            <Link
              to="/contact"
              role="button"
              className="text-white p-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-2xl focus:outline-none md:text-2xl lg:text-2xl md:max-w-[363px] lg:max-w-[363px] inline-block text-center font-roboto font-medium"
            >
              ¿Necesita una inspección de automóvil?
            </Link>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center max-w-6xl lg:flex-row lg:gap-x-5 gap-y-5 px-10 py-12 bg-blue-700 my-14"
          data-aos="zoom-in-up"
          data-aos-delay="200" // Começa com 0.5s de atraso
          data-aos-easing="ease-in-sine"
        >
          <div className="flex flex-col gap-y-5">
            <p className="font-bold font-roboto text-3xl md:text-5xl text-white font-roboto">
              Quienes somos
            </p>
            <span className="w-full max-w-7xl">
              <p className="text-2xl text-white font-roboto">
                Somos más que un simple taller mecánico; somos socios de su
                vehículo. Cadu Taller es un equipo de mecánicos cualificados,
                dedicados a brindar servicios automotrices de alta calidad con
                total transparencia y garantía. Utilizamos tecnología avanzada
                para realizar diagnósticos precisos, priorizando su seguridad y
                la durabilidad de su inversión.
              </p>
              <Link
                to="/about"
                role="button"
                className="text-black p-2.5 font-roboto font-medium bg-white hover:bg-amber-50 focus:ring-4 focus:ring-blue-300 rounded-lg text-2xl focus:outline-none md:text-3xl lg:text-2xl md:max-w-96 lg:max-w-lg hidden lg:inline-block lg:mt-6 text-center"
              >
                Descubra más
              </Link>
            </span>
          </div>
          <div className="flex flex-col gap-y-5 lg:items-end">
            <img src={sobreNos} alt="sobre-nos" />
            <Link
              to="/about"
              role="button"
              className="text-black font-roboto p-4 bg-white hover:bg-amber-50 focus:ring-4 focus:ring-blue-300 font-light rounded-lg text-2xl focus:outline-none md:text-3xl lg:text-4xl md:max-w-96 lg:max-w-lg inline-block lg:hidden text-center"
            >
              Descubra más
            </Link>
          </div>
        </div>

        <div className="flex flex-col w-full max-w-6xl">
          <div className="flex flex-col  gap-y-5 w-full">
            <div className="flex flex-col gap-y-5 px-5 py-10">
              <p className="font-bold font-roboto text-3xl md:text-5xl">
                ¿Por qué elegirnos?
              </p>
              <p className="text-2xl font-roboto">
                Elegir Cadu Taller significa optar por tranquilidad, experiencia
                y un servicio que realmente valora su tiempo e inversión.
              </p>
            </div>
            <div className="flex flex-col w-full gap-y-5 lg:flex-row lg:flex-wrap lg:gap-x-5">
              <div className="flex flex-col">
                <div className="flex flex-col gap-y-5 bg-white p-5 lg:w-full lg:max-w-[566px]">
                  <p className="font-bold font-roboto text-2xl text-center md:text-start md:text-3xl">
                    Taller Moderno
                  </p>
                  <p className="font-roboto text-xl text-center md:text-start font-normal">
                    Diagnóstico de vanguardia y técnicos certificados.
                    Garantizamos rapidez, transparencia y durabilidad para su
                    vehículo. Tecnología y experiencia sin incertidumbre.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-y-2.5 lg:flex-row">
                <div className="flex flex-col gap-y-5 bg-white p-5 lg:w-full lg:max-w-[566px]">
                  <p className="font-bold font-roboto text-2xl text-center md:text-start md:text-3xl">
                    Crecimiento Sostenible
                  </p>
                  <p className="font-roboto text-xl text-center md:text-start font-normal">
                    El desarrollo del talento interno garantiza la sucesión del
                    liderazgo y la longevidad del negocio.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-y-2.5 lg:flex-row">
                <div className="flex flex-col gap-y-5 bg-white p-5 lg:max-w-[566px]">
                  <p className="font-bold font-roboto text-2xl text-center md:text-start md:text-3xl">
                    Mayor productividad y calidad
                  </p>
                  <p className="font-roboto text-xl text-center md:text-start font-normal">
                    Los equipos de alto rendimiento generan resultados
                    superiores.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-y-2.5 lg:flex-row">
                <div className="flex flex-col gap-y-5 bg-white p-5 lg:w-full lg:max-w-[566px]">
                  <p className="font-bold font-roboto text-2xl text-center md:text-start md:text-3xl">
                    Ventaja Competitiva
                  </p>
                  <p className="font-roboto text-xl text-center md:text-start font-normal">
                    La innovación generada por mentes brillantes garantiza que
                    la empresa destaque entre la competencia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center flex-wrap bg-blue-700 py-12 relative max-w-6xl mt-20 mb-10">
          <img
            className="w-28 lg:w-40 rounded-full absolute -top-12 lg:-top-16 left-10"
            src={preItv}
            alt=""
          />
          <h1 className="mb-4 text-4xl font-roboto font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl text-center">
            ¿ITV a la vista? ¡Pásala sin estrés!
          </h1>
          <p className="mb-6 font-roboto text-lg text-center font-normal text-white lg:text-xl sm:px-16 xl:px-48 px-5">
            Realizaremos una revisión completa: frenos, neumáticos, luces,
            emisiones y suspensión. Identificaremos y repararemos todo antes de
            que el inspector lo detecte.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center font-roboto justify-center px-5 py-3 text-base font-medium text-center text-black bg-white rounded-lg hover:bg-amber-50 focus:ring-4 focus:ring-white-300"
          >
            Contáctanos
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>

        <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-center">
          Personas que confían en nuestro trabajo
        </p>

        <div className="w-full py-10">
          <figure className="max-w-screen mx-auto text-center">
            <svg
              className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <blockquote>
              <p className="text-xl lg:text-2xl italic font-medium text-gray-900 dark:text-white px-5">
                "Taller de confianza mejor de Castellón en Diagnóstico en
                trabajo de calidad"
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse px-8">
              <img
                className="w-10 lg:w-14 rounded-full"
                src={AvatarAvaliacao}
                alt="Jose Padron Hernández"
              />
              <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500">
                <cite className="pe-3 text-xs lg:text-2xl font-medium text-gray-900 dark:text-white">
                  Jose Padron Hernández
                </cite>
                <cite className="ps-3 text-sm lg:text-2xl text-gray-500 dark:text-gray-400">
                  Opinión del cliente
                </cite>
              </div>
            </figcaption>
          </figure>

          <figure className="max-w-screen mx-auto text-center">
            <svg
              className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <blockquote>
              <p className="text-xl lg:text-2xl italic font-medium text-gray-900 dark:text-white px-5">
                "Taller de confianza mejor de Castellón en Diagnóstico en
                trabajo de calidad"
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse px-8">
              <img
                className="w-10 lg:w-14 rounded-full"
                src={AvatarAvaliacao}
                alt="Jose Padron Hernández"
              />
              <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500">
                <cite className="pe-3 text-xs lg:text-2xl font-medium text-gray-900 dark:text-white">
                  Jose Padron Hernández
                </cite>
                <cite className="ps-3 text-sm lg:text-2xl text-gray-500 dark:text-gray-400">
                  Opinión del cliente
                </cite>
              </div>
            </figcaption>
          </figure>

          <figure className="max-w-screen mx-auto text-center">
            <svg
              className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <blockquote>
              <p className="text-xl lg:text-2xl italic font-medium text-gray-900 dark:text-white px-5">
                "Taller de confianza mejor de Castellón en Diagnóstico en
                trabajo de calidad"
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse px-8">
              <img
                className="w-10 lg:w-14 rounded-full"
                src={AvatarAvaliacao}
                alt="Jose Padron Hernández"
              />
              <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500">
                <cite className="pe-3 text-xs lg:text-2xl font-medium text-gray-900 dark:text-white">
                  Jose Padron Hernández
                </cite>
                <cite className="ps-3 text-sm lg:text-2xl text-gray-500 dark:text-gray-400">
                  Opinión del cliente
                </cite>
              </div>
            </figcaption>
          </figure>

          <figure className="max-w-screen mx-auto text-center">
            <svg
              className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <blockquote>
              <p className="text-xl lg:text-2xl italic font-medium text-gray-900 dark:text-white px-5">
                "Taller de confianza mejor de Castellón en Diagnóstico en
                trabajo de calidad"
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse px-8">
              <img
                className="w-10 lg:w-14 rounded-full"
                src={AvatarAvaliacao}
                alt="Jose Padron Hernández"
              />
              <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500">
                <cite className="pe-3 text-xs lg:text-2xl font-medium text-gray-900 dark:text-white">
                  Jose Padron Hernández
                </cite>
                <cite className="ps-3 text-sm lg:text-2xl text-gray-500 dark:text-gray-400">
                  Opinión del cliente
                </cite>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
