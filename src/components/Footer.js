import React from "react";
import logo from "../images/logo-cadu.png";
import { Link } from "gatsby";

export const Footer = () => {
  return (
    <footer className="relative bg-blue-700 pt-16 pb-6 lg:pt-20 lg:pb-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <span className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-600 rounded-full opacity-50 transform translate-x-1/2 translate-y-1/2"></span>
        <span className="absolute top-1/4 right-1/4 w-40 h-40 bg-blue-600 rounded-full opacity-50 transform -translate-x-1/2 -translate-y-1/2"></span>
        <span className="absolute -top-10 -right-10 w-48 h-48 bg-blue-600 rounded-full opacity-50"></span>
      </div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        {" "}
        <div className="flex flex-wrap -mx-4 justify-between">
          <div className="w-full lg:w-4/12 px-4 mb-8 lg:mb-0">
            <Link to="/" className="inline-flex items-center mb-6">
              <img src={logo} className="h-20" alt="Flowbite Logo" />

              <span className="text-white text-2xl font-bold">Cadu Taller</span>
            </Link>
            <p className="text-blue-100 text-sm leading-relaxed mb-6 max-w-sm">
              Carrer de Montanejos 83, bajo, 12005 Castellón de la Plana,
              Castellón, Espanha
            </p>
            <div className="flex items-center text-blue-100 text-sm">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              +34 (642) 59 46 89
            </div>
          </div>

          {/* Coluna 2: Pages */}
          <div className="w-full sm:w-1/2 lg:w-2/12 px-4 mb-8 lg:mb-0 lg:flex lg:flex-col lg:items-end">
            <h3 className="text-lg font-semibold text-white mb-6">Pages</h3>
            <ul className="text-blue-100 text-sm space-y-3 lg:flex lg:flex-col lg:justify-end lg:items-end">
              <li>
                <Link to="/" className="hover:text-white">
                  Comenzar
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/pre-itv" className="hover:text-white">
                  Pre-Itv
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 lg:w-2/12 px-4 mb-8 lg:mb-0 lg:flex lg:flex-col lg:items-end">
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="text-blue-100 text-sm space-y-3 lg:flex lg:flex-col lg:justify-end lg:items-end">
              <li>
                <Link to="/saas-development" className="hover:text-white">
                  SaaS Development
                </Link>
              </li>
              <li>
                <Link to="/our-products" className="hover:text-white">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/user-flow" className="hover:text-white">
                  User Flow
                </Link>
              </li>
              <li>
                <Link to="/user-strategy" className="hover:text-white">
                  User Strategy
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 lg:w-2/12 px-4 mb-8 lg:mb-0 lg:flex lg:flex-col lg:items-end">
            <h3 className="text-lg font-semibold text-white mb-6">Pre-Itv</h3>
            <ul className="text-blue-100 text-sm space-y-3 lg:flex lg:flex-col lg:justify-end lg:items-end">
              <li>
                <Link to="/saas-development" className="hover:text-white">
                  SaaS Development
                </Link>
              </li>
              <li>
                <Link to="/our-products" className="hover:text-white">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/user-flow" className="hover:text-white">
                  User Flow
                </Link>
              </li>
              <li>
                <Link to="/user-strategy" className="hover:text-white">
                  User Strategy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
