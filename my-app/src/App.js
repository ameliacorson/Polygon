import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Order from "./Pages/Order";
import Checkout from "./Pages/Checkout";

import CheckoutConfirmCart from "./components/CheckoutConfirmCart";
import CheckoutPayment from "./components/CheckoutPayment";
import CheckoutConfirm from "./components/CheckoutConfirm";

export default function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Order" element={<Order />} />
        <Route exact path="/checkout/" element={<Checkout />}>
          <Route path="cart" element={<CheckoutConfirmCart />} />
          <Route path="payment" element={<CheckoutPayment />} />
          <Route path="confirm" element={<CheckoutConfirm />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}
