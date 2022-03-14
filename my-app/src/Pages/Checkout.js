import React from "react";

import RenderCart from "../components/RenderCart";

export default function Checkout() {

  document.body.style.overflow = 'auto'
  
  return (
    <div className="checkout">
      <div className="container">
        <div className="checkout-cart">
          <RenderCart />
        </div>
        <div className="checkout-payment">

        </div>
        <div>
          
        </div>
        <div className="subtotal-sidebar">
          
        </div>
      </div>
    </div>
  );
}
