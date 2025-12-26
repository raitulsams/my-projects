import React, { useState, use } from 'react';
import { Link } from 'react-router';
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { MdArrowForward } from "react-icons/md";
// import { AuthContext } from '../../provider/AuthProvider';
import bgLeaf from '../assets/more/11.png'; // Ensure path is correct
import { AuthContext } from '../contexts/AutoContext';
import Swal from 'sweetalert2';

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
                required={name !== 'phone'} // Phone is optional
                className="input w-full p-3 rounded-md bg-white text-black border border-gray-200 focus:outline-none focus:border-[#D2B48C] font-raleway placeholder-gray-400"
            />
            {/* Render children (like the eye icon) if passed */}
            {children}
        </div>
    </div>
);

// --- Main Component ---
const SignUp = () => {
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const { createUser } = use(AuthContext);
    console.log(createUser);

    // Access auth functions from Context
    // Assuming you have 'createUser' and 'updateUserProfile' in your provider
    // const { createUser, updateUserProfile, setUser } = useContext(AuthContext);
    // const navigate = useNavigate();

    const handleSignUp = (event) => {
        event.preventDefault();
        // setError('');

        // --- 1. Get Form Data ---
        const form = event.target;
        const formData = new FormData(form);
        const { email, password, ...rest } = Object.fromEntries(formData.entries());
        createUser(email, password)
            // save profile into to database
            .then(result => {
                console.log(result.user);
                const userProfile = {
                    email,
                    ...rest,
                    creationTime: result.user?.metadata?.creationTime,
                    lastLoginAt: result.user?.metadata?.lastSignInTime
                }
                fetch('http://localhost:3002/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('after saving in mongodb', data);
                        if (data.insertedId) {
                            Swal.fire({
                                title: "User Created.",
                                icon: "success",
                                draggable: true
                            });
                        }
                    })
            })
            .catch(err => {
                console.log(err);
            })

    };


    return (
        <div
            className="min-h-screen w-full bg-[#F4F3F0] p-4 md:p-6 bg-contain object-cover flex items-center justify-center"
            style={{ backgroundImage: `url(${bgLeaf})` }}
        >
            <div className="w-full max-w-2xl">

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
                <div className="bg-[#F4F3F0]/90 border border-white/50 p-6 md:p-12 rounded-lg shadow-sm">

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-rancho font-bold text-[#331A15]">Register</h2>
                        <p className="mt-2 text-gray-600 font-raleway">Create an account to order your favorite coffee.</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSignUp}>
                        {/* 2-Column Grid Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            {/* Full Name */}
                            <InputField
                                label="Name"
                                name="name"
                                placeholder="Enter your full name"
                            />

                            {/* Email */}
                            <InputField
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                            />

                            {/* Photo URL */}
                            <InputField
                                label="Photo URL"
                                name="photo"
                                placeholder="Link to your profile picture"
                            />

                            {/* Phone (Optional) */}
                            <InputField
                                label="Phone (Optional)"
                                name="phone"
                                type="tel"
                                placeholder="Enter your phone number"
                            />

                            {/* Password - Spans full width on mobile, moves to own row if needed */}
                            <div className="md:col-span-2">
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
                            </div>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <p className="text-red-500 text-sm font-raleway mt-4 text-center">{error}</p>
                        )}

                        {/* Submit Button */}
                        <button className="w-full py-3 mt-8 rounded-md bg-[#D2B48C] hover:bg-[#C1A37B] text-[#331A15] font-rancho text-2xl font-bold transition-colors border-2 border-[#331A15] flex items-center justify-center gap-2">
                            Register <MdArrowForward size={20} />
                        </button>
                    </form>

                    {/* Footer */}
                    <div className="mt-6 text-center">
                        <p className="text-base text-gray-600 font-raleway">
                            Already have an account?{" "}
                            <Link className="text-[#331A15] font-bold underline hover:text-[#D2B48C] transition-colors" to="/login">
                                Login
                            </Link>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUp;