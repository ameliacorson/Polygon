import React from "react";
import { Link } from "react-router-dom";

export default function CheckoutConfirm() {
  return (
    <div>
      create a state in checkout that will list all the form info here
      <div className="btn-container">
        <Link to="/checkout/payment"><button className="dot-nav">Back</button></Link>
      </div>
   
    </div>
  );
}
