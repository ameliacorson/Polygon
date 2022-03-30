import React from "react";
import { Routes, Route } from "react-router-dom";
import PaymentContextProvider from "../Context/paymentProvider";

import StepIndicator from "../components/StepIndicator";

import CheckoutCart from "../components/CheckoutCart";
import CheckoutPayment from "../components/CheckoutPayment";
import CheckoutConfirm from "../components/CheckoutConfirm";

export default function Checkout() {
  const [ orderSubmitted, setOrderSubmitted ] = React.useState(false)
  document.body.style.overflow = "auto";

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function submitOrder () {
    setOrderSubmitted(true)
  }

  return (
    <div className="checkout">
      <div className="container">
        <h3 className="accent-header">Checkout</h3>

        {!orderSubmitted && <StepIndicator />}
        <PaymentContextProvider>
        <Routes>
          <Route path="cart" element={<CheckoutCart />} />
          <Route path="payment" element={<CheckoutPayment 
          />} />
          <Route path="confirm" element={<CheckoutConfirm submitOrder={submitOrder} orderSubmitted={orderSubmitted}/>} />
        </Routes>
        </PaymentContextProvider>

        <div className="subtotal-sidebar"></div>
      </div>
    </div>
  );
}
