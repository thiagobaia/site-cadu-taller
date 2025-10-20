import React from "react";
import "../styles/loader.css";

import Pneu from "../images/pneu-animado.gif";

const Loader = () => {
  return (
    <div className="loader">
      <div className="svg-wrapper">
        <img className="h-36 lg:h-96" src={Pneu} alt="Loading" />

        <div className="loading-text text-gray-900">Loading...</div>
      </div>
    </div>
  );
};

export default Loader;
