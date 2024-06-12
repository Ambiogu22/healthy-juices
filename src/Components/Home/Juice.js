import React from "react";
import { Link } from 'react-router-dom'

const Juice = (props) => {
    return (
        <div>
            <div className="flex flex-col gap-24 items-center mb-32 relative">
                <img src={props.image} className="w-fit mt-32 border-y-[2px] border-[#000] text-[36px]" alt={props.imgAlt}/>
                <div className="flex flex-col gap-24 px-20 items-center">
                    <h2 className="text-7xl font-semibold text-[#555555] font-mono">{props.juiceName}</h2>
                    <p className="text-[48px] text-center font-semibold">{props.juiceDescription}</p>
                    <button className="text-5xl font-semibold bg-[#69909F] border-[4px] border-[#426471] text-[#FFF] W-fit py-[28px] px-[62px] rounded-2xl"><Link to="/shop">SHOP</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Juice;