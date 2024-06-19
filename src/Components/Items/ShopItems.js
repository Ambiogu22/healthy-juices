import react from "react";
import Items from "./Items";

const ShopItems = () => {
    return (
        <>
            <div className="flex flex-col mx-16">
                <h2 className="mt-32 pb-32 text-6xl font-semibold flex items-center justify-center">Healthy Juices</h2>
                <div className="flex flex-wrap gap-16 justify-center items-center">
                        <Items
                            juiceName="Green Juice" 
                            juiceDescription="Green Juice 3 is a blend of apple, lemon, ginger and beet. It is our most popular Roots juice made with the goodness of beets, sweetness of apples and all the spice from ginger." 
                            image="https://cdn-icons-png.flaticon.com/512/71/71879.png"
                            imgAlt="Green Juice Image"
                        />
                </div>
            </div>
        </>
    )
}

export default ShopItems;