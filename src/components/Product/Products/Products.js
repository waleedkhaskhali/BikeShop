import React from "react";

function Products({ count, incrementItem, product }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <button>CLICK</button>
    </div>
  );
}

export default Products;
