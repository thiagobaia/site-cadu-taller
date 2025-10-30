import React from "react";
import Layout from "../components/Layout";
import PerfilPhoto from "../images/cadu-taller-sobre-nos.jpeg";
import BannerPhoto from "../images/banner-nosotros.jpg";

//import Equipe1 from "../images/equipe-1.jpg";
//import Equipe2 from "../images/equipe-2.jpg";
//import Equipe3 from "../images/equipe-3.jpg";

import { Link } from "gatsby";

const About = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-8 overflow-x-hidden">
        <div
          className="flex flex-col-reverse items-center bg-white lg:w-full  md:flex-row hover:bg-gray-100"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-easing="ease-in-sine"
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
              className="flex items-center font-roboto justify-center invisible lg:visible lg:justify-start lg:max-w-[180px] px-5 py-3 text-base font-medium  text-white bg-linear-to-r from-blue-700 via-blue-500 to-fuchsia-600 rounded-sm hover:bg-linear-to-r hover:from-fuchsia-600 hover:via-blue-500 hover:to-blue-700  focus:ring-4 focus:ring-white-300"
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
        </div>

        <Link
          to="/about"
          className="flex items-center font-roboto justify-center visible my-5 lg:invisible lg:justify-start lg:max-w-2xs px-5 py-3 text-base font-medium  text-white bg-linear-to-r from-blue-700 via-blue-500 to-fuchsia-600 rounded-sm hover:bg-linear-to-r hover:from-fuchsia-600 hover:via-blue-500 hover:to-blue-700 focus:ring-4 focus:ring-white-300"
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

        <div
          className="py-12 relative"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-easing="ease-in-sine"
        >
          <img
            src={BannerPhoto}
            alt="Homem Trocando Óleo"
            className="w-full h-32  md:h-72 object-cover object-left-bottom"
          />
          <div className="text-center mt-4 relative md:absolute w-full md:bg-black/50 md:bg-[rgba(0, 0, 0, 0.5)] md:top-40 lg:top-45 md:p-5">
            <p className="text-2xl p-2.5 w-full font-semibold text-white  bg-black/50 bg-[rgba(0, 0, 0, 0.5)] md:bg-transparent absolute -top-[99px]  md:bottom-0 md:py-[13px] md:text-4xl md:static">
              ¡Ven y haz tu revisión Pre-ITV!
            </p>
            <p className="text-gray-600 mt-2 md:text-white">
              Asegúrese de que su vehículo esté listo para la inspección
              técnica. Ofrecemos servicios integrales a precios accesibles.
            </p>
          </div>
        </div>

        <section className="bg-white">
          <div className="py-8 px-4 mx-auto max-w-7xl text-center lg:py-16 lg:px-6">
            <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
                Conozca a nuestro equipo de profesionales
              </h2>
              <p className="font-light text-gray-500 sm:text-xl">
                Nuestro equipo está formado por especialistas dedicados al
                cuidado de su vehículo.
              </p>
            </div>
            <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="text-center text-gray-500">
                <img
                  className="mx-auto mb-4 w-36 h-36 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                  alt="Bonnie Avatar"
                />
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
                  <Link to="#">Bonnie Green</Link>
                </h3>
                <p>CEO/Co-founder</p>
              </div>
              <div className="text-center text-gray-500">
                <img
                  className="mx-auto mb-4 w-36 h-36 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                  alt="Helene Avatar"
                />
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
                  <Link to="#">Helene Engels</Link>
                </h3>
                <p>CTO/Co-founder</p>
              </div>
              <div className="text-center text-gray-500">
                <img
                  className="mx-auto mb-4 w-36 h-36 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  alt="Jese Avatar"
                />
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
                  <Link to="#">Jese Leos</Link>
                </h3>
                <p>SEO & Marketing</p>
              </div>
              <div className="text-center text-gray-500">
                <img
                  className="mx-auto mb-4 w-36 h-36 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                  alt="Joseph Avatar"
                />
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
                  <Link to="#">Joseph Mcfall</Link>
                </h3>
                <p>Sales</p>
              </div>
              <div className="text-center text-gray-500">
                <img
                  className="mx-auto mb-4 w-36 h-36 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
                  alt="Sofia Avatar"
                />
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
                  <Link to="#">Lana Byrd</Link>
                </h3>
                <p>Web Designer</p>
              </div>
              <div className="text-center text-gray-500">
                <img
                  className="mx-auto mb-4 w-36 h-36 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png"
                  alt="Leslie Avatar"
                />
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
                  <Link to="#">Leslie Livingston</Link>
                </h3>
                <p>Graphic Designer</p>
              </div>
              <div className="text-center text-gray-500">
                <img
                  className="mx-auto mb-4 w-36 h-36 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                  alt="Michael Avatar"
                />
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
                  <Link to="#">Michael Gough</Link>
                </h3>
                <p>React Developer</p>
              </div>
              <div className="text-center text-gray-500">
                <img
                  className="mx-auto mb-4 w-36 h-36 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png"
                  alt="Neil Avatar"
                />
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
                  <Link to="#">Neil Sims</Link>
                </h3>
                <p>Vue.js Developer</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
