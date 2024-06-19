import React from "react";
import CartItemCard from "../Shop/CartItemCard";
import { useContext } from "react";
import { CartContext } from "../Shop/ShopContext";
import { Link } from "react-router-dom";
import OrderSummary from "./OrderSummary";
import ShippingForm from "./ShippingForm";
import ItemsDetails from "./ItemsDetails";

const Checkout = () => {

    const cart = useContext(CartContext);

    console.log(cart.items)

    let itemsInCart = cart.items;

    return (
        <div className="flex flex-col mx-16">
            <div className="flex flex-col gap-6 mb-32">
                <h2 className="mt-32 text-7xl font-semibold">Checkout({cart.getTotalItems()} Items)</h2>
            </div>
            <div className="flex flex-col gap-12 justify-between items-center">
                    {itemsInCart.length >= 1 ?
                        <div className="flex flex-col">
                        <OrderSummary item/>
                        <ShippingForm />
                        <ItemsDetails />
                        <button className="mb-16 text-4xl font-semibold bg-[#000] text-[#FFF]  py-[20px] px-[50px] rounded-2xl"><Link to="/shop">Shop more items</Link></button>
                        <button className="mb-16 text-4xl font-semibold bg-[#000] text-[#FFF]  py-[20px] px-[50px] rounded-2xl"><Link to="/">Place Order</Link></button>
                        </div>
                    :
                    <div className="flex flex-col gap-24 items-center">
                        <h2 className="text-7xl">Your Cart Is Empty</h2>
                        <button className="text-4xl font-semibold bg-[#000] text-[#FFF]  py-[20px] px-[50px] rounded-2xl"><Link to="/shop">SHOP</Link></button>
                    </div>}
            </div>
        </div>
    );
}

export default Checkout;