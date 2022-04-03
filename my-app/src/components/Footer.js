import React from "react";
import { Parallax } from 'react-parallax'

import footerBackground from '../img/bw-restaurant.jpeg'
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from 'react-icons/ai'
export default function Footer() {
  return (
    <div className="footer">
      <Parallax strength={300} bgImage={footerBackground}>
      <div className="footer-container container">
        <div className="footer-info">
          <a href="https://www.facebook.com/Polygon-Cafe-260970567260627/" ><AiFillFacebook color="white" fontSize="3em" /></a>
          <a href="https://www.twitter.com/" ><AiFillTwitterSquare color="white" fontSize="3em" /></a>
          <a href="https://www.instagram.com/polygoncafe/?hl=en" ><AiFillInstagram color="white" fontSize="3em" /></a>

        </div>
      </div>
      </Parallax>
    </div>
  );
}
