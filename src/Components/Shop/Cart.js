import React from "react";
import CartItemCard from "./CartItemCard";
import { useContext } from "react";
import { CartContext } from "./ShopContext"

const Cart = () => {

    const cart = useContext(CartContext);

    console.log(cart.items)

    let itemsInCart = cart.items;

    const totalCost = cart.getTotalCost();

    return (
        <div className="flex flex-col mx-16">
            <h2 className="mt-32 text-7xl font-semibold">Cart</h2>
            <h2 className="text-5xl">Your total: {totalCost}</h2>
            <h2 className="text-5xl pb-32">Items: </h2>

            <div className="flex flex-col gap-12 justify-between items-center">
                {itemsInCart.length >= 1 ?
                    
                    itemsInCart.map((item, idx)=>(
                            <div key={idx}>
                                <CartItemCard item={item}/>
                            </div>
                        ))
                    
                : <h2 className="text-7xl">Your Cart Is Empty</h2>}  
            </div>
        </div>
    );
}

export default Cart;