import React from "react";
import CartItemCard from "./CartItemCard";
import { useContext } from "react";
import { CartContext } from "./ShopContext";
import { Link } from "react-router-dom";

const Cart = () => {

    const cart = useContext(CartContext);

    console.log(cart.items)

    let itemsInCart = cart.items;

    const totalCost = Number((cart.getTotalCost()).toFixed(2));

    return (
        <div className="flex flex-col px-16">
            <div className="flex flex-col gap-6 mb-32">
                <h2 className="mt-32 text-7xl font-semibold">Shopping Cart</h2>
                {itemsInCart.length >= 1 &&
                    <h2 className="text-5xl">Subtotal ({cart.getTotalItems()} Items): ${totalCost}</h2>
                }
                </div>
            <div className="flex flex-col gap-12 items-center">
                {itemsInCart.length >= 1 ?
                    <>
                        <button className="mb-16 text-4xl font-semibold bg-[#000] text-[#FFF] py-[20px] px-[50px] rounded-2xl"><Link to="/shop">Shop more items</Link></button>
                        <div className="relative flex flex-col gap-20 justify-center mb-[380px]">
                            {
                            itemsInCart.map((item, idx)=>(
                                    <div key={idx}>
                                        <CartItemCard item={item}/>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="bg-[#FFF] shadow-[0px_-2px_20px_0px] shadow-[#000] w-screen bottom-0 p-24 flex justify-center fixed ">
                            <button className="text-4xl font-semibold bg-[#000]  text-[#FFF] py-[30px] px-[50px] rounded-2xl"><Link to="/checkout">Proceed to checkout</Link></button>
                        </div>
                    </>
                :
                <div className="flex flex-col gap-24 items-center">
                    <h2 className="text-7xl">Your Cart Is Empty</h2>
                    <button className="text-4xl font-semibold bg-[#69909F] border-[4px] border-[#426471] text-[#FFF] py-[20px] px-[50px] rounded-2xl"><Link to="/shop">SHOP</Link></button>
                </div>}
            </div>
        </div>
    );
}

export default Cart;