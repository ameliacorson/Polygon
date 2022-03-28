import React from 'react'

import { Carousel } from "react-bootstrap";
import sushiImg from "../img/sushi platter.jpeg";
import riceImg from "../img/rice.jpeg"
import sushiRollImg from "../img/sushi-roll-img.jpeg"
import friedRiceImg from "../img/fried-rice-img.jpeg"
import sushiPlate from "../img/sushiPlate.jpeg"

export default function ImgCarousel() {

  const images = [
    {
      img: sushiImg,
      name: "Platter of assorted sushi",
      key: 1,
    },
    {
      img: riceImg,
      name: "Fried Rice",
      key: 2,
    },
    {
      img: sushiRollImg,
      name: "Sushi roll with sauce",
      key: 3,
    },
    {
      img: friedRiceImg,
      name: "Rice dish with side salad",
      key: 4,
    },
    {
      img: sushiPlate,
      name: "Sushi with octopus",
      key: 5,
    }
  ]

  return (
<Carousel fade>
        
      {images.map(image => {
        return (
        <Carousel.Item key={image.key}>
          <img
            className="d-block w-100"
            src={image.img}
            alt={image.name}
          />
        </Carousel.Item>)
      })}
        
  </Carousel>
        
        
        /* <Carousel.Item>
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
    </Carousel.Item>*/

  )
}

