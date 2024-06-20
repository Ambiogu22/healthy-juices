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
            <div className="relative flex flex-col gap-8 items-center bg-[#F9F7F1] rounded-2xl py-16 px-16">
                {item.new &&
                    <h2 className="absolute text-[#FFF] bg-[#000] rounded-full text-[30px] px-[12px] py-[16px] font-bold left-[20px] top-[20px] text-center">new</h2>
                }
                <Link to='/' className="flex flex-col gap-8 items-center">
                    <img src={item.image} alt={item.imgAlt} className="w-48"/>
                    
                    <h2 className="text-[42px] font-semibold">{item.title}</h2>
                    <div className="flex flex-col gap-4 items-center">
                        <h2 className="text-5xl font-medium">${item.price}</h2>
                        <h2 className="text-4xl text-[#6B6B6B]">Week</h2>
                    </div>
                </Link>
                {productQty > 0 
                    ?
                    <div className="flex justify-center items-center">
                        <button className="text-4xl font-semibold py-4 px-8 border-2 border-[#000] rounded-l-full" onClick={()=> {cart.subtractItem(item.id)}}>-</button>
                        <h2 className="text-4xl font-semibold py-4 px-8 border-2 border-[#000]">{productQty}</h2>
                        <button className="text-4xl font-semibold py-4 px-8 border-2 border-[#000] rounded-r-full" onClick={()=> {cart.addItem(item.id)}}>+</button>
                    </div>
                    :
                    <div className="flex justify-center items-center">
                        <button className="text-3xl font-semibold py-4 px-8 border-2 border-[#000] rounded-full" onClick={()=> {cart.addItem(item.id)}}>ADD TO CART</button>
                    </div> 
                }
            </div>  
        </>
    )
}

export default ItemCard;