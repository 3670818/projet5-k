import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <div className="navbar__logo">
        <img src="../public/logo.png" alt="logo" />
        </div>
      </NavLink>
      <NavLink to="/">
        <a>Accueil</a>
      </NavLink>
      <NavLink to="/about">
        <a>A propos</a>
      </NavLink>
    </nav>
  );
}

export default Navbar;
