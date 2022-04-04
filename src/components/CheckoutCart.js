import React from "react";
import RenderCart from "./RenderCart";
import { Link } from "react-router-dom";
import { useCart } from "../Context/cartProvider";

export default function CheckoutCart() {

  const {cartItems} = useCart()

  function closeCart(){
    console.log("")
  }

  return (
    <div>
      {cartItems.length ? <>
      <RenderCart closeCart={closeCart}/>
      <div className="btn-container">
        <Link to="/checkout/payment"><button className="dot-nav">Next</button></Link>
      </div>
      </>
    :
    <>
    <h3>Nothing in Cart</h3>  
    <p>You can place your order <Link to="/order">here</Link></p>
    </>
    }
    </div>
    
  );
}
