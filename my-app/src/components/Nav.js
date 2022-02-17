import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  // navToggle.classList.toggle("open")
  // nav.classList.toggle("open")
  // menu.classList.toggle("open")

  const [navState, setNavState] = React.useState("closed");

  function toggle() {
    setNavState((prevNavState) =>
      prevNavState === "open" ? "closed" : "open"
    );
  }

  return (
    <div>
      <div className={`menu ${navState}`}>
        <button
          className={`nav-toggle ${navState}`}
          onClick={toggle}
          aria-label="toggle navigation"
        >
          <span className="hamburger"></span>
        </button>
      </div>
      <nav id="nav" className={navState}>
        <ul className="nav-list">
          <li className="nav-item">
            <link to="/"> Home </link>
          </li>
          <li className="nav-item">
            <link to="/about">About</link>
          </li>
          <li className="nav-item">
          <link to="/menu">Menu</link>
          </li>
          <li className="nav-item">
          <link to="/order">Order Online</link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
