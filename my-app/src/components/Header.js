import React from "react";
import Logo from "../img/polygonlogo.png"

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <img className="logo-img" src={Logo} alt="Polygon Cafe Logo"/><br></br>
        <button className="CTA-btn" >Order Now</button>
      </div>
    </header>
  );
}
