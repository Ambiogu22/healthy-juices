import React from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className="flex justify-around items-stretch py-20 border-b-[2px] border-[#000] w-screen text-5xl">
                <div className="flex list-none">
                        <li className="lg:hidden"><FontAwesomeIcon icon={faBarsStaggered} onClick={toggle}/></li>
                </div>
                {!isOpen &&
                    <div>
                        <h3>LOGO</h3>
                    </div>
                }
                {isOpen && <div>
                    <ul className="flex justify-around font-semibold">
                        <div className="flex gap-24">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </div>
                    </ul>
                </div>}
                <ul>
                    <li><Link to="/cart"><FontAwesomeIcon icon={faCartShopping}/></Link></li>
                </ul>
            </div>  
        </>
    )
}

export default Navbar;