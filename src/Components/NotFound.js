import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <div className="flex flex-col justify-center items-center mx-16 gap-20">
            <h2 className="mt-36 text-9xl font-bold">Oops!</h2>
            <h2 className="text-5xl font-bold">404 - Page Not Found</h2>
            <p className="text-4xl text-center">The page you are looking for might have been removed, had its name
                changed or is temporarily unavailable.
            </p>
            <Link to="/"><h2 className='text-3xl underline text-[#666666]'>Back To Home</h2></Link>
        </div>
    )
}

export default NotFound;