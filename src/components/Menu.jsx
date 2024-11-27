import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Importa useLocation
import "./Menu.css";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const location = useLocation(); // Hook para obtener la ubicación actual

    // Función para alternar el estado del menú
    const toggleMenu = () => {
        setIsOpen((prev) => !prev); // Alterna el estado del menú
    };

    // Cierra el menú si el clic ocurre fuera de él
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Cerrar el menú automáticamente al cambiar de página
    useEffect(() => {
        setIsOpen(false); // Cierra el menú cuando la ubicación cambia
    }, [location]); // Depende de location, se ejecutará cada vez que cambie la ruta

    return (
        <div className="menu-container" ref={menuRef}>
            {/* Botón para abrir/cerrar el menú */}
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
                <Link to="/pedidos">¡Haz tu pedido!</Link> {/* Enlace a la página de pedidos */}
            </div>
        </div>
    );
};

export default Menu;
