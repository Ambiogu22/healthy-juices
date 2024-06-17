import React from "react";
import CheckoutItemCard from "./CheckoutItemCard";
import { useContext } from "react";
import { CartContext } from "../Shop/ShopContext";
import { Link } from "react-router-dom";

const ItemsDetails = () => {

    const cart = useContext(CartContext);

    let itemsInCart = cart.items;

    return (
        <div className="mb-24 p-8">
            <div className="flex flex-col gap-6 mb-32">
                <h2 className="text-5xl font-semibold mb-8">2- Review Items:</h2>
            </div>
            <div className="flex flex-col gap-12 justify-between items-center">
                {itemsInCart.length >= 1 ?
                    
                    <div className="flex flex-col">
                    {
                    itemsInCart.map((item, idx)=>(
                            <div key={idx}>
                                <CheckoutItemCard item={item}/>
                            </div>
                        ))
                    }
                    </div>
                :
                <div className="flex flex-col gap-24 items-center">
                    <h2 className="text-7xl">Your Cart Is Empty</h2>
                    <button className="text-4xl font-semibold bg-[#69909F] border-[4px] border-[#426471] text-[#FFF]  py-[20px] px-[50px] rounded-2xl"><Link to="/shop">SHOP</Link></button>
                </div>}
            </div>
        </div>
    );
}

export default ItemsDetails;