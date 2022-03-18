import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCreditCardFill } from "react-icons/bs";
import { usePaymentInfo } from "../Context/paymentProvider";

export default function CheckoutPayment() {

  const { addDeliveryAddress, addBillingAddress, addCCInformation } = usePaymentInfo()

  const [billingInfo, setBillingInfo] = useState({
    name: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
  });
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
  });
  const [sameBillingDelivery, setSameBillingDelivery] = useState(false);

  const [ccInfo, setCcInfo] = useState({
    ccNumber: "",
    ccvNumber: "",
    expDate: "",
  });

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo({
      ...deliveryInfo,
      [name]: value,
    });
  };

  const handleDeliveryChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo({
      ...deliveryInfo,
      [name]: value,
    });
  };

  const handleCCInfoChange = (e) => {
    const { name, value } = e.target;
    setCcInfo({
      ...ccInfo,
      [name]: value,
    });
  };

  function handleSubmit() {
    addBillingAddress(billingInfo)
    addDeliveryAddress(deliveryInfo)
    addCCInformation(ccInfo)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Delivery Info</h3>
        <div className="form-group">
        {/* <label className="test" htmlFor="deliveryFullName">Full Name</label> */}
          <input
            label="Full Name"
            id="deliveryFullName"
            name="name"
            type="text"
            placeholder="Full Name"
            value={deliveryInfo.name}
            onChange={handleDeliveryChange}
            required
          />
          <br />
          <input
            label="Address1"
            id="deliveryAddress1"
            name="address1"
            type="text"
            placeholder="Address 1"
            value={deliveryInfo.address1}
            onChange={handleDeliveryChange}
            required
          />
          <br />
          <input
            label="Address2"
            id="deliveryAddress2"
            name="address2"
            type="text"
            placeholder="Address 2"
            value={deliveryInfo.address2}
            onChange={handleDeliveryChange}
          />
          <br />
          <input
            label="City"
            id="deliveryCity"
            name="city"
            type="text"
            placeholder="City"
            value={deliveryInfo.city}
            onChange={handleDeliveryChange}
            required
          />
          <br />
          <input
            label="State"
            id="deliveryState"
            name="state"
            type="text"
            maxLength="2"
            placeholder="State"
            value={deliveryInfo.state}
            onChange={handleDeliveryChange}
            required
          />
          <br />
          <input
            label="Zip Code"
            id="deliveryZipCode"
            name="zipCode"
            type="number"
            maxLength="5"
            placeholder="Zip Code"
            value={deliveryInfo.zipCode}
            onChange={handleDeliveryChange}
            required
          />
        </div>

        <br />
        {/* <label htmlFor="sameDeliveryBilling">
          <input
            type="checkbox"
            id="sameDeliveryBilling"
            onClick={handleCheckboxToggle}
          />
          Billing and delivery info are the same
        </label> */}
        <br />
        <br />

        <title>Billing Info</title>
        {sameBillingDelivery ? (
          <div className="form-group">
            <h3>Billing Email</h3>
            <input
              label="Email"
              id="billingEmail"
              name="email"
              input
              type="email"
              placeholder="Email Address"
              value={billingInfo.email}
              onChange={handleBillingChange}
              required
            />
          </div>
        ) : (
          <div className="form-group">
            <h3>Billing Info</h3>
            <input
              label="Full Name"
              id="billingFullName"
              name="name"
              type="text"
              placeholder="Full Name"
              required
              value={billingInfo.name}
              onChange={handleBillingChange}
            />
            <br />
            <input
              label="Email"
              id="billingEmail"
              name="email"
              type="email"
              placeholder="Email Address"
              value={billingInfo.email}
              onChange={handleBillingChange}
              required
            />
            <br />
            <input
              label="Address1"
              id="billingAddress1"
              name="address1"
              type="text"
              placeholder="Address 1"
              value={billingInfo.address1}
              onChange={handleBillingChange}
              required
            />
            <br />
            <input
              label="Address2"
              id="billingAddress2"
              name="address2"
              type="text"
              placeholder="Address 2"
              value={billingInfo.address2}
              onChange={handleBillingChange}
            />
            <br />
            <input
              label="City"
              id="billingCity"
              name="city"
              type="text"
              placeholder="City"
              value={billingInfo.city}
              onChange={handleBillingChange}
              required
            />
            <br />
            <input
              label="State"
              id="billingState"
              name="state"
              type="text"
              maxLength="2"
              placeholder="State"
              value={billingInfo.state}
              onChange={handleBillingChange}
              required
            />
            <br />
            <input
              label="Zip Code"
              id="billingZipCode"
              name="zipCode"
              type="number"
              maxLength="5"
              placeholder="Zip Code"
              value={billingInfo.zipCode}
              onChange={handleBillingChange}
              required
            />
          </div>
        )}
        <br />
        <br />

        <div className="cc-container">
        <h3>Credit Card Info</h3>
          <BsCreditCardFill />
          
          <input
            label="Card Number"
            id="ccNumber"
            name="ccNumber"
            type="number"
            value={ccInfo.ccNumber}
            onChange={handleCCInfoChange}
            required
            inputMode="numeric"
            pattern="[0-9\s]{13,19}"
            autoComplete="cc-number"
            maxLength="19"
            placeholder="xxxx xxxx xxxx xxxx"
          />
          <input
            label="CCV"
            id="ccvNumber"
            name="ccvNumber"
            type="text"
            placeholder="CCV"
            value={ccInfo.ccvNumber}
            onChange={handleCCInfoChange}
            required
          />
          <input
            label="Exp Date"
            id="expDate"
            name="expDate"
            type="text"
            placeholder="Exp Date"
            value={ccInfo.expDate}
            onChange={handleCCInfoChange}
            required
          />
        </div>
      </form>

      <div className="btn-container">
        <Link to="/checkout/cart">
          <button className="dot-nav">Back</button>
        </Link>
        <Link to="/checkout/confirm">
          <button className="dot-nav" onClick={handleSubmit}>Next</button>
        </Link>
      </div>
    </div>
  );
}
