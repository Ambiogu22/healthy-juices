import react from "react";
import { useContext } from "react";
import { CartContext } from "../Shop/ShopContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleWhole, faSeedling } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const Items = (props) => {

    const cart = useContext(CartContext);

    return (
        <div className="mb-44">
            <div className="flex flex-col items-center gap-40 mb-48">
                <img src={props.image} className="mt-32 w-[450px]" alt={props.imgAlt}/>
                <div className="flex flex-col items-start gap-20 relative">
                    <div className="flex flex-col gap-16">
                        <h2 className="text-7xl font-semibold text-[#555555] font-mono">{props.juiceName}</h2>
                        <p className="text-[36px] items-start font-semibold">{props.juiceDescription}</p>
                    </div>
                    <div className="flex flex-col gap-8">
                        <h2 className="text-6xl font-semibold">${props.price}</h2>
                        <h2 className="text-4xl text-[#969696]">Each</h2>
                    </div>

                </div>
                <div className="flex justify-center items-center">
                        <button className="text-3xl font-semibold py-8 px-10 bg-[#000] text-[#FFF] rounded-full" onClick={()=> {cart.addItem(props.id)}}>ADD TO CART</button>
                </div>
            </div>
            <div className="mb-32">
                <div className="flex flex-col gap-20">
                        <h2 className="text-5xl font-semibold">Benefits</h2>
                        <div className="flex gap-12">
                            <FontAwesomeIcon icon={faAppleWhole} className="text-[90px]" />
                            <p className="text-[40px] font-semibold">
                                Balanced Greens - A balance of fruit & vegetables, enjoy the benefits of adding an easy-to-drink, refreshing green juice to your day.
                            </p>
                        </div>
                        <div className="flex gap-12">
                        <FontAwesomeIcon icon={faSeedling} className="text-[80px]" />
                            <p className="text-[40px] font-semibold">
                                5 A Day - Help yourself get your some of your 5 daily fruits & vegetables into your day, especially if you're not fond of eating them!
                            </p>
                        </div>
                </div>
                <div className="border-[1px] border-[#A9A9A9] my-16"/>
                <div className="flex flex-col gap-20">
                        <h2 className="text-5xl font-semibold">Ingredients</h2>
                        <div className="flex gap-12">
                            <p className="text-[40px] font-semibold">
                            Apple Juice, Cucumber Juice, Celery Juice, Lemon Juice, Spinach Juice, Kale Juice, Parsley.
                            </p>
                        </div>
                </div>
                <div className="border-[1px] border-[#A9A9A9] my-16"/>
                <div className="flex flex-col justify-center items-center gap-20">
                    <p className="text-6xl font-semibold">
                    Made with apple, cucumber, celery, lemon, spinach, kale & parsley.
                    </p>
                    <img src="https://pressed-product-images.s3.us-west-1.amazonaws.com/flavor_profile_images/PDPIngredients1440x1440-Greens-2.png" alt="Greens" />
                </div>
            </div>
            <div className="flex justify-center items-center">
                    <Link to="/shop"><button className="text-3xl font-semibold py-8 px-10 bg-[#000] text-[#FFF] rounded-full" onClick={()=> {cart.addItem(props.id)}}>SHOP MORE ITEMS</button></Link>
            </div>
        </div>
    )
}

export default Items;