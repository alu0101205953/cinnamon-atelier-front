import React, { useEffect } from 'react';
import './DownloadMenu.css'; 

const CartaDownload = () => {
  useEffect(() => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1ekdUnthFI5YBke0bl2rGdIuTH3XNK6Ka'; // Reemplaza con tu ID de Google Drive
    link.download = 'menu-cinnamon-atelier.pdf'; // Nombre del archivo descargado
    link.click();
  }, []);

  return (
    <div className="carta-container">
      <div className="funny-text">¡Descarga nuestro delicioso menú!</div>
      <div className="download-info">
        <p>Tu descarga debería comenzar automáticamente. Si no es así, haz clic en el botón de abajo.</p>
      </div>
      <div>
        <a href="https://drive.google.com/uc?export=download&id=1ekdUnthFI5YBke0bl2rGdIuTH3XNK6Ka" className="download-button">
          Descargar Menú
        </a>
      </div>
    </div>
  );
};

export default CartaDownload;
