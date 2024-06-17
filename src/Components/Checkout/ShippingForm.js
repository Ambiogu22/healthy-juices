import react from "react";

const ShippingForm = () => {
    return(
        <>
            <div className="mb-8 p-8">
                <div>
                    <h2 className="text-5xl font-semibold mb-8">1- Customer information</h2>
                    <div className="p-8">
                        <form className="flex flex-col gap-6">
                            <label className="text-4xl">Full name:
                                <input type="text" placeholder="Full Name" className="my-4 w-full text-4xl border-2 border-[#A9A9A9]  rounded-xl p-4 text-[#000]"/>
                            </label>
                            <label className="text-4xl">Phone number:
                                <input type="text" placeholder="Phone number" className="my-4 w-full text-4xl border-2 border-[#A9A9A9]  rounded-xl p-4 text-[#000]"/>
                            </label>
                            <label className="text-4xl">Adress:
                                <input type="text" placeholder="Adress" className="my-4 w-full text-4xl border-2 border-[#A9A9A9]  rounded-xl p-4 text-[#000]"/>
                            </label>
                            <label className="text-4xl">City:
                                <input type="text" placeholder="City" className="my-4 w-full text-4xl border-2 border-[#A9A9A9]  rounded-xl p-4 text-[#000]"/>
                            </label>
                            <div className="flex justify-bewteen gap-6">
                                <label className="text-4xl">State:
                                    <input type="text" placeholder="State" className="my-4 w-full text-4xl border-2 border-[#A9A9A9]  rounded-xl p-4 text-[#000]"/>
                                </label>
                                <label className="text-4xl">ZIP Code:
                                    <input type="text" placeholder="ZIP Code" className="my-4 w-full text-4xl border-2 border-[#A9A9A9]  rounded-xl p-4 text-[#000]"/>
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShippingForm;