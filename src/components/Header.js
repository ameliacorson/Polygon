import React from "react";
import Logo from "../img/Capture-removebg-preview (1).png"
import Nav from "./Nav";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <img className="logo-img" src={Logo} alt="Polygon Cafe Logo"/>
        <Nav />
      </div>
    </header>
  );
}
