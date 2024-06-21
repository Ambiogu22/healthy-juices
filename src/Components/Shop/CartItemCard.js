import React from "react";
import { useContext } from "react";
import { CartContext } from "./ShopContext"
import { getItemData } from "./Items";

const CartItemCard = (props) => {

    const item = props.item

    const cart = useContext(CartContext);

    const items = getItemData(item.id)

    const getItemQty = cart.getItemQty(item.id)

    return (
        <div className="pb-6 bg-[#F9F7F1] flex items-end relative">
            <div className="flex w-full flex-row gap-12 sm:gap-16 items-center justify-around rounded-2xl py-10 sm:py-6 px-14 sm:px-6">
                <img src={items.image} alt={items.imgAlt} className="w-24 sm:w-32"/>
                <div className="flex flex-col items-start">
                    <h2 className="text-[40px] sm:text-[32px] font-semibold text-center">{items.title}</h2>
                    <h2 className="text-[36px] sm:text-[28px] text-center">${items.price}</h2>
                </div>
                <div className="flex justify-center items-center">
                    <button className="text-4xl sm:text-2xl font-semibold py-4 sm:py-2 px-10 sm:px-6 border-2 border-[#000] rounded-l-full" onClick={()=> {cart.subtractItem(item.id)}}>-</button>
                    <h2 className="text-4xl sm:text-2xl font-semibold py-4 sm:py-2 px-10 sm:px-6 border-2 border-[#000]">{getItemQty}</h2>
                    <button className="text-4xl sm:text-2xl font-semibold py-4 sm:py-2 px-10 sm:px-6 border-2 border-[#000] rounded-r-full" onClick={()=> {cart.addItem(item.id)}}>+</button>
                </div>
            </div> 
            <div className="place-items-end	absolute right-0 bottom-0">
                <button className="text-[32px] sm:text-[26px] font-semibold py-4 px-10 rounded-2xl underline text-[#808080]" onClick={()=> {cart.removeItem(item.id)}}>Remove</button> 
            </div> 
        </div>
    )
}

export default CartItemCard;