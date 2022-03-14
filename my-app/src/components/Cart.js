import React from "react";
import RenderCart from "./RenderCart";
import { Link } from "react-router-dom";
import CloseButton from "react-bootstrap/CloseButton";

import { useCart } from "../Context/cartProvider";

export default function Cart(props) {
  const { cartItems } = useCart();

  return (
    <div className="cart popup">
      <div className="cart-container">
        <div className="cart-container-content">
          <div className="cart-header">
            <h3>Your Cart</h3>
            <CloseButton onClick={props.closeMenu}></CloseButton>
          </div>
          <RenderCart />
        
        </div>
        {cartItems.length > 0 && (
            <Link onClick={props.closeMenu} to="/checkout"><button className="checkout-btn modal-button">Go to checkout</button></Link>
          )}
      </div>
    </div>
  );
}
