import React from "react";
import { Link } from "react-router-dom";
import { usePaymentInfo } from "../Context/paymentProvider";
import { useCart } from "../Context/cartProvider";
import { formatUSD } from "../Context/format";
import { AiOutlineEdit } from "react-icons/ai";

import confirmationFood from "../img/Confirmation-food.jpg";

export default function CheckoutConfirm({ orderSubmitted, submitOrder }) {
  const { deliveryAddress, creditCardInformation } = usePaymentInfo();
  const { cartItems, clearCart } = useCart();

  const [totalPrice, setTotalPrice] = React.useState(0);
  const [tip, setTip] = React.useState(0);
  const [tipClass, setTipClass] = React.useState("");

  function submit() {
    clearCart();
    submitOrder();
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //pricing

  const cartTotal = cartItems.reduce((acc, curr) => acc + curr.price, 0);
  const deliveryFee = 3;
  const tax = cartTotal * 0.1075;
  React.useEffect(() => {
    setTotalPrice(cartTotal + tip + deliveryFee + tax);
  }, [tip, cartTotal, tax]);

  //tip buttons

  function handleTip20() {
    setTip(0.2 * cartTotal);
    setTipClass("twenty");
  }

  function handleTip25() {
    setTip(0.25 * cartTotal);
    setTipClass("twentyfive");
  }

  function handleTip30() {
    setTip(0.3 * cartTotal);
    setTipClass("thirty");
  }

  return (
    <div className="confirmation-container">
      {orderSubmitted && (
        <img
          className="order-img"
          src={confirmationFood}
          alt="assorted thai food offerings"
        />
      )}
      {orderSubmitted ? (
        <div className="order-submitted">
          <h3>Thanks for your Order</h3>
          <p>
            Unfortunately since this site is a portfolio project, no food is
            coming your way. But thank you for engaging with my site!
          </p>
          <p>
            {" "}
            If you need Thai food, and you're in the Chicago area, Polygon is a
            real restaurant and you can find them{" "}
            <a href="https://orderonlinemenu.com/polygoncafe">here</a>{" "}
          </p>
        </div>
      ) : (
        <div>
          {deliveryAddress && creditCardInformation ? (
            <div>
              <h3>Confirm Your Order</h3>

              <div className="confirmation-flex">
                <div className="confirmation-delivery-container confirm-flex-row">
                  <h4>
                    Your Information{" "}
                    <Link to="/checkout/payment">
                      <AiOutlineEdit />
                    </Link>
                  </h4>
                  <div className="confirm-container">
                    <h5>Address</h5>
                    <p>{deliveryAddress.name}</p>
                    <p>{deliveryAddress.address1}</p>
                    {deliveryAddress.address2 && (
                      <p>{deliveryAddress.address2}</p>
                    )}
                    <p>
                      {deliveryAddress.city}, {deliveryAddress.state}{" "}
                      {deliveryAddress.zipCode}
                    </p>
                    <h5>Card </h5>
                    {creditCardInformation.ccNumber && (
                      <div className="confirmation-cc-container">
                        <p>
                          card ending in{" "}
                          {creditCardInformation.ccNumber.slice(-4)}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="confirm-order-cart confirm-flex-row">
                  <h4>
                    Your Order{" "}
                    <Link to="/order">
                      <AiOutlineEdit />
                    </Link>{" "}
                  </h4>
                  <div className="confirm-container">
                    <p>Estimated delivery in 35-45 minutes</p>
                    <div>
                      {cartItems.map((item) => {
                        return (
                          <div key={item.id} className="checkout-cart-item">
                            <div className="item-details">
                              <p>
                                {item.quantity} {item.name}
                              </p>
                              <p className="price">{formatUSD(item.price)}</p>
                            </div>
                            {item.choice && (
                              <ul>
                                <li>{item.choice} </li>
                                <li>{item.spice}</li>
                                <li>{item.rice}</li>
                              </ul>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="confirm-pricing-container confirm-flex-row">
                  <h4> Total Price</h4>
                  <div className="confirm-container">
                    <div className="pricing-item">
                      <p>Subtotal</p>
                      <p>{formatUSD(cartTotal)}</p>
                    </div>
                    <div className="pricing-item">
                      <p>Delivery Fee</p>
                      <p>{formatUSD(deliveryFee)}</p>
                    </div>
                    <div className="pricing-item">
                      <p>Tax</p>
                      <p>{formatUSD(tax)}</p>
                    </div>
                    <div className="pricing-item">
                      <p>Tip</p>
                      <p>{formatUSD(tip)}</p>
                    </div>
                    <div className="pricing-item">
                      <p>Total</p>
                      <p>{formatUSD(totalPrice)}</p>
                    </div>
                  </div>
                </div>
              </div>

              <h4> Tip your delivery driver </h4>
              <div className={`add-tip ${tipClass}`}>
                <button onClick={handleTip20}>20%</button>
                <button onClick={handleTip25}>25%</button>
                <button onClick={handleTip30}>30%</button>
              </div>

              <div className="btn-container">
                <Link to="/checkout/payment">
                  <button className="dot-nav">Back</button>
                </Link>
                <button className="dot-nav" onClick={submit}>
                  Submit
                </button>
              </div>
            </div>
          ) : (
            <h3> Looks like you may be lost</h3>
          )}
        </div>
      )}
    </div>
  );
}
