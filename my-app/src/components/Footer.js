import React from "react";
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from 'react-icons/ai'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <a href="https://www.facebook.com/Polygon-Cafe-260970567260627/" ><AiFillFacebook color="white" fontSize="3em" /></a>
          <a href="https://www.twitter.com/" ><AiFillTwitterSquare color="white" fontSize="3em" /></a>
          <a href="https://www.instagram.com/polygoncafe/?hl=en" ><AiFillInstagram color="white" fontSize="3em" /></a>

        </div>
      </div>
    </div>
  );
}
