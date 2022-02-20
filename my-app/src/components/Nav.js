import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {

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
            <Link onClick={toggle} to="/"> Home </Link>
          </li>
          <li className="nav-item">
            <Link onClick={toggle} to="/about">About</Link>
          </li>
          <li className="nav-item">
            {/* <Link to="/menu">Menu</Link> */}
          </li>
          <li className="nav-item">
            {/* <Link to="/order">Order Online</Link> */}
          </li>
        </ul>
        
      </nav>
    </div>
  );
}
