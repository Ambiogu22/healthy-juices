import react from "react";

const Items = (props) => {

    return (
        <>
            <div>
                <div className="flex flex-col items-center gap-24 mb-32 relative">
                    <img src={props.image} className="mt-32 w-[450px]" alt={props.imgAlt}/>
                    <div className="flex flex-col gap-32">
                        <h2 className="text-7xl font-semibold text-[#555555] font-mono text-center">{props.juiceName}</h2>
                        <p className="text-[36px] items-start font-semibold">{props.juiceDescription}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-[42px] font-semibold">${props.price}</h2>
                        <h2 className="text-[42px] font-semibold">Each</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Items;