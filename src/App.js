import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function incrementItem() {
    setCount(count + 1);
  }
  const [counts, setCounts] = useState(250);
  function incrementItems() {
    setCounts(counts + 250);
  }
  const [product, setProduct] = useState([
    {
      id: 1,
      name: "Fixie Bike",
      description: "simple and sleek design",
      inCart: false,
    },
    {
      id: 2,
      name: "Track Bike",
      description: "Meant for going fast",
      inCart: false,
    },
  ]);

  return (
    <Router>
      <Navbar count={count} />
      <switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/Product"
          render={(props) => (
            <Product
              {...props}
              count={count}
              setCount={setCount}
              incrementItem={incrementItem}
              incrementItems={incrementItems}
              product={product}
            />
          )}
        />
        <Route
          exact
          path="/Cart"
          render={(props) => <Cart {...props} counts={counts} />}
        />
      </switch>
    </Router>
  );
}

export default App;
