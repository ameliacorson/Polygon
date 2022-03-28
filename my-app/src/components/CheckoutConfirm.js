import React from "react";
import { Link } from "react-router-dom";
import { usePaymentInfo } from "../Context/paymentProvider";
import { useCart } from "../Context/cartProvider";
import { formatUSD } from "../Context/format";
import { AiOutlineEdit } from "react-icons/ai"

import confirmationFood from "../img/Confirmation-food.jpg"

export default function CheckoutConfirm({ orderSubmitted, submitOrder }) {
  const { deliveryAddress, creditCardInformation } = usePaymentInfo();
  const { cartItems, clearCart } = useCart()

  const [totalPrice, setTotalPrice] = React.useState(0)
  const [tip, setTip] = React.useState(0)
  
  function submit() {
      clearCart()
      submitOrder()
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //pricing

  const cartTotal = cartItems.reduce((acc, curr) => acc + curr.price, 0);
  const deliveryFee = 3
  const tax = cartTotal * 0.1075
  React.useEffect(() => {
    setTotalPrice(cartTotal + tip + deliveryFee + tax)
  }, [tip, cartTotal, tax]);
  
  return (
    
    <div className="confirmation-container">
      {orderSubmitted && <img className="order-img" src={confirmationFood} alt="assorted thai food offerings"/>}
      {orderSubmitted ? 
      <div className="order-submitted">
          <h3>Thanks for your Order</h3>
          <p>Unfortunately since this site is a portfolio project, no food is coming your way. But thank you for engaging with my site!</p>
          <p> If you need Thai food, and you're in the Chicago area, Polygon is a real restaurant and you can find them <Link to="https://orderonlinemenu.com/polygoncafe">here</Link> </p>
      </div>
      :
      <div>
      {(deliveryAddress && creditCardInformation) ? 
      <div>
      <h3>Confirm Your Order</h3>
      <div className="confirmation-delivery-container">
        <h4>Your Information  <Link to="/checkout/payment"><AiOutlineEdit /></Link></h4> 
        <div className="confirm-address">
        <p>{deliveryAddress.name}</p>
        <p>{deliveryAddress.address1}</p>
        {deliveryAddress.address2 && <p>{deliveryAddress.address2}</p>}
        <p>
          {deliveryAddress.city}, {deliveryAddress.state}{" "}
          {deliveryAddress.zipCode}
        </p>
        {creditCardInformation.ccNumber && <div className="confirmation-cc-container">
        <p>card ending in {creditCardInformation.ccNumber.slice(-4)}</p>
      </div>}
        </div>
      </div>
      <h4>Your Order <Link to="/order"><AiOutlineEdit /></Link> </h4>
      <div className="confirmation-cart-container">
        <p>Estimated delivery in 35-45 minutes</p>
        <div className="confirm-order-cart">
        {cartItems.map(item => {
          return (
          <div className="checkout-cart-item">
            <div className="item-details">
            <p>{item.quantity} {item.name}</p>
          {item.choice && (
            <ul>
              <li>{item.choice} </li>
              <li>{item.spice}</li>
              <li>{item.rice}</li>
            </ul>
          )}
          </div>
          <p className="price">{formatUSD(item.price)}</p>
        </div>)
        })}
        </div>
      </div>
     <div className="confirm-pricing-container">
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
        <h4> Tip your delivery driver </h4>
      <div className="add-tip">
        <button onClick={() => setTip(.2 * cartTotal)}>20%</button>
        <button onClick={() => setTip(.25 * cartTotal)}>25%</button>
        <button onClick={() => setTip(.30 * cartTotal)}>30%</button>
      </div>

      <div className="btn-container">
        <Link to="/checkout/payment">
          <button className="dot-nav">Back</button>
        </Link>
        <button className="dot-nav" onClick={submit}>Submit</button>
      </div>
      </div>
      :
      <h3> Looks like you may be lost</h3>}
      </div>}
    </div>
  );
}
