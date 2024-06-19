import React from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "./Shop/ShopContext";

const Navbar = () => {

    const cart = useContext(CartContext);

    const itemsInCart = cart.getTotalItems();

    const [isOpen, setIsOpen] = useState(false);

    const navBarToggle = () => {
        setIsOpen(!isOpen)
    }

    const shoppingCartToggle = () => {
        if(isOpen == true){
            setIsOpen(false)
        }
    }

    return (
        <>
            <div className="flex justify-around items-stretch py-20 shadow-[0px_-2px_20px_0px] shadow-[#000] w-screen text-5xl sticky top-0 z-50 bg-[#FFF]">
                <div className="flex list-none">
                        <li className="lg:hidden"><FontAwesomeIcon icon={faBarsStaggered} onClick={navBarToggle}/></li>
                </div>
                {!isOpen &&
                    <div>
                        <h3 className="font-semibold">LOGO</h3>
                    </div>
                }
                {isOpen && <div>
                    <ul className="flex justify-around font-semibold">
                        <div className="flex gap-24">
                            <li><Link to="/" onClick={navBarToggle}>Home</Link></li>
                            <li><Link to="/shop" onClick={navBarToggle}>Shop</Link></li>
                            <li><Link to="/about" onClick={navBarToggle}>About</Link></li>
                        </div>
                    </ul>
                </div>}
                {!isOpen &&
                <ul>
                    <div className="relative">
                        {itemsInCart >= 1 &&
                            <h2 className="absolute text-[#FFF] bg-[#B01818] rounded-full text-[30px] px-[14px] py-[6px] font-bold right-[-20px] top-[-20px]">{itemsInCart}</h2>
                        }
                        <li><Link to="/cart" onClick={shoppingCartToggle}><FontAwesomeIcon icon={faCartShopping}/></Link></li>
                    </div>
                </ul>
                }
            </div>  
        </>
    )
}

export default Navbar;