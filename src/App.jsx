import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import Parallax from "./components/Parallax";
import ImageSlider from "./components/ImageSlider";
import ImageUpload from "./components/ImageForm";
import OrderForm from "./components/OrderForm";
import OrderList from "./components/OrderList";
import CartaDownload from "./components/DownloadMenu";
import NotFound from "./components/404"; // Importamos directamente el componente NotFound

const Inicio = () => (
  <div>
    <ImageSlider />
    <ProductList />
    <Parallax />
  </div>
);

const Novedades = () => (
  <div>
    <h1>Bienvenido a Novedades</h1>
  </div>
);

const Carta = () => (
  <div>
    <CartaDownload />
  </div>
);

const Pedidos = () => (
  <div>
    <OrderForm />
  </div>
);

const Pendientes = () => (
  <div>
    <OrderList />
  </div>
);

const Upload = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    // Implementa lógica para redirigir si es necesario.
    // Por ejemplo: <Navigate to="/login" />;
    return <div>Por favor, inicia sesión para acceder.</div>;
  }

  return (
    <div>
      <ImageUpload />
    </div>
  );
};

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/novedades" element={<Novedades />} />
      <Route path="/carta" element={<Carta />} />
      <Route path="/pedidos" element={<Pedidos />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/pendientes" element={<Pendientes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
