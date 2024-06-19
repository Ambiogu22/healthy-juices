import React from "react";
import {useContext} from "react";
import {CartContext} from "./ShopContext";

const ItemCard = (props) => {

    const item = props.item;

    const cart = useContext(CartContext);

    return (
        <>
            <div className="flex flex-col gap-12 items-center bg-[#F9F7F1] rounded-2xl py-14 px-14">
                <img src={item.image} alt={item.imgAlt} className="w-56"/>
                <h2 className="text-5xl font-semibold">{item.title}</h2>
                <div className="flex flex-col gap-4 items-center">
                    <h2 className="text-5xl font-medium">${item.price}</h2>
                    <h2 className="text-3xl text-[#6B6B6B]">Week</h2>
                </div>
                <div className="flex justify-center items-center">
                    <button className="text-4xl font-semibold py-6 px-12 border-2 border-[#000] rounded-full" onClick={()=> {cart.addItem(item.id)}}>ADD TO CART</button>
                </div>
            </div>           
        </>
    )
}

export default ItemCard;