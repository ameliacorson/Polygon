import React from "react";
import Logo from "../img/Capture-removebg-preview (1).png"
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header>
      <div className="header-container">
       
        <img className="logo-img" src={Logo} alt="Polygon Cafe Logo"/>
        <Link to="/order"><button className="CTA-btn">order now</button></Link>
      </div>
    </header>
  );
}
