import React from "react";
import RenderCart from "./RenderCart";
import { Link } from "react-router-dom";

import { useCart } from "../Context/cartProvider";


export default function Cart(props) {

  const { cartItems } = useCart();

  return (
    <div className="cart popup">
      <div className="cart-container">
        <h3>Your Cart</h3>
        <button className="close-button" onClick={props.closeMenu}>x</button>
        <RenderCart />
        {cartItems.length > 0 && <Link onClick={props.closeMenu} to="/checkout"><button className="checkout-btn modal-button">Go to checkout</button></Link>}
      </div>
    </div>
  );
}
