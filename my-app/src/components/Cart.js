import React from "react";
import RenderCart from "./RenderCart";
import { Link } from "react-router-dom";


export default function Cart(props) {
  return (
    <div className="cart">
      <div className="cart-container">
        <button onClick={props.closeMenu}>x</button>
        <RenderCart />
        <Link onClick={props.closeMenu} to="/checkout"><button className="modal-button">Go to checkout</button></Link>
      </div>
    </div>
  );
}
