import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div>
      <section className="main">
        <div className="adill">
          <h1 className="egg">KASKALI CUSTOMS </h1>
          <p>samething</p>
          <Link className="shop-button" to="/Product">
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
