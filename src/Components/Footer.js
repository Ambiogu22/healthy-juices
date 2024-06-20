import { Link } from "react-router-dom";


const Footer = () => {
    return(
        <div className="px-16 py-20 bg-[#000] sticky bottom-0">
            <div className="flex flex-col gap-16">
                <h2 className="text-5xl text-[#FFF]">Logo</h2>
                <div className="flex gap-8">
                    <Link to="/shop" className="text-4xl text-[#FFF]">Shop</Link>
                    <Link to="/shop" className="text-4xl text-[#FFF]">Contact Us</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;