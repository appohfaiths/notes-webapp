import { Link } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";

export const CustomButton = () => {
    return (
        <Link to='/create'>
            <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
                Create <FaPlusCircle className='inline-block' />
            </button>
        </Link>
    )
}
