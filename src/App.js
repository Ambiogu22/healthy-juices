import React from "react";
import "./style.css";
import { Route, Routes } from "react-router-dom"
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import About from "./Components/About";
import Cart from "./Components/Shop/Cart";
import Navbar from "./Components/Navbar";
import Checkout from "./Components/Checkout/Checkout";
import { AppProvider } from "./Components/Shop/ShopContext";
import ShopItems from "./Components/Items/ShopItems";
import Success from "./Components/Checkout/Success";
import Canceled from "./Components/Checkout/Canceled"
import NotFound from "./Components/NotFound";

export default function App() {
  return (
    <div>
        <AppProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/shop" element={<Shop />}/>
              <Route path="/shop/items" element={<ShopItems />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/cart" element={<Cart />}/>
              <Route path="/checkout" element={<Checkout />}/>
              <Route path="/paymentSuccessful" element={<Success />} />
              <Route path="/paymentCanceled" element={<Canceled />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
        </AppProvider>
    </div>
  );
}