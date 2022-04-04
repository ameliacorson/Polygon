import React, { useState } from "react";
import { Link } from "react-router-dom";
import { usePaymentInfo } from "../Context/paymentProvider";

import CartItem from './CartItem';
import { useCart } from "../Context/cartProvider";
import { formatUSD } from "../Context/format";

export default function CheckoutPayment() {
  const [allowSubmit, setAllowSubmit] = useState(false);
  const { cartItems } = useCart()


  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cartTotal = cartItems.reduce((acc, curr) => acc + curr.price, 0)

  const { addDeliveryAddress, addCCInformation } = usePaymentInfo();

  const [deliveryInfo, setDeliveryInfo] = useState({
    name: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const [ccInfo, setCcInfo] = useState({
    ccNumber: "",
    ccvNumber: "",
    expDateMM: "",
    expDateYY: "",
  });

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
    addDeliveryAddress(deliveryInfo);
    addCCInformation(ccInfo);
  }

  const Months = [];
  for (let i = 1; i <= 12; i++) {
    Months.push(
      i.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })
    );
  }

  const years = [];
  for (let i = 22; i <= 50; i++) {
    years.push(i);
  }

  console.log(ccInfo.expDateMM, ccInfo.expDateYY);

  React.useEffect(() => {
    if (
      deliveryInfo.name &&
      deliveryInfo.address1 &&
      deliveryInfo.city &&
      deliveryInfo.state &&
      deliveryInfo.zipCode
    ) {
      setAllowSubmit(true);
    } else {
      setAllowSubmit(false);
    }
  }, [deliveryInfo, allowSubmit]);

  return (
    <div>
      <div className="fullscreen-container">
      <form onSubmit={handleSubmit}>
        <h3>Delivery Info</h3>
        <div className="form-group">
          <input
            label="Full Name"
            id="deliveryFullName"
            name="name"
            type="text"
            placeholder=" "
            value={deliveryInfo.name}
            onChange={handleDeliveryChange}
            required
          />
          <label className="label-float" htmlFor="deliveryFullName">
            Full Name <span className="required-asterisk">*</span>
          </label>

          <br />

          <input
            label="Address1"
            id="deliveryAddress1"
            name="address1"
            type="text"
            placeholder=" "
            value={deliveryInfo.address1}
            onChange={handleDeliveryChange}
            required
          />
          <label className="label-float" htmlFor="deliveryAddress1">
            Address 1<span className="required-asterisk">*</span>
          </label>
          <br />

          <input
            label="Address2"
            id="deliveryAddress2"
            name="address2"
            type="text"
            placeholder=" "
            value={deliveryInfo.address2}
            onChange={handleDeliveryChange}
          />
          <label className="label-float" htmlFor="deliveryAddress2">
            Address 2
          </label>
          <br />

          <input
            label="City"
            id="deliveryCity"
            name="city"
            type="text"
            placeholder=" "
            value={deliveryInfo.city}
            onChange={handleDeliveryChange}
            required
          />
          <label className="label-float" htmlFor="deliveryCity">
            City<span className="required-asterisk">*</span>
          </label>
          <br />

          <input
            label="State"
            id="deliveryState"
            name="state"
            type="text"
            placeholder=" "
            maxLength="2"
            value={deliveryInfo.state}
            onChange={handleDeliveryChange}
            required
          />
          <label className="label-float" htmlFor="deliveryState">
            State<span className="required-asterisk">*</span>
          </label>
          <br />

          <input
            label="Zip Code"
            id="deliveryZipCode"
            name="zipCode"
            type="number"
            placeholder=" "
            maxLength="5"
            value={deliveryInfo.zipCode}
            onChange={handleDeliveryChange}
            required
          />
          <label className="label-float" htmlFor="deliveryZipCode">
            Zip Code<span className="required-asterisk">*</span>
          </label>
        </div>
        <br />
        <br />

        <div className="cc-container">
          <h3>Credit Card Info</h3>

          <input
            label="Card Number"
            id="ccNumber"
            name="ccNumber"
            type="text"
            value={ccInfo.ccNumber}
            onChange={handleCCInfoChange}
            required
            inputMode="numeric"
            autoComplete="cc-number"
            maxLength="16"
            placeholder=" "
          />
          <label className="label-float" htmlFor="ccNumber">
            Credit Card<span className="required-asterisk">*</span>
          </label>
          <p className="info cc-info">
            Please use a random number eg. 1234 1234 1234 5678
          </p>

          <div className="card-data">
            <div className="ccv-container">
              <input
                label="CCV"
                id="ccvNumber"
                name="ccvNumber"
                type="text"
                placeholder=" "
                maxLength="3"
                value={ccInfo.ccvNumber}
                onChange={handleCCInfoChange}
                required
              />
              <label className="label-float" htmlFor="ccvNumber">
                CCV<span className="required-asterisk">*</span>
              </label>
            </div>
            <select
              id="expDateMM"
              value={ccInfo.expDateMM}
              onChange={handleCCInfoChange}
              name="expDateMM"
            >
              <option value="">MM</option>
              {Months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <select
              id="expDateYY"
              value={ccInfo.expDateYY}
              onChange={handleCCInfoChange}
              name="expDateYY"
            >
              <option value="">YY</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        
          {!allowSubmit && <p className="info">* = required</p>}
        </div>
      </form>

      <aside className="sidebar">
        <h3> Your Order</h3>
              {
                cartItems.map(item => {
                  return (
                    <CartItem key={item.id} item={item}/>
                  )
                })
              }
              <div className="subtotal-container">
              <p className="subtotal">Subtotal:</p>
              <p className="subtotal">{formatUSD(cartTotal)}</p>
              </div>
                
      </aside>

      </div>

      <div className="btn-container">
        <Link to="/checkout/cart">
          <button className="dot-nav">Back</button>
        </Link>
        <Link to="/checkout/confirm">
          <button
            className="dot-nav"
            disabled={!allowSubmit}
            onClick={handleSubmit}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}
