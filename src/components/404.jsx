import React from 'react';
import './404.css'; // Importamos los estilos desde un archivo CSS separado

const NotFound = () => (
  <div className="not-found-container">
    <h1>404</h1>
    <p>Lo sentimos, no pudimos encontrar la página que buscas.</p>
    <a href="/" className="back-button">Volver al Inicio</a>
  </div>
);

export default NotFound;
