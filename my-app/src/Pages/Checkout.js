import React from "react";

import RenderCart from "../components/RenderCart";

export default function Checkout() {
  return (
    <div className="checkout">
      <div className="container">
        <div className="checkout-cart">
          <RenderCart />
        </div>
        <div className="subtotal-sidebar">
          
        </div>
      </div>
    </div>
  );
}
