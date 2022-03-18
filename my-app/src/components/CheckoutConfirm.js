import React from "react";
import { Link } from "react-router-dom";
import { usePaymentInfo } from "../Context/paymentProvider";

import RenderCart from "./RenderCart";

export default function CheckoutConfirm() {
  const { deliveryAddress, creditCardInformation } = usePaymentInfo();

  return (
    <div className="confirmation-container">
      {(deliveryAddress & creditCardInformation) ? 
      <div>
      <h3>Confirm Your Order</h3>
      <div className="confirmation-delivery-container">
        <h4>Delivery Address</h4>
        <p>{deliveryAddress.name}</p>
        <p>{deliveryAddress.address1}</p>
        {deliveryAddress.address2 && <p>{deliveryAddress.address2}</p>}
        <p>
          {deliveryAddress.city}, {deliveryAddress.state}{" "}
          {deliveryAddress.zipCode}
        </p>
      </div>
      <div className="confirmation-cart-container">
        <RenderCart />
      </div>
      {creditCardInformation.ccNumber && <div className="confirmation-cc-container">
        <p>card ending in {creditCardInformation.ccNumber.slice(-4)}</p>
      </div>}

      <div className="btn-container">
        <Link to="/checkout/payment">
          <button className="dot-nav">Back</button>
        </Link>
        <button className="dot-nav">Submit</button>
      </div>
      </div>
      :
      <h3> Looks like you may be lost</h3>}
    </div>
  );
}
