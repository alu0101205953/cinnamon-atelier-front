import React, { useState } from "react";
import "./RegisterForm.css";

const RegisterForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Usuario registrado con éxito!");
      } else {
        alert(data.message);
      }
    };
  
    return (
        <form onSubmit={handleSubmit} className="register-form-container">
        <div className="funny-text">Registro</div>
        <input
            type="text"
            className="register-input-field"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <input
            type="password"
            className="register-input-field"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="register-submit-button">Registrar</button>
        </form>      
    );
  };
  
  export default RegisterForm;