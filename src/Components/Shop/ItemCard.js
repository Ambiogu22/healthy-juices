import React from "react";
import {useContext} from "react";
import {CartContext} from "./ShopContext";
import { Link } from "react-router-dom";

const ItemCard = (props) => {

    const item = props.item;

    const cart = useContext(CartContext);

    const productQty = cart.getItemQty(item.id)

    return (
        <>
            <div className="relative flex flex-wrap flex-col gap-8 items-center bg-[#F9F7F1] rounded-2xl py-24 sm:py-12 px-[50px] sm:px-[0px]">
                {item.new &&
                    <h2 className="absolute text-[#FFF] bg-[#000] rounded-full text-[30px] sm:text-[20px] px-[12px] sm:px-[8px] py-[16px] sm:py-[10px] font-bold left-[20px] top-[20px] text-center">new</h2>
                }
                <Link to='/shop/items' className="flex flex-col gap-8 items-center">
                    <img src={item.image} alt={item.imgAlt} className="w-48 sm:w-42"/>
                    <h2 className="text-[42px] sm:text-[28px] w-80 sm:w-64 font-semibold text-center">{item.title}</h2>
                    <div className="flex flex-col gap-4 sm:gap-0 items-center">
                        <h2 className="text-5xl sm:text-3xl font-medium sm:font-normal">${item.price}</h2>
                        <h2 className="text-4xl sm:text-2xl text-[#6B6B6B]">each</h2>
                    </div>
                </Link>

                {productQty > 0
                    ?
                    <div className="flex justify-center items-center">
                        <button className="text-4xl sm:text-2xl font-semibold py-4 sm:py-2 px-8 sm:px-6 border-2 border-[#000] rounded-l-full" onClick={()=> {cart.subtractItem(item.id)}}>-</button>
                        <h2 className="text-4xl sm:text-2xl font-semibold py-4 sm:py-2 px-8 sm:px-6 border-2 border-[#000]">{productQty}</h2>
                        <button className="text-4xl sm:text-2xl font-semibold py-4 sm:py-2 px-8 sm:px-6 border-2 border-[#000] rounded-r-full" onClick={()=> {cart.addItem(item.id)}}>+</button>
                    </div>
                    :
                    <div className="flex justify-center items-center">
                        <button className="text-3xl sm:text-xl font-semibold sm:font-bold py-4 sm:py-2 px-8 sm:px-6 border-2 border-[#000] rounded-full" onClick={()=> {cart.addItem(item.id)}}>ADD TO CART</button>
                    </div> 
                }
            </div>  
        </>
    )
}

export default ItemCard;