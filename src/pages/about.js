import React from "react";
import Layout from "../components/Layout";
import PerfilPhoto from "../images/cadu-taller-sobre-nos.jpeg";
import BannerPhoto from "../images/banner-nosotros.jpg";

import Equipe1 from "../images/equipe-1.jpg";
import Equipe2 from "../images/equipe-2.jpg";
import Equipe3 from "../images/equipe-3.jpg";

import { Link } from "gatsby";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Link
          to="/"
          className="flex flex-col-reverse items-center bg-white lg:w-full  md:flex-row hover:bg-gray-100"
        >
          <img
            className="object-cover object-top w-full  h-[550px] md:w-auto lg:h-[600px] lg:w-auto "
            src={PerfilPhoto}
            alt=""
          />
          <div className="flex flex-col gap-y-2.5 justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl lg:text-4xl font-bold tracking-tight text-gray-900">
              CADU TALLER ¡SOMOS TU MEJOR OPCIÓN!
            </h5>
            <p className="mb-3 font-normal text-gray-700 text-lg lg:text-2xl ">
              En Cadu Taller contamos con más de 15 años de experiencia en el
              sector automotriz. Fundado por Carlos Eduardo, mecánico brasileño,
              nuestro taller ofrece servicios de mecánica general, mantenimiento
              y reparación para todo tipo de coches, con la máxima calidad,
              confianza y transparencia. Combinamos la experiencia internacional
              con la tecnología y estándares europeos, garantizando un servicio
              rápido, honesto y eficaz. En Cadu Taller, tu coche está en manos
              expertas.
            </p>
            <Link
              to="/about"
              className="flex items-center font-roboto justify-center lg:justify-start lg:max-w-2xs px-5 py-3 text-base font-medium  text-white bg-blue-700 rounded-sm hover:bg-blue-600 focus:ring-4 focus:ring-white-300"
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
        </Link>

        <div className="py-12 relative">
          <img
            src={BannerPhoto}
            alt="Homem Trocando Óleo"
            className="w-full h-32  md:h-72 object-cover object-left-bottom"
          />
          <div className="text-center mt-4 relative md:absolute w-full md:bg-black/50 md:bg-[rgba(0, 0, 0, 0.5)] md:top-40 lg:top-45 md:p-5">
            <p className="text-2xl p-2.5 font-semibold text-white md:text-white bg-black/50 bg-[rgba(0, 0, 0, 0.5)] md:bg-transparent absolute -top-24 md:py-[13px] md:-top-20 md:text-4xl md:static">
              ¡Ven y haz tu revisión Pre-ITV!
            </p>
            <p className="text-gray-600 mt-2 md:text-white">
              Asegúrese de que su vehículo esté listo para la inspección
              técnica. Ofrecemos servicios integrales a precios accesibles.
            </p>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Conozca a nuestro equipo de profesionales
          </h2>
          <p className="text-gray-600 mt-2">
            Nuestro equipo está formado por especialistas dedicados al cuidado
            de su vehículo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <img
              src={Equipe1}
              alt="Mecânico 1"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">João Silva</h3>
            <p className="text-gray-600">Especialista em Mecânica Geral</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <img
              src={Equipe2}
              alt="Eletricista 1"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Maria Santos
            </h3>
            <p className="text-gray-600">Especialista em Elétrica Automotiva</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <img
              src={Equipe3}
              alt="Funilaria 1"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Pedro Oliveira
            </h3>
            <p className="text-gray-600">Especialista em Funilaria e Pintura</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <img
              src={Equipe1}
              alt="Mecânico 2"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Ana Costa</h3>
            <p className="text-gray-600">Especialista em Suspensão e Freios</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <img
              src={Equipe2}
              alt="Diagnóstico 1"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Carlos Ferreira
            </h3>
            <p className="text-gray-600">
              Especialista em Diagnóstico Eletrônico
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <img
              src={Equipe3}
              alt="Revisão 1"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Luisa Pereira
            </h3>
            <p className="text-gray-600">
              Especialista em Revisões e Manutenção
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
