import * as React from "react";
import Layout from "../components/Layout";
import AvatarAvaliacao from "../images/avatar-avaliacao.png";
import preItv from "../images/pre-itv.png";
import BlogCard from "../components/Card";
import qualities from "../data/qualities";

const PreItv = () => {
  return (
    <Layout>
      <div className="">
        <div className="flex flex-col items-center justify-center w-screen bg-blue-700 py-40">
          <p className="text-2xl md:text-4xl lg:text-6xl text-white font-semibold mb-3.5">
            REVISIÓN PRE-ITV
          </p>
          <p className="text-white text-lg md:text-2xl text-center lg:text-3xl px-5">
            Antes de pasar la inspección de tu vehículo, realiza un control
            previo en Cadu Taller para que puedas acudir a la inspección con
            total tranquilidad.
          </p>
        </div>

        <div className="flex justify-center flex-col items-center w-full">
          <div className="w-full lg:max-w-6xl">
            <div className=" w-full flex justify-center mt-10">
              <p className="text-2xl md:text-4xl lg:text-6xl text-center text-gray-950 font-semibold mb-3.5">
                Principales cualidades de Cadu Taller
              </p>
            </div>

            <div className="flex flex-col justify-center items-center md:justify-center md:items-stretch md:flex-row md:flex-wrap lg:flex-row lg:items-stretch lg:flex-wrap gap-3 py-12 px-5 ">
              {qualities.map((item, index) => (
                <BlogCard
                  key={index}
                  title={item.title}
                  content={item.content}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center flex-wrap bg-blue-700 py-12 relative">
          <img
            className="w-28 lg:w-40 rounded-full absolute -top-12 lg:-top-16 left-10"
            src={preItv}
            alt=""
          />
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl text-center">
            ¿ITV a la vista? ¡Pásala sin estrés!
          </h1>
          <p className="mb-6 text-lg text-center font-normal text-white lg:text-xl sm:px-16 xl:px-48 px-5">
            Realizaremos una revisión completa: frenos, neumáticos, luces,
            emisiones y suspensión. Identificaremos y repararemos todo antes de
            que el inspector lo detecte.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black bg-white rounded-lg hover:bg-amber-50 focus:ring-4 focus:ring-white-300 "
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
          </a>
        </div>

        <div className="w-full py-10">
          <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-center my-20">
            Personas que confían en nuestro trabajo
          </p>
          <figure className="max-w-screen-md mx-auto text-center">
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

export default PreItv;
