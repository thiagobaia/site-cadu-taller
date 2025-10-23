import React, { useState, useEffect } from "react";

export const ContentCarousel = ({ children, interval = 5000 }) => {
  const slidesArray = React.Children.toArray(children);
  const totalSlides = slidesArray.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (totalSlides < 2) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, interval);

    return () => clearInterval(timer);
  }, [totalSlides, interval]);

  if (totalSlides === 0) {
    return (
      <div className="p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-lg w-full mt-4 shadow-md">
        Nenhum conteúdo (slides) fornecido para o ContentCarousel.
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="w-full ">
        {slidesArray.map((slide, index) => (
          <div
            key={slide.key || index}
            className={`w-full transition-all duration-300 ${
              index === currentIndex ? "block" : "hidden"
            }`}
            aria-hidden={index !== currentIndex}
          >
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentCarousel;
