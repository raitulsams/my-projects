// import React, { use, useState } from 'react';
// // import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import { Link } from 'react-router';
// import { VscEye } from "react-icons/vsc";
// import { VscEyeClosed } from "react-icons/vsc";
// import { MdArrowForward } from "react-icons/md";
// import { SiGoogle } from "react-icons/si";
// import { FiGithub } from "react-icons/fi";
// import { TbBrandTwitter } from "react-icons/tb";
// // import { AuthContext } from '../contexts/AuthContext';
// const Login = () => {
//     // const { signInUser } = use(AuthContext);
//     const [showPassword, setShowPassword] = useState(false);
//     const [password, setPassword] = useState('');
//     // const navigate = useNavigate();
//     // const location = useLocation();
//     // console.log(location);
//     const handleTogglePassword = () => {
//         // Only toggle if the password field is not empty
//         if (password) {
//             setShowPassword(!showPassword);
//         }
//     };
//     const handleLogin = (e) => {
//         // alert('Login form submitted', e);
//         e.preventDefault();
//         const form = e.target;
//         const email = form.email.value;
//         const password = form.password.value;
//         console.log(email, password);

//         signInUser(email, password)
//             .then(result => {
//                 console.log(result)
//                 // alert('User logged in successfully:', user);
//                 form.reset();
//                 setPassword('');
//                 navigate(location?.state || '/');
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//     }
//     return (
//         <div>
//             <div className="hero min-h-auto">
//                 <div className="hero-content text-center">
//                     <div className="max-w-md">
//                         <form onSubmit={handleLogin} className="fieldset bg-base-200 bg-gray border-base-300 rounded-box w-xs border p-4 m-auto">
//                             {/* <legend className="fieldset-legend">Login</legend> */}

//                             <label className="label">Email</label>
//                             <input name='email' type="email" className="input" placeholder="Email" required />

//                             <label className="label">Password</label>
//                             <div className='relative'>
//                                 <input name='password' type={showPassword ? "text" : "password"} className="input" placeholder="Password" value={password}
//                                     onChange={(e) => setPassword(e.target.value)} required />
//                                 <span
//                                     className={`absolute top-1/2 right-3 -translate-y-1/2 ${password ? 'cursor-pointer' : 'cursor-default'}`}
//                                     onClick={handleTogglePassword}>
//                                     {
//                                         showPassword ? <VscEyeClosed size={23} /> : <VscEye size={23} />
//                                     }
//                                 </span>
//                             </div>

//                             <button className="btn btn-outline btn-primary mt-4">Login<MdArrowForward size={16}></MdArrowForward></button>
//                             <div>
//                                 <div className="flex w-full flex-col">
//                                     <div className="divider text-base text-gray-400">Or sign in with</div>
//                                 </div>
//                                 <div className='flex justify-center gap-3 mt-2'>
//                                     <button className="btn btn-outline hover:bg-white hover:text-gray-700 px-3 text-accent"><SiGoogle size={20}></SiGoogle></button>
//                                     <button className="btn btn-outline hover:bg-white hover:text-gray-700 px-3 text-accent"><FiGithub size={23}></FiGithub></button>
//                                     <button className="btn btn-outline hover:bg-white hover:text-gray-700 px-3 text-accent"><TbBrandTwitter size={23}></TbBrandTwitter></button>
//                                 </div>
//                             </div>
//                             <div className='mt-4'>
//                                 <div>
//                                     <p className='text-base text-base-400'>Don't have account? <Link className="text-[var(--color-primary)] font-semibold underline" to="register"> Create one</Link></p>
//                                 </div>
//                             </div>

//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;

import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router';
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { MdArrowForward } from "react-icons/md";
import { SiGoogle } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { TbBrandTwitter } from "react-icons/tb";
import { motion as Motion } from "motion/react"  // ✅ Import Framer Motion
import { AuthContext } from '../../provider/AuthProvider';
import { useNavigate, useLocation } from 'react-router';

const Login = () => {
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const { signInUser, setUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location);
    const handleTogglePassword = () => {
        if (password) setShowPassword(!showPassword);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signInUser(email, password)
            .then(result => {
                // console.log(result)
                form.reset();
                setPassword('');
                setUser(result.user);
                navigate(location?.state || '/');
            })
            .catch(error => {
                // console.log(error.code);
                setError(error.message);
            })
    };

    // Animation variants (for cleaner structure)
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const inputVariants = {
        hover: { scale: 1.02 },
        tap: { scale: 0.98 }
    };

    const iconVariants = {
        hover: { scale: 1.2, rotate: 5 },
        tap: { scale: 0.9 }
    };

    return (
        <div className="hero min-h-auto">
            <div className="hero-content text-center">
                <Motion.div
                    className="max-w-md"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <Motion.form
                        onSubmit={handleLogin}
                        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 m-auto shadow-md"
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        <label className="label">Email</label>
                        <Motion.input
                            name="email"
                            type="email"
                            className="input"
                            placeholder="Email"
                            required
                            whileHover="hover"
                            whileTap="tap"
                            variants={inputVariants}
                        />

                        <label className="label mt-2">Password</label>
                        <div className="relative">
                            <Motion.input
                                name="password"
                                type={showPassword ? "text" : "password"}
                                className="input"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                whileHover="hover"
                                whileTap="tap"
                                variants={inputVariants}
                            />
                            <span
                                className={`absolute top-1/2 right-3 -translate-y-1/2 ${password ? 'cursor-pointer' : 'cursor-default'}`}
                                onClick={handleTogglePassword}
                            >
                                {showPassword ? <VscEyeClosed size={23} /> : <VscEye size={23} />}
                            </span>
                        </div>
                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

                        <Motion.button
                            className="btn btn-outline btn-primary mt-4 flex items-center justify-center gap-1"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Login <MdArrowForward size={16} />
                        </Motion.button>

                        <div className="flex w-full flex-col">
                            <div className="divider text-base text-gray-400">Or sign in with</div>
                        </div>

                        <div className="flex justify-center gap-3 mt-2">
                            <Motion.button
                                className="btn btn-outline hover:bg-white hover:text-gray-700 px-3 text-accent"
                                variants={iconVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <SiGoogle size={20} />
                            </Motion.button>
                            <Motion.button
                                className="btn btn-outline hover:bg-white hover:text-gray-700 px-3 text-accent"
                                variants={iconVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <FiGithub size={23} />
                            </Motion.button>
                            <Motion.button
                                className="btn btn-outline hover:bg-white hover:text-gray-700 px-3 text-accent"
                                variants={iconVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <TbBrandTwitter size={23} />
                            </Motion.button>
                        </div>

                        <div className="mt-4">
                            <p className="text-base text-base-400">
                                Don't have an account?{" "}
                                <Link className="text-[var(--color-primary)] font-semibold underline" to="register">
                                    Create one
                                </Link>
                            </p>
                        </div>
                    </Motion.form>
                </Motion.div>
            </div>
        </div>
    );
};

export default Login;
