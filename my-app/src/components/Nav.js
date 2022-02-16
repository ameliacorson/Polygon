import React from "react";

export default function Nav() {

    // navToggle.classList.toggle("open")
    // nav.classList.toggle("open")
    // menu.classList.toggle("open")
    
    const [navState, setNavState] = React.useState("closed")
    
    function toggle() {
        setNavState(prevNavState => prevNavState === "open" ? "closed" : "open")
    }
   
  return (
    <div>
    <div className={`menu ${navState}`}>
        <button className={`nav-toggle ${navState}`}onClick={toggle} aria-label="toggle navigation">
          <span className="hamburger"></span>
        </button>
    </div>
    <nav id="nav"  className={navState}>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="" class="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="" class="nav-link">
            Our Story
          </a>
        </li>
        <li className="nav-item">
          <a href="" class="nav-link">
            Menu
          </a>
        </li>
        <li className="nav-item">
          <a href="" class="nav-link">
            Order Online
          </a>
        </li>
      </ul>
    </nav>
    </div>
  );
}
