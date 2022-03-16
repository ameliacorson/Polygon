import React from "react";
import { Outlet } from "react-router-dom";

import StepIndicator from "../components/StepIndicator";

export default function Checkout() {
  document.body.style.overflow = "auto";

  React.useEffect(() => {
    window.scrollTo(0, 0)
 }, []);
 
  return (
    <div className="checkout">
      <div className="container">
        <h3 className="accent-header">Checkout</h3>
        <StepIndicator />
        <Outlet />

          <div className="subtotal-sidebar"></div>
      </div>
    </div>
  );
}
