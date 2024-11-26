import React, { useEffect, useState } from "react";
import Product from "./Product";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch desde la base de datos
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:5000/api/images");
      const data = await response.json();
      setProducts(data); // Establecer los productos (imágenes) obtenidos de la base de datos
    };

    fetchProducts();
  }, []);

  return (
    <main>
      {products.map((product, index) => (
        <Product
          key={index}
          title={product.title}
          description={product.description}
          image={`http://localhost:5000${product.url}`} // Usar la URL obtenida desde la base de datos
        />
      ))}
    </main>
  );
};

export default ProductList;
