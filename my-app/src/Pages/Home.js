import React from "react";
import ImgCarousel from "../components/ImgCarousel";
import { Parallax } from "react-parallax";

import { Link } from "react-router-dom";
import heroThai from "../img/hero-thai.jpeg";
import Map from "../components/Map";

export default function Home() {
  return (
    <div className="home">
      <Parallax strength={300} bgImage={heroThai}>
        <div className="hero">
          <h2> Chicago's Best Thai</h2>
        </div>
      </Parallax>

      <div className="container">
        <h2>Welcome to Polygon Cafe</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="CTA-container">
          <ImgCarousel />

          <Link className="btn-link" to="/order">
            <button className="CTA-btn">order now </button>
          </Link>
        </div>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
      <div className="map-container container">
        <Map />
      </div>
      <section className="about container">
        <div className="about-details">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            impedit cumque, architecto nihil rem omnis veniam, quidem officia at
            accusamus mollitia voluptate fugiat distinctio, exercitationem
            maxime non dicta sunt placeat.
          </p>
        </div>
        <div className="about-details">
          <h2>Hours</h2>
          <h4>Open Daily</h4>
          <p className="hours">11:30am - 9:30pm</p>
        </div>
      </section>
    </div>
  );
}
