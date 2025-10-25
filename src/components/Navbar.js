import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../images/logo-cadu.png";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Defina todas as classes em uma função
  const getLinkClasses = ({ isCurrent, isPartiallyCurrent, href }) => {
    // Classes padrão INATIVAS
    const defaultClasses =
      "block py-2 px-3 text-gray-900 rounded-sm md:border-0 md:hover:text-blue-700 md:p-0 :bg-transparent";

    // Classes ATIVAS (aplica a cor azul)
    const activeClasses =
      "text-white bg-blue-700 md:bg-transparent md:text-blue-700";

    // Lógica para links (Home é o único que usa isCurrent para garantir que não fique ativo em subpáginas)
    const isActive = href === "/" ? isCurrent : isPartiallyCurrent;

    return {
      className: isActive
        ? `${defaultClasses} ${activeClasses}`
        : defaultClasses,
    };
  };

  return (
    <nav className="bg-white border-gray-200 border border-b-gray-300">
      <div className="max-w-6xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-20" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Cadu Taller
          </span>
        </Link>
        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                to="/"
                getProps={getLinkClasses}
                className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 "
                aria-current="page"
              >
                Comenzar
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                getProps={getLinkClasses}
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 :bg-transparent"
              >
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                getProps={getLinkClasses}
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 :bg-transparent"
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                to="/pre-itv"
                getProps={getLinkClasses}
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 :bg-transparent"
              >
                Pre-Itv
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                getProps={getLinkClasses}
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 :bg-transparent"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
