import * as React from "react";
import Layout from "../components/Layout";
import { Banner, BannerCollapseButton } from "flowbite-react";
import { HiArrowRight, HiX } from "react-icons/hi";
import { MdPercent } from "react-icons/md";
import { servicesData } from "../data/servicesData";
import jovem from "../images/jovem-mecanico.jpg";
import { Link } from "gatsby";

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
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Banner className="absolute top-36">
        <div className="flex w-full justify-between bg-white/75 p-4">
          <div className="mx-auto flex items-center">
            <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
              <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 p-1 dark:bg-gray-600">
                <MdPercent className="h-4 w-4" />
              </span>
              <span className="[&_p]:inline">
                Obtenga un 5% de descuento&nbsp;
                <Link
                  to="https://w.app/7ptzv3"
                  className="ml-0 flex items-center text-sm font-medium text-cyan-600 hover:underline md:ml-1 md:inline-flex dark:text-cyan-500"
                >
                  Llamar por whatsapp
                  <HiArrowRight className="ml-2" />
                </Link>
              </span>
            </p>
          </div>
          <BannerCollapseButton
            color="gray"
            className="border-0 bg-transparent text-gray-500 dark:text-gray-400"
          >
            <HiX className="h-4 w-4" />
          </BannerCollapseButton>
        </div>
      </Banner>
    </Layout>
  );
};

export default Services;
