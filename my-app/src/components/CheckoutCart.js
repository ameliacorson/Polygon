import React from "react";
import RenderCart from "./RenderCart";
import { Link } from "react-router-dom";

export default function CheckoutCart() {
  return (
    <div>
      <RenderCart />
      <div className="btn-container">
        <Link to="/checkout/payment"><button className="dot-nav">Next</button></Link>
      </div>
    </div>
  );
}
