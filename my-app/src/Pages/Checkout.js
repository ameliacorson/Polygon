import React from "react";

import RenderCart from "../components/RenderCart";

export default function Checkout() {
  document.body.style.overflow = "auto";
  const [checkoutPage, setCheckoutPage] = React.useState("chk-cart");
  console.log(checkoutPage);
  return (
    <div className="checkout">
      <div className="container">
        <h3 className="accent-header">Checkout</h3>
        <div className={`progress-dots ${checkoutPage}`}>
          <div className="dot-and-description">
            <div className="progress-dot dot-cart"></div>
            <p>cart</p>
          </div>
          <div className="dot-and-description">
            <div className="progress-dot dot-payment"></div>
            <p>payment</p>
          </div>
          <div className="dot-and-description">
            <div className="progress-dot dot-confirm"></div>
            <p>confirm</p>
          </div>
        </div>
        <div className="checkout-content">
          {checkoutPage === "chk-cart" && (
            <div className="checkout-cart">
              <h4> Confirm your Cart</h4>
              <RenderCart />
              <button className="checkout-button" onClick={() => setCheckoutPage("chk-payment")}>
                Next
              </button>
            </div>
          )}
          {checkoutPage === "payment" && (
            <div>
              <form></form>
            </div>
          )}
        </div>
        <div className="checkout-payment"></div>
        <div></div>
        <div className="subtotal-sidebar"></div>
      </div>
    </div>
  );
}
