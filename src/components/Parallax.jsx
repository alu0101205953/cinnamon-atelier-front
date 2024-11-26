import React, { useState, useEffect } from "react";
import "./Parallax.css";

const Parallax = () => {
  const [isInView, setIsInView] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Crear el observador de intersección
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Activar la animación cuando el componente entra en la vista
        } else {
          setIsInView(false); // Desactivar la animación cuando el componente sale de la vista
        }
      },
      {
        threshold: 0.1, // El 10% del componente debe ser visible para activarse
      }
    );

    const parallaxSection = document.querySelector(".parallax-section");
    observer.observe(parallaxSection); // Observar el componente del parallax

    // Limpiar el observador al desmontar el componente
    return () => observer.disconnect();
  }, []);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Animación de escala de la imagen
  const imageScale = 3 - scrollY * 0.0008; // Ajusta la velocidad de la animación
  const textOpacity = Math.min(scrollY * 0.002, 1); // El texto desaparecerá lentamente

  return (
    <>
      {/* Primera sección de parallax */}
      <section className={`parallax-section ${isInView ? "animate" : ""}`}>
        <div
          className="parallax-background"
          style={{
            backgroundImage: "url('/img/cake.png')", // Imagen de fondo
            transform: `scale(${Math.max(imageScale, 0.5)})`, // Escala de la imagen
          }}
        ></div>
        <div className="parallax-content" style={{ opacity: textOpacity }}>
          <h2>Deliciosos postres</h2>
          <p>Explora nuestros productos irresistibles</p>
        </div>
      </section>

      {/* Segunda sección de parallax */}
      <section className={`parallax-section ${isInView ? "animate" : ""}`}>
        <div
          className="parallax-background"
          style={{
            backgroundImage: "url('/img/cake2.png')", // Nueva imagen
            transform: `scale(${Math.max(imageScale, 0.5)})`, // Escala de la imagen
          }}
        ></div>
        <div className="parallax-content" style={{ opacity: textOpacity }}>
          <h2>Explora nuevas opciones</h2>
          <p>Descubre lo que tenemos para ti</p>
        </div>
      </section>
    </>
  );
};

export default Parallax;
