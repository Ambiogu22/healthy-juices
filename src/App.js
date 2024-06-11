import React from "react";
import "./style.css";
import { Route, Routes } from "react-router-dom"
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import About from "./Components/About";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </div>
  );
}