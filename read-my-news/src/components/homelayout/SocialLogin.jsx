import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
const SocialLogin = () => {
    return (
        <div>
            <h2 className='text-xl text-base-400 font-bold mb-4'>Login with</h2>
            <div className='flex flex-col gap-3 mb-4'>
                <button className="btn btn-outline hover:bg-gradient-to-r from-blue-500 via-red-500 to-yellow-400 hover:text-white transition-all duration-300"><FaGoogle size={20}></FaGoogle>Login with Google</button>
                <button className="btn btn-outline hover:bg-gradient-to-r from-blue-600 to-blue-800 hover:text-white transition-all duration-300"><FaFacebookF size={20}></FaFacebookF>Login with Facebook</button>
            </div>
        </div>
    );
};

export default SocialLogin;