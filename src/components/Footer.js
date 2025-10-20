import React from "react";
import logo from "../images/logo-cadu.png";
import { Link } from "gatsby"; // Importe Link do Gatsby para navegação interna

export const Footer = () => {
  return (
    <footer className="relative bg-blue-700 pt-16 pb-6 lg:pt-20 lg:pb-10 overflow-hidden">
      {/* Círculos de fundo (para o efeito visual da imagem) */}
      <div className="absolute top-0 left-0 w-full h-full">
        <span className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-600 rounded-full opacity-50 transform translate-x-1/2 translate-y-1/2"></span>
        <span className="absolute top-1/4 right-1/4 w-40 h-40 bg-blue-600 rounded-full opacity-50 transform -translate-x-1/2 -translate-y-1/2"></span>
        <span className="absolute -top-10 -right-10 w-48 h-48 bg-blue-600 rounded-full opacity-50"></span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {" "}
        {/* Adicionado relative z-10 para garantir que o conteúdo fique acima dos círculos */}
        <div className="flex flex-wrap -mx-4 justify-between">
          {/* Coluna 1: Logo e Descrição */}
          <div className="w-full lg:w-4/12 px-4 mb-8 lg:mb-0">
            <Link to="/" className="inline-flex items-center mb-6">
              {/* Substitua pelo seu logo se tiver um SVG ou imagem */}
              <img src={logo} className="h-20" alt="Flowbite Logo" />

              <span className="text-white text-2xl font-bold">Cadu Taller</span>
            </Link>
            <p className="text-blue-100 text-sm leading-relaxed mb-6 max-w-sm">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              totam rem aperiam.
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
              +012 (345) 678 99
            </div>
          </div>

          {/* Coluna 2: Resources */}
          <div className="w-full sm:w-1/2 lg:w-2/12 px-4 mb-8 lg:mb-0">
            <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
            <ul className="text-blue-100 text-sm space-y-3">
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

          {/* Coluna 3: Company */}
          <div className="w-full sm:w-1/2 lg:w-2/12 px-4 mb-8 lg:mb-0">
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="text-blue-100 text-sm space-y-3">
              <li>
                <Link to="/about" className="hover:text-white">
                  About TailGrids
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact & Support
                </Link>
              </li>
              <li>
                <Link to="/success-history" className="hover:text-white">
                  Success History
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white">
                  Setting & Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Quick Links */}
          <div className="w-full sm:w-1/2 lg:w-2/12 px-4 mb-8 lg:mb-0">
            <h3 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="text-blue-100 text-sm space-y-3">
              <li>
                <Link to="/premium-support" className="hover:text-white">
                  Premium Support
                </Link>
              </li>
              <li>
                <Link to="/our-services" className="hover:text-white">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/our-team" className="hover:text-white">
                  Know Our Team
                </Link>
              </li>
              <li>
                <Link to="/download-app" className="hover:text-white">
                  Download App
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
