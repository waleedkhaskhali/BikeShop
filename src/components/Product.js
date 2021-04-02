import "./product.css";
import React, { Component } from "react";

export default function Product({ count, incrementItem, incrementItems }) {
  return (
    <div>
      <section className="product-container">
        <div className="image-container">
          <img
            className="product-image"
            src="https://i.pinimg.com/originals/c4/9d/16/c49d16317c5e577ac701b5aa85a15f2a.jpg"
            alt=""
          ></img>
        </div>
        <div className="product">
          <h1 className="product-name">Fixed Gear Bike</h1>
          <hr></hr>
          <h2 className="price-tag">29.99</h2>
          <p className="product-description">
            Our New Limited Time Fixies available Now{count}
          </p>
          <button onClick={(incrementItem, incrementItems)}>Add To Cart</button>
        </div>
      </section>
      <footer></footer>
    </div>
  );
}
