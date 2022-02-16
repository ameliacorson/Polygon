import React from "react";
import Logo from "../img/polygonlogo.png"

export default function Header() {
  return (
    <header>
      <div class="header-container">
        <h1>
          <img className="logo-img" src={Logo}/>
        </h1>
      </div>
    </header>
  );
}
