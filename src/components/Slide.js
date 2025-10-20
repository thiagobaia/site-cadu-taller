import React, { useState, useEffect, useCallback } from "react";

// Dados das imagens para o carrossel (usando placeholders para garantir o funcionamento)
const slidesData = [
  {
    src: "https://placehold.co/1200x500/1E3A8A/FFFFFF?text=Slide+1",
    alt: "Imagem Ilustrativa 1",
  },
  {
    src: "https://placehold.co/1200x500/059669/FFFFFF?text=Slide+2",
    alt: "Imagem Ilustrativa 2",
  },
  {
    src: "https://placehold.co/1200x500/9D174D/FFFFFF?text=Slide+3",
    alt: "Imagem Ilustrativa 3",
  },
  {
    src: "https://placehold.co/1200x500/F59E0B/FFFFFF?text=Slide+4",
    alt: "Imagem Ilustrativa 4",
  },
  {
    src: "https://placehold.co/1200x500/D97706/FFFFFF?text=Slide+5",
    alt: "Imagem Ilustrativa 5",
  },
];

// O componente principal do carrossel
const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slidesData.length;

  // Função para ir para o próximo slide
  const nextSlide = useCallback(() => {
    const newIndex = (currentIndex + 1) % totalSlides;
    setCurrentIndex(newIndex);
  }, [currentIndex, totalSlides]);

  // Efeito para o auto-play (troca automática a cada 5 segundos)
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 2000);

    // Limpeza do intervalo quando o componente for desmontado ou o índice mudar
    return () => clearInterval(intervalId);
  }, [nextSlide]); // Dependência em nextSlide (que é memorizado via useCallback)

  return (
    <div className="flex justify-center">
      <div
        id="default-carousel"
        className="relative w-full"
        aria-label="Image Slider"
      >
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden md:h-96 lg:h-[600px]">
          {slidesData.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              aria-hidden={index !== currentIndex}
            >
              <img
                src={slide.src}
                className="block w-full h-full object-cover"
                alt={slide.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide;
