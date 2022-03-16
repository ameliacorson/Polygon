import React from "react";
import { Carousel } from "react-bootstrap";
import sushiImg from "../img/sushi platter.jpeg";
import riceImg from "../img/rice.jpeg"
import sushiRollImg from "../img/sushi-roll-img.jpeg"
import friedRiceImg from "../img/fried-rice-img.jpeg"
import sushiPlate from "../img/sushiPlate.jpeg"

export default function Home() {
  return (
    <div className="home">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sushiImg}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={riceImg}
            alt=" slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sushiRollImg}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={friedRiceImg}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sushiPlate}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="container">
        <h2> Chicago's Best Thai</h2>

        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
        <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}
