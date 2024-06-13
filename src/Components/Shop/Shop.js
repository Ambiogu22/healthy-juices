import React from "react";
import ItemCard from "./ItemCard";
import { itemsArray } from "./Items";

const Shop = () => {

    return (
        <div className="flex flex-col mx-16">
            <h2 className="mt-32 pb-32 text-7xl font-semibold">Healthy Juices</h2>
            <div className="flex flex-col gap-12 justify-between items-center">
                {
                itemsArray.map((item, idx)=>(
                    <div key={idx}>
                        <ItemCard item={item}/>
                    </div>
                ))
                }
            </div>
        </div>
    );
}

export default Shop;