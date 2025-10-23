import React, { useState, useEffect } from "react";

// Components
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import RatingView from "../components/RatingView";
import AccordionTaller from "../components/AccordionTaller";
import { Link } from "gatsby";

// Data mocks
import { reviewsData } from "../data/reviewsData";
import { accordionData } from "../data/accordionData";

// Styles
import "../styles/global.css";

// Assets
import home1 from "../images/home-foto-01.jpg";
import sobreNos from "../images/sobre-nos.jpg";
import preItv from "../images/pre-itv.png";
import ContentCarousel from "../components/Slide";

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
            className="flex flex-col gap-y-5 w-full bg-white px-10 py-10 lg:py-14 lg:absolute lg:text-white lg:bg-black/25 lg:bottom-0 lg:bg-[rgba(0, 0, 0, 0.5)]"
            data-aos="fade-left"
            data-aos-delay="200" // Começa com 0.5s de atraso
            data-aos-easing="ease-in-sine"
            alt="foto homem com ferramentas home"
          >
            <h1 className="font-bold text-3xl md:text-4xl font-roboto">
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
          className="flex flex-col items-center justify-center max-w-6xl lg:flex-row lg:gap-x-5 gap-y-5 px-10 py-10 lg:py-20 bg-blue-700"
          data-aos="fade-right"
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

        <div className="flex flex-col w-full max-w-6xl bg-white pt-10 pb-14 lg:pt-10 lg:pb-24">
          <div className="flex flex-col gap-y-5 w-full">
            <div className="flex flex-col gap-y-5 px-5 max-w-[800px]">
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
                <div className="flex flex-col gap-y-5 bg-white border-2 border-black rounded-2xl p-5 lg:w-full lg:max-w-[566px]">
                  <p className="font-bold font-roboto text-2xl text-black text-center md:text-start md:text-3xl">
                    Taller Moderno
                  </p>
                  <p className="font-roboto text-black  text-xl text-center md:text-start font-normal">
                    Diagnóstico de vanguardia y técnicos certificados.
                    Garantizamos rapidez, transparencia y durabilidad para su
                    vehículo. Tecnología y experiencia sin incertidumbre.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-y-2.5 lg:flex-row">
                <div className="flex flex-col gap-y-5 bg-white border-2 border-black rounded-2xl p-5 lg:w-full lg:max-w-[566px]">
                  <p className="font-bold text-black  font-roboto text-2xl text-center md:text-start md:text-3xl">
                    Crecimiento Sostenible
                  </p>
                  <p className="font-roboto text-black text-xl text-center md:text-start font-normal">
                    El desarrollo del talento interno garantiza la sucesión del
                    liderazgo y la longevidad del negocio.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-y-2.5 lg:flex-row">
                <div className="flex flex-col gap-y-5 bg-white border-2 border-black rounded-2xl p-5 lg:max-w-[566px]">
                  <p className="font-bold text-black font-roboto text-2xl text-center md:text-start md:text-3xl">
                    Mayor productividad y calidad
                  </p>
                  <p className="font-roboto text-black  text-xl text-center md:text-start font-normal">
                    Los equipos de alto rendimiento generan resultados
                    superiores.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-y-2.5 lg:flex-row">
                <div className="flex flex-col gap-y-5 bg-white border-2 border-black rounded-2xl p-5 lg:w-full lg:max-w-[566px]">
                  <p className="font-bold font-roboto text-black text-2xl text-center md:text-start md:text-3xl">
                    Ventaja Competitiva
                  </p>
                  <p className="font-roboto text-black text-xl text-center md:text-start font-normal">
                    La innovación generada por mentes brillantes garantiza que
                    la empresa destaque entre la competencia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center flex-wrap bg-blue-700 py-12 relative max-w-6xl">
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

        <div className="flex flex-col w-full py-10 max-w-6xl gap-y-10 px-5 bg-white md:px-10 lg:pt-16 lg:pb-16">
          <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-center">
            Personas que confían en nuestro trabajo
          </p>

          {/* COMENTARIOS */}

          <ContentCarousel>
            {reviewsData.map((item, index) => (
              <RatingView
                key={index}
                name={item.name}
                avatar={item.avatar}
                joinDate={item.joinDate}
                rating={item.rating}
                text={item.text}
              />
            ))}
          </ContentCarousel>
        </div>

        <div className="flex flex-col w-full max-w-6xl bg-white py-16">
          <div className="border-2 border-black  px-2.5 pb-9">
            <p className="text-3xl text-center font-bold py-5 lg:text-4xl text-black">
              Hechos y preguntas
            </p>
            {accordionData.map((item, index) => (
              <AccordionTaller
                key={index}
                title={item.title}
                resp={item.resp}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
