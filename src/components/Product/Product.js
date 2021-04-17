import "./product.css";
import React, { Component } from "react";
import Products from "./Products/Products";

export default function Product({ count, incrementItem, product }) {
  return (
    <div>
      {product.map((product) => (
        <Products key={product.id} product={product}></Products>
      ))}
    </div>
  );
}
