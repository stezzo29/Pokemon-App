import React from "react";
import { Link } from "react-router-dom";
import logoImage from "./poke-removebg-preview.png";
import "./Logo.css";

function Logo() {
  return (
    <Link to="/main">
      <img src={logoImage} alt="Logo" className="custom-logo" />
    </Link>
  );
}

export default Logo;