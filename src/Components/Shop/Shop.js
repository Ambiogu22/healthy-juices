import React from "react";
import { itemsArray } from "./Items";

const Shop = () => {
    return (
        <div className="flex flex-col mx-16">
            <h2 className="mt-32 pb-32 text-7xl font-semibold">Healthy Juices</h2>
            <div className="flex flex-col gap-12 justify-between items-center">
                {itemsArray.map((item) => (
                            <div className="flex flex-col gap-12 items-center bg-[#F9F7F1] p-8 rounded-2xl py-24 px-24 mb-24">
                                <img src={item.image} alt={item.imgAlt} className="w-56"/>
                                <h2 className="text-5xl font-semibold">{item.title}</h2>
                                <div className="flex flex-col gap-4 items-center">
                                    <h2 className="text-5xl font-medium">${item.price}</h2>
                                    <h2 className="text-3xl text-[#6B6B6B]">Week</h2>
                                </div>
                                <div className="flex justify-center items-center">
                                    <button className="text-4xl font-semibold py-6 px-12 border-2 border-[#000] rounded-full">ADD TO CART</button>
                                </div>
                            </div>
                ))}
            </div>
        </div>
    );
}

export default Shop;