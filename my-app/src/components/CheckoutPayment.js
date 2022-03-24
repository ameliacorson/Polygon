import React, { useState } from "react";
import { Link } from "react-router-dom";
import { usePaymentInfo } from "../Context/paymentProvider";

export default function CheckoutPayment() {

  // const [ allowSubmit, setAllowSubmit] = useState(false)

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    expDate: "",
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

  // React.useEffect(() => {
  //   if (
  //       deliveryInfo.name &&
  //       deliveryInfo.email &&
  //       deliveryInfo.address1 &&
  //       deliveryInfo.city &&
  //       deliveryInfo.state &&
  //       deliveryInfo.zipCode
  //     ) {
  //       setAllowSubmit(true);
  //     } else if (
  //       !deliveryInfo.name ||
  //       !deliveryInfo.email ||
  //       !deliveryInfo.address1 ||
  //       !deliveryInfo.city ||
  //       deliveryInfo.state ||
  //       deliveryInfo.zipCode
  //     ) {
  //       setAllowSubmit(false);
  //     }
  //   } , [deliveryInfo]);

  return (
    <div>
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
          <label className="test" htmlFor="deliveryFullName">
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
          <label className="test" htmlFor="deliveryAddress1">
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
          <label className="test" htmlFor="deliveryAddress2">
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
          <label className="test" htmlFor="deliveryCity">
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
          <label className="test" htmlFor="deliveryState">
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
          <label className="test" htmlFor="deliveryZipCode">
            Zip Code<span className="required-asterisk">*</span>
          </label>
        </div>
        <br />
        <br />

        <div className="cc-container">
          <h3>
            Credit Card Info
          </h3>

          <input
            label="Card Number"
            id="ccNumber"
            name="ccNumber"
            type="text"
            value={ccInfo.ccNumber}
            onChange={handleCCInfoChange}
            required
            inputMode="numeric"
            pattern="[0-9\s]{13,19}"
            autoComplete="cc-number"
            maxLength="16"
            placeholder=" "
          />
          <label className="test" htmlFor="ccNumber">
            Credit Card<span className="required-asterisk">*</span>
          </label>
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
          <label className="test" htmlFor="ccvNumber">
            CCV<span className="required-asterisk">*</span>
          </label>

          <input
            label="Exp Date"
            id="expDate"
            name="expDate"
            type="text"
            placeholder=" "
            value={ccInfo.expDate}
            onChange={handleCCInfoChange}
            required
          />
          <label className="test" htmlFor="expDate">
            Exp<span className="required-asterisk">*</span>
          </label>
        </div>
      </form>

      <div className="btn-container">
        <Link to="/checkout/cart">
          <button className="dot-nav">Back</button>
        </Link>
        <Link to="/checkout/confirm">
          <button className="dot-nav" onClick={handleSubmit}>
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}
