import React from "react";
import ImgCarousel from "../components/ImgCarousel";
import { Parallax, Background } from "react-parallax";

import bwrestaurant from "../img/bw-restaurant.jpeg";
import heroThai from "../img/hero-thai.jpeg";

export default function Home() {

  const styles = {backgroundBlendMode: 'darken'}

  return (
    <div className="home">
      <Parallax blur={{ min: -15, max: 0 }} strength={300} bgImage={heroThai}>
        <div className="hero">
          <h2> Chicago's Best Thai</h2>
          </div>
      </Parallax>

      <div className="container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <ImgCarousel />
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
    </div>
  );
}
