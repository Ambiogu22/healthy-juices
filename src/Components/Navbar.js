import React from "react";
import { Route, Routes, Link } from "react-router-dom"
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";
import Cart from "./Cart";

const Navbar = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/shop" element={<Shop />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/cart" element={<Cart />}/>
            </Routes>
            <div className="py-12 border-b-[1px] border-[#3B3B3B] w-screen text-3xl">

                <ul className="flex justify-around">
                    <div className="flex gap-16">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </div>
                    <div className="flex">
                        <li><Link to="/cart">Shopping</Link></li>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;