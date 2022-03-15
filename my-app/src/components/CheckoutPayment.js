import React from "react";
import { Link } from "react-router-dom";

export default function CheckoutPayment() {
  return (
    <div>
      <form></form>
      <div className="btn-container">
        <Link to="/checkout/cart">
          <button className="dot-nav">Back</button>
        </Link>
        <Link to="/checkout/confirm">
          <button className="dot-nav">Next</button>
        </Link>
      </div>
    </div>
  );
}
