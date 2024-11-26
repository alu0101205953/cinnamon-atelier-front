import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
  
      if (response.ok) {
        localStorage.setItem("token", data.token); // Guarda el token en el localStorage
        alert("Login exitoso");
        window.location.href = "/upload"; // Redirige al formulario de carga
      } else {
        alert(data.message);
      }
    };
  
    return (
        <form onSubmit={handleSubmit} className="login-form-container">
        <div className="funny-text">Inicio de Sesión</div>
        <input
          type="text"
          className="login-input-field"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="login-input-field"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-submit-button">Iniciar sesión</button>
      </form>
      
    );
  };
  
  export default LoginForm;