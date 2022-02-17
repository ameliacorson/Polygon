import React from "react";
import { Link, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./Pages/About";

export default function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
      </Switch>

    </div>
  );
}
