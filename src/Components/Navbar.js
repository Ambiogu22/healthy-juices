import React from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

const Navbar = () => {

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
            <div className="flex justify-around items-stretch py-20 border-b-[2px] border-[#000] w-screen text-6xl sticky top-0 z-50 bg-[#FFF]">
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
                    <li><Link to="/cart" onClick={shoppingCartToggle}><FontAwesomeIcon icon={faCartShopping}/></Link></li>
                </ul>
                }
            </div>  
        </>
    )
}

export default Navbar;