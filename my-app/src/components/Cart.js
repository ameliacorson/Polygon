import React from "react";
import RenderCart from "./RenderCart";
import { Link } from "react-router-dom";


export default function Cart(props) {
  return (
    <div className="cart popup">
      <div className="cart-container">
        <button className="close-button" onClick={props.closeMenu}>x</button>
        <RenderCart />
        <Link onClick={props.closeMenu} to="/checkout"><button className="checkout-btn modal-button">Go to checkout</button></Link>
      </div>
    </div>
  );
}
