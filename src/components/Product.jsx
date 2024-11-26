import React from "react";
import "./Product.css";

const Product = ({ title, description, image, reverse }) => {
  return (
    <section className={'product'}>
      <img src={image} alt={title} />
      <div className="description">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default Product;