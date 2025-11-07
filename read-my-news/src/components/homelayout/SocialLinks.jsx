import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
const SocialLinks = () => {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Find Us On</h2>
            <div className=" bg-white rounded-lg shadow-sm border border-gray-200 ">
                <div className="flex flex-col divide-y divide-gray-200">
                    <button onClick={() => window.open("https://www.facebook.com", "_blank")} className="flex items-center gap-3 py-3 px-5 w-full hover:bg-gray-50 hover:cursor-pointer transition">
                        <FaFacebookF size={26} className="p-1.5 bg-gray-100 text-blue-600 rounded-full" />
                        <span className="text-gray-700 font-medium">Facebook</span>
                    </button>

                    <button onClick={() => window.open("https://www.x.com", "_blank")} className="flex items-center gap-3 py-3 px-5 w-full hover:bg-gray-50 hover:cursor-pointer transition">
                        <BsTwitterX size={26} className="p-1.5 bg-gray-100 text-sky-500 rounded-full" />
                        <span className="text-gray-700 font-medium">Twitter</span>
                    </button>

                    <button onClick={() => window.open("https://www.instagram.com", "_blank")} className="flex items-center gap-3 py-3 px-5 w-full hover:bg-gray-50 hover:cursor-pointer transition">
                        <IoLogoInstagram size={26} className="p-1.5 bg-gray-100 text-pink-500 rounded-full" />
                        <span className="text-gray-700 font-medium">Instagram</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLinks;