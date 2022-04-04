import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/main.css";

import CartContextProvider from "./Context/cartProvider";

import App from "./App";

ReactDOM.render(
  <Router>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </Router>,
  document.getElementById("root")
);
