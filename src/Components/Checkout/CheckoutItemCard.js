import React from "react";
import { useContext } from "react";
import { CartContext } from "../Shop/ShopContext";
import { getItemData } from "../Shop/Items";

const CheckoutItemCard = (props) => {

    const item = props.item

    const cart = useContext(CartContext);

    const items = getItemData(item.id)

    const getItemQty = cart.getItemQty(item.id)

    return (
        <div className="pb-6 mb-20 bg-[#F9F7F1] flex items-end relative">
            <div className="flex flex-row gap-12 items-center  p-8 rounded-2xl py-10 px-14">
                <img src={items.image} alt={items.imgAlt} className="w-24"/>
                <div>
                    <h2 className="text-[40px] font-semibold text-center">{items.title}</h2>
                </div>
                <div className="flex justify-center items-center">
                    <h2 className="text-4xl font-semibold">Qty:</h2>
                    <h2 className="text-4xl font-semibold py-4 px-2">{getItemQty}</h2>
                </div>
            </div> 
            <div className="place-items-end	absolute right-0 bottom-0">
                <button className="text-[32px] font-semibold py-4 px-10 rounded-2xl underline text-[#808080]" onClick={()=> {cart.removeItem(item.id)}}>Remove</button> 
            </div> 
        </div>
    )
}

export default CheckoutItemCard;