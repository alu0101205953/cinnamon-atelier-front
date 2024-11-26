import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

const ImageSlider = () => {
  const images = [
    { 
      src: '/img/cake2.png', 
      text: (
        <>
          <h1>Explora nuestros deliciosos postres.</h1>
          <h2>Una experiencia única para tu paladar.</h2>
        </>
      )
    },
    { 
      src: '/img/cake3.png', 
      text: (
        <>
          <h1>La mejor selección de pasteles para ti.</h1>
          <h2>Hechos con ingredientes frescos y naturales.</h2>
        </>
      )
    },
    { 
      src: '/img/cake4.png', 
      text: (
        <>
          <h1>Recetas frescas y sabrosas todos los días.</h1>
          <h2>Ven y prueba lo nuevo.</h2>
        </>
      )
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Espera 1 segundo antes de mostrar el texto (el texto aparece después de que la imagen haya cargado)
    const timeout = setTimeout(() => {
      setShowText(true);
    }, 1000); // 1000ms = 1 segundo

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setShowText(false);  // Esconde el texto antes de cambiar la imagen
      setTimeout(() => setShowText(true), 1000);  // Vuelve a mostrarlo tras el cambio de imagen
    }, 5000); // 5000ms = 5 segundos

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [images.length]);

  return (
    <div className="image-slider">
      <div
        className="image-container"
        style={{
          backgroundImage: `url(${images[currentIndex].src})`,
        }}
      >
        <div className={`text-overlay ${showText ? "show" : ""}`}>
          {images[currentIndex].text}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;