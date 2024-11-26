import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom"; // Importa Link de react-router-dom
import "./Menu.css";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev); // Alterna el estado del menú
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false); // Cierra el menú si el clic ocurre fuera de él
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="menu-container" ref={menuRef}>
            {/* Botón del rodillo */}
            <button id="menu-button" onClick={toggleMenu}>
                <img
                    src="img/rolling-pin.png"
                    alt="Menu"
                    className={`rolling-pin ${isOpen ? "rotating" : ""}`}
                />
            </button>

            {/* Menú desplegable */}
            <div className={`menu ${isOpen ? "open" : ""}`}>
                <Link to="/">Inicio</Link> {/* Enlace a la página de inicio */}
                <Link to="/novedades">Novedades</Link> {/* Enlace a la página de novedades */}
                <Link to="/carta">Carta</Link> {/* Enlace a la página de carta */}
                <Link to="/recetas">Recetas</Link> {/* Enlace a la página de recetas */}
                <Link to="/contacto">Contacto</Link> {/* Enlace a la página de contacto */}
            </div>
        </div>
    );
};

export default Menu;
