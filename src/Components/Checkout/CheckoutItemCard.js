import React from "react";
import { useContext } from "react";
import { CartContext } from "../Shop/ShopContext";
import { getItemData } from "../Shop/Items";
import { Link } from "react-router-dom";

const CheckoutItemCard = (props) => {

    const item = props.item;

    const cart = useContext(CartContext);

    const items = getItemData(item.id)

    const getItemQty = cart.getItemQty(item.id)

    return (
        <div className="mb-20 bg-[#F9F7F1] relative">
            <div className="flex flex-row gap-12 items-center justify-around rounded-2xl py-16 px-16">
                <img src={items.image} alt={items.imgAlt} className="w-24"/>
                <div>
                    <h2 className="text-[40px] font-semibold text-center">{items.title}</h2>
                </div>
                <div className="flex justify-center items-center">
                    <div className="flex items-center justify-center">
                        <h2 className="text-4xl font-semibold">Qty: {getItemQty}</h2>
                    </div>
                    <button className="text-[32px] font-semibold px-[12px] rounded-2xl underline text-[#7182E9]"><Link to="/cart">Change</Link></button> 
                </div>
            </div> 
            <div className="place-items-end	absolute right-0 bottom-0">
                <button className="text-[32px] font-semibold py-4 px-10 rounded-2xl underline text-[#808080]" onClick={()=> {cart.removeItem(item.id)}}>Remove</button>
            </div> 
        </div>
    )
}

export default CheckoutItemCard;