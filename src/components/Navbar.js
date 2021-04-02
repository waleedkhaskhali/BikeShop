import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Product({ count, setCount }) {
  const [navLinkOpen, navLinkToggle] = useState(false);

  const handleNavLinksToggle = () => {
    navLinkToggle(!navLinkOpen);
  };

  const renderClasses = () => {
    let classes = "nav";

    if (navLinkOpen) {
      classes += " active";
    }
    return classes;
  };
  const closeNav = () => {
    let close = navLinkOpen;

    if (navLinkOpen) {
      handleNavLinksToggle();
    }
  };
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <h1 className="logo">KASKALI</h1>
          <ul className={renderClasses()}>
            <li className="nav-item">
              <Link onClick={closeNav} to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={closeNav} to="/Product" className="nav-links">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={closeNav} to="/Cart" className="nav-links">
                Cart {count}
              </Link>
            </li>
          </ul>
          <div onClick={handleNavLinksToggle} className="hamburger-toggle">
            <i className="fas fa-bars  fa-lg"></i>
          </div>
        </div>
      </nav>
    </div>
  );
}
