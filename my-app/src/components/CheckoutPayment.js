import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCreditCardFill } from "react-icons/bs";

export default function CheckoutPayment() {
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

  const [ccInformation, setCcInformation] = useState({
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
    setCcInformation({
      ...ccInformation,
      [name]: value,
    });
  };

  const handleCheckboxToggle = (e) => {
    if (e.target.checked) {
      setBillingInfo(deliveryInfo);
      setSameBillingDelivery(true);
    } else {
      setBillingInfo({
        name: "",
        email: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zipCode: "",
      });
      setSameBillingDelivery(false);
    }
  };

  function handleSubmit() {
    console.log("submitted");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Delivery Information</h3>
        <div className="form-group">
          <input
            label="Full Name"
            id="deliveryFullName"
            name="name"
            type="text"
            value={deliveryInfo.name}
            onChange={handleDeliveryChange}
            placeholder="Full Name"
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
            type="text"
            placeholder="Zip Code"
            value={deliveryInfo.zipCode}
            onChange={handleDeliveryChange}
            required
          />
        </div>

        <br />
        <label htmlFor="sameDeliveryBilling">
          <input
            type="checkbox"
            id="sameDeliveryBilling"
            onClick={handleCheckboxToggle}
          />
          Billing and delivery information are the same
        </label>
        <br />
        <br />

        <title>Billing Information</title>
        {sameBillingDelivery ? (
          <div className="form-group">
            <h3>Billing Email</h3>
            <input
              label="Email"
              id="billingEmail"
              name="email"
              type="text"
              placeholder="Email Address"
              value={billingInfo.email}
              onChange={handleBillingChange}
              required
            />
          </div>
        ) : (
          <div className="form-group">
            <h3>Billing Information</h3>
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
              type="text"
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
              type="text"
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
          <BsCreditCardFill />
          <input
            label="Card Number"
            id="ccNumber"
            name="ccNumber"
            type="text"
            placeholder="Card Number"
            value={ccInformation.ccNumber}
            onChange={handleCCInfoChange}
            required
          />
          <input
            label="CCV"
            id="ccvNumber"
            name="ccvNumber"
            type="text"
            placeholder="CCV"
            value={ccInformation.ccvNumber}
            onChange={handleCCInfoChange}
            required
          />
          <input
            label="Exp Date"
            id="expDate"
            name="expDate"
            type="text"
            placeholder="Exp Date"
            value={ccInformation.expDate}
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
          <button className="dot-nav">Next</button>
        </Link>
      </div>
    </div>
  );
}
