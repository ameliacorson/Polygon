import React from "react";
import sushiImg from "../img/sushi platter.jpeg"

export default function Home() {
  return (
    <div className="container">
      <div className="carousel">
        <img className="carousel-item" src={sushiImg} alt="sushi"/>
      </div>
    </div>
  );
}
