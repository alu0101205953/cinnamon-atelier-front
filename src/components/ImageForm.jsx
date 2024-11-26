import React, { useState } from "react";
import './ImageForm.css'; // Asegúrate de importar el archivo CSS

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Archivo seleccionado: ", file.name);
      setImage(file);
    } else {
      console.log("No se seleccionó ningún archivo.");
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token"); // Recupera el token del localStorage
    if (!token) {
      alert("No estás autorizado para subir imágenes. Por favor, inicia sesión.");
      return;
    }

    if (!image) {
      alert("Por favor, selecciona una imagen para subir.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    try {
      const response = await fetch("http://localhost:5000/api/images", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // Incluye el token en el encabezado
        },
        body: formData,
      });

      if (response.ok) {
        alert("Imagen subida con éxito!");
      } else {
        const errorData = await response.json();
        alert(`Error al subir la imagen: ${errorData.message}`);
      }
    } catch (error) {
      alert("Error al comunicarse con el servidor.");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="image-upload-form">
   <div className="funny-text">
     Has accedido como administrador. Espero que seas Laura, Iris o al menos alguien que sabe lo que está haciendo. Mucho cuidadito, no me la líes :)
   </div>
   <input
     type="text"
     placeholder="Título"
     value={title}
     onChange={handleTitleChange}
     className="input-field"
   />
   <input
     type="text"
     placeholder="Descripción"
     value={description}
     onChange={handleDescriptionChange}
     className="input-field"
   />
   <input
     type="file"
     onChange={handleImageChange}
     className="file-input"
   />
   <div className="last-text">
     <h3>
       ¿Has terminado? Revisa que no falte nada. Título, texto para el artículo, ¿has subido la foto?... Bueno, pues si está todo pulsa Terminar.
     </h3>
   </div>
   <button type="submit" className="submit-button">
     Terminar
   </button>
 </form>

  );
};

export default ImageUpload;
