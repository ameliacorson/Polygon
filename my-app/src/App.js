import React from "react"

import Header from "./components/Header"
import Nav from "./components/Nav"
import About from "./Pages/About"
import Banner from "./components/Banner"

export default function App() {
    return(
    <div>
            <Nav />
            <Header />
            <Banner />
            <About />
    </div>
    )
}