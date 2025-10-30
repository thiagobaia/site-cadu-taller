import * as React from "react";
import Layout from "../components/Layout";
import { servicesData } from "../data/servicesData";
import jovem from "../images/jovem-mecanico.webp";
import { Link } from "gatsby";
import itvCar from "../images/revisión-pre-itv.webp";

const Services = () => {
  return (
    <Layout>
      <div
        className={
          "py-5 flex justify-center items-center w-full overflow-x-hidden"
        }
      >
        <img
          className="object-cover w-full max-h-80 relative"
          src={jovem}
          alt="jovem mecanico"
        />
        <div className="absolute bg-black/55 w-full py-5 md:py-11">
          <p className="text-2xl text-white text-center font-bold md:text-3xl ">
            Principales Servicios
          </p>
        </div>
      </div>

      <section className="bg-transparent px-4 py-8 antialiased">
        <div className="mx-auto grid max-w-6xl  rounded-lg bg-gray-50 p-4 md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16">
          <div className="lg:col-span-5 lg:mt-0">
            <Link to="/contact">
              <img
                className="mb-4 h-auto w-full sm:h-96 sm:w-96 md:h-full md:w-full"
                src={itvCar}
                alt="peripherals"
              />
            </Link>
          </div>
          <div className="me-auto place-self-center lg:col-span-7">
            <h1 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl">
              Póngase en contacto para solicitar su presupuesto.
            </h1>
            <p className="mb-6 text-gray-500">
              Estamos listos para servirle con eficiencia y calidad.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
            >
              {" "}
              Solicitar presupuesto{" "}
            </Link>
          </div>
        </div>
      </section>

      <div
        className="max-w-6xl mx-auto lg:flex-wrap lg:flex mt-5 lg:my-10 lg:gap-5  bg-white border-none shadow-none"
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-easing="ease-in-sine"
      >
        {servicesData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col-reverse items-center bg-white border border-gray-200 w-full gap-y-5 md:flex-row lg:max-w-[566px] hover:bg-gray-100"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={item.image}
              alt={item.title}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {item.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Services;
