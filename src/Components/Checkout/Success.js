import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Success = () => {

    return(
        <div className='px-16'>
            <div className="flex flex-col justify-center items-center mt-48">
                <div className="flex flex-col justify-center items-center px-9 py-8 bg-[#E5FFE3] rounded-full">
                    <div className="flex flex-col justify-center items-center px-9 py-8 bg-[#C3FFBF] rounded-full">
                        <div className="flex flex-col justify-center items-center px-9 py-8 bg-[#99FC92] rounded-full">
                            <div className="flex flex-col justify-center items-center px-16 py-14 bg-[#33CE27] rounded-full">
                                <FontAwesomeIcon icon={faCheck} className="text-8xl font-bold text-[#FFF] text-center" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-[1px] border-[#A9A9A9] my-16"/>
            <div className='flex flex-col justify-center items-center gap-16'>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <h2 className='text-6xl font-semibold text-[#24AD1A]'>Order Placed!</h2>
                    <p className='text-4xl text-[#76CA70]'>Sit back and relax!</p>
                </div>
                <Link to="/"><h2 className='text-3xl underline text-[#A2A2A2]'>Back To Home</h2></Link>
            </div>
        </div>
    )
}

export default Success;