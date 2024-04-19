import React from "react";
import './productContainer.css'
//tarjetas de productos
const ProductContainer = (props) => {
  return (
    <section className="products_section">
        <h1 className="products_title">productos</h1>
        <div className="products_container">
            {props.children}
        </div>
    </section>
  );
};

export {ProductContainer};//se exporta asi para que los nombres no se cambien
