import React from "react";
import "./Footer.css"; 

const Footer = () => {
    return (
        <footer className="footer">
        {/* Sección izquierda: Contacto */}
        <div className="footer-section contact">
            <h3>Contacto</h3>
            <ul>
            <li><a href="https://https://www.instagram.com/thecinnamonatelier/.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=61558523402630" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Whatsapp</a></li>
            <li><a href="mailto:thecinnamonatelier@gmail.com" className="footer-link">Gmail</a></li>
            <li><a href="tel:822716158" className="footer-link">Teléfono</a></li>
            </ul>
        </div>

        {/* Sección central: Dirección y mapa */}
        <div className="footer-section address">
            <h3>Dirección</h3>
            <p>Avenida República de Venezuela nº 17, local 3, Garachico</p>
            <div className="map">
            <iframe
                title="Ubicación Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.5623469919915!2d-16.769688823713295!3d28.372078395859003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6a6286dd73be93%3A0x273288e8dbe9635d!2sAv.%20Rep%C3%BAblica%20de%20Venezuela%2C%2017%2C%20local%203%2C%2038450%20Garachico%2C%20Santa%20Cruz%20de%20Tenerife!5e0!3m2!1ses!2ses!4v1732443688231!5m2!1ses!2ses"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
            </div>
        </div>

        {/* Sección derecha: Horario */}
        <div className="footer-section schedule">
            <h3>Horario</h3>
            <p>Viernes - Martes: 8:30 AM - 6:00 PM</p>
            <p>Miércoles y Jueves: Cerrado</p>
        </div>
        </footer>
    );
};

export default Footer;
