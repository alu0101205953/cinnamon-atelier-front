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

const Pedidos = () => {
  return (
    <div>
      <OrderForm />
    </div>
  );
};

const Order = () => {
  return (
    <div>
      <OrderList />
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
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/pendientes" element={<Order />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
