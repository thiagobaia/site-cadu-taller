import React from "react";
import { Carousel } from "flowbite-react";

const Carrousel = ({ children }) => {
  return (
    <div className="flex w-full h-auto">
      <Carousel
        leftControl={false}
        rightControl={false}
        indicators={false}
        slideInterval={1500}
      >
        {children}
      </Carousel>
    </div>
  );
};

export default Carrousel;
