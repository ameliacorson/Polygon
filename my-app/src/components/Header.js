import React from "react";


export default function Header() {
  return (
    <header>
      <div class="menu">
        <button class="nav-toggle" aria-label="toggle navigation">
          <span class="hamburger"></span>
        </button>
      </div>
      <nav id="nav">
        <ul class="nav-list">
          <li class="nav-item">
            <a href="" class="nav-link">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link">
              Our Story
            </a>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link">
              Menu
            </a>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link">
              Order Online
            </a>
          </li>
        </ul>
      </nav>
      <div class="header-container">
        <h1>
          Polygon <span class="title-accent"> Cafe</span>
        </h1>
        <svg class="svg-1">
          <polygon
            points="50 3,92 28, 92 78, 50 100,8 75,8 25"
            stroke-width="1"
          />
        </svg>
      </div>
    </header>
  );
}
