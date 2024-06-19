import React from "react";
import ItemCard from "./ItemCard";
import { itemsArray } from "./Items";

const Shop = () => {

    return (
        <div className="flex flex-col mx-16">
            <h2 className="mt-32 pb-32 text-6xl font-semibold">Healthy Juices</h2>
            <div className="flex flex-wrap gap-16 justify-center items-center">
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