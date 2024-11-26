import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import Parallax from "./components/Parallax";
import ImageSlider from "./components/ImageSlider";
import ImageUpload from "./components/ImageForm";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm"

const Inicio = () => {
  return (
    <div>
      <ImageSlider />
      <ProductList />
      <Parallax />
    </div>
  );
};

const Novedades = () => {
  return (
    <div>
      <h1>Bienvenido a Novedades</h1>
    </div>
  );
};

const Register = () => {
  return (
    <div>
      <RegisterForm/>
    </div>
  );
};

const Login = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

const Upload = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    //return <Navigate to="/login" />;
  }


  return (
    <div>
      <ImageUpload />
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/novedades" element={<Novedades />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
