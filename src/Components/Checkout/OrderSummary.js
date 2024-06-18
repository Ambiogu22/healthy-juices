import react from "react";
import { CartContext } from "../Shop/ShopContext";
import { useContext } from "react";

const OrderSummary = (props) => {

    const item = props.item;

    const cart = useContext(CartContext);

    const itemsCost = Number((cart.getTotalCost()).toFixed(2));

    const totalCost = Number((itemsCost + 4.99).toFixed(2));

    const getItemQty = cart.getItemQty(item.id)

    const itemsInCart = cart.getTotalItems();


    return (
        <>
            <div className="mb-24 border-[0.5px] border-[#A9A9A9] rounded-xl p-8">
                <h2 className="text-5xl font-semibold">Order Summary</h2>
                <div className="flex flex-col py-16 px-8 gap-12">
                    <div className="flex justify-between">
                        <h2 className="text-4xl">Items ({itemsInCart} Items):</h2>
                        <h2 className="text-4xl">${itemsCost}</h2>
                    </div>
                    <div className="flex justify-between">
                        <h2 className="text-4xl">Shipping and Handling:</h2>
                        <h2 className="text-4xl">$4.99</h2>
                    </div>
                    <div className="border-[1px] border-[#A9A9A9]"/>
                    <div className="flex justify-between">
                        <h2 className="text-5xl font-semibold text-[#9D0000]">Order Total</h2>
                        <h2 className="text-5xl font-semibold text-[#9D0000]">${totalCost}</h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderSummary;