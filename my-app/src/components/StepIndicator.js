import React from "react";
import { NavLink } from "react-router-dom";

export default function StepIndicator() {
  // const steps = [
  //   {
  //     path: "/checkout/cart",
  //     name: "Cart",
  //     key: 1,
  //   },
  //   {
  //     path: "/checkout/payment",
  //     name: "Payment",
  //     key: 2,
  //   },
  //   {
  //     path: "/checkout/confirm",
  //     name: "Confirm",
  //     key: 3,
  //   },
  // ];

  function handleStop(e) {
    e.preventDefault();
  }

  return (
    <div className="stepIndicator">
            <div className="dot-label" >
              <NavLink
                to="/checkout/cart"
                onClick={handleStop}
              ></NavLink>
              <p>Cart</p>
              
            </div>
            <hr />
            <div className="dot-label" >
              <NavLink
                to="/checkout/payment"
                onClick={handleStop}
              ></NavLink>
              <p>Payment</p>
              
            </div>
            <hr />
            <div className="dot-label" >
              <NavLink
                to="/checkout/confirm"
                onClick={handleStop}
              ></NavLink>
              <p>Confirm</p>
              
            </div>
            <hr />
    </div>
  );
}
