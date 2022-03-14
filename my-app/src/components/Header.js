import React from "react";
import Logo from "../img/polygonlogo.png"
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header>
      <div className="header-container">
        <img className="logo-img" src={Logo} alt="Polygon Cafe Logo"/><br></br>

        <Link to="/order"><button className="CTA-btn" >Order Now</button></Link>
        
      </div>
    </header>
  );
}
