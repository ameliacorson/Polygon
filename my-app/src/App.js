import React from "react";
import { Link, Route } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./Pages/About";

export default function App() {
  return (
    <div>
      <Nav />
      <Header />

    </div>
  );
}
