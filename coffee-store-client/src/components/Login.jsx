import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router';
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { MdArrowForward } from "react-icons/md";
import { SiGoogle } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { TbBrandTwitter } from "react-icons/tb";
import bgLeaf from '../assets/more/11.png'; // Make sure this path is correct

// --- Reusable Input Field Component ---
const InputField = ({ label, name, type = 'text', placeholder, className = '', children }) => (
    <div className={`flex flex-col gap-2 ${className}`}>
        <label htmlFor={name} className="font-semibold text-base text-gray-700 font-raleway">
            {label}
        </label>
        <div className="relative">
            <input
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                required
                className="input w-full p-3 rounded-md bg-white text-black border border-gray-200 focus:outline-none focus:border-[#D2B48C] font-raleway placeholder-gray-400"
            />
            {/* Render children (like the eye icon) if passed */}
            {children}
        </div>
    </div>
);

// --- Main Component ---
const Login = () => {
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // const { signInUser, setUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        setError('');

        // --- 1. Get Form Data (The "AddCoffee" way) ---
        const form = event.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Destructure values specifically needed for Auth
        const { email, password } = data;

        // --- 2. Process Login ---
        // signInUser(email, password)
        //     .then(result => {
        //         form.reset();
        //         setUser(result.user);
        //         navigate(location?.state || '/');
        //     })
        //     .catch(err => {
        //         setError(err.message.replace('Firebase: ', ''));
        //     });
    };

    return (
        <div
            className="min-h-screen w-full bg-[#F4F3F0] p-4 md:p-6 bg-contain object-cover flex items-center justify-center"
            style={{ backgroundImage: `url(${bgLeaf})` }}
        >
            <div className="w-full max-w-md">

                {/* Back Link */}
                <div className="mb-6">
                    <Link to="/" className="inline-flex items-center gap-2 font-rancho text-2xl text-gray-700 hover:text-[#D2B48C] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                        Back to home
                    </Link>
                </div>

                {/* Main Card */}
                <div className="bg-[#F4F3F0]/90 border border-white/50 p-6 md:p-10 rounded-lg shadow-sm">

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-rancho font-bold text-[#331A15]">Login</h2>
                        <p className="mt-2 text-gray-600 font-raleway">Welcome back! Please enter your details.</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleLogin}>
                        <div className="flex flex-col gap-5">

                            {/* Email Input using Reusable Component */}
                            <InputField
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                            />

                            {/* Password Input using Reusable Component + Icon */}
                            <InputField
                                label="Password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                            >
                                <span
                                    className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-[#331A15] transition-colors"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <VscEyeClosed size={20} /> : <VscEye size={20} />}
                                </span>
                            </InputField>

                            {/* Error Message */}
                            {error && (
                                <p className="text-red-500 text-sm font-raleway">{error}</p>
                            )}

                            {/* Submit Button */}
                            <button className="w-full py-3 mt-2 rounded-md bg-[#D2B48C] hover:bg-[#C1A37B] text-[#331A15] font-rancho text-2xl font-bold transition-colors border-2 border-[#331A15] flex items-center justify-center gap-2">
                                Login <MdArrowForward size={20} />
                            </button>
                        </div>
                    </form>

                    {/* Footer / Socials */}
                    <div className="mt-8 text-center">
                        <div className="flex w-full flex-col">
                            <div className="divider text-base text-gray-400 font-raleway">Or sign in with</div>
                        </div>

                        <div className="flex justify-center gap-3 mt-4">
                            <button className="btn btn-outline hover:bg-[#D2B48C] hover:border-[#331A15] hover:text-[#331A15] text-[#331A15] rounded-full px-3">
                                <SiGoogle size={20} />
                            </button>
                            <button className="btn btn-outline hover:bg-[#D2B48C] hover:border-[#331A15] hover:text-[#331A15] text-[#331A15] rounded-full px-3">
                                <FiGithub size={20} />
                            </button>
                            <button className="btn btn-outline hover:bg-[#D2B48C] hover:border-[#331A15] hover:text-[#331A15] text-[#331A15] rounded-full px-3">
                                <TbBrandTwitter size={20} />
                            </button>
                        </div>

                        <p className="mt-6 text-base text-gray-600 font-raleway">
                            Don't have an account?{" "}
                            <Link className="text-[#331A15] font-bold underline hover:text-[#D2B48C] transition-colors" to="/SignUp">
                                Create one
                            </Link>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login; 