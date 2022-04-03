import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Order from "./Pages/Order";
import Checkout from "./Pages/Checkout";



export default function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Order" element={<Order />} />
        <Route exact path="/checkout/*" element={<Checkout />}/>
      </Routes>
      <Footer />
    </div>
  );
}
