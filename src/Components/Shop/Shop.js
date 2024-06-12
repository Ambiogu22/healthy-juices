import React from "react";
import Item from "./Item";

const Shop = () => {
    return (
        <div className="flex flex-col mx-16">
            <h2 className="mt-32 pb-32 text-7xl font-semibold">Healthy Juices</h2>
            <div className="flex flex-col gap-12 justify-between items-center">
                <Item
                img="https://cdn-icons-png.flaticon.com/512/71/71879.png" 
                imgAlt="Green Juice Image"
                title="Green Juice"
                price="19.99"
                />
                <Item
                img="https://cdn-icons-png.flaticon.com/512/71/71879.png" 
                imgAlt="Orange Juice Image"
                title="Orange Juice"
                price="19.99"
                />
            </div>
        </div>
    );
}

export default Shop;