// 
import React, { useContext, useState } from 'react';
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { SiGoogle } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { TbBrandTwitter } from "react-icons/tb";
import { NavLink, useNavigate } from 'react-router';
import { motion as Motion } from "framer-motion";
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const { createUser, setUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleTogglePassword = () => {
        if (password) setShowPassword(!showPassword);
    };

    // Animation variants
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

    const handleRegister = (e) => {
        e.preventDefault();
        // Handle registration logic here
        console.log("Registration form submitted", e.target);
        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, phone, email, password);
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                // console.log(createdUser);
                updateUserProfile({ displayName: name })
                    .then(
                        () => {
                            setUser(createdUser);
                            form.reset();
                            navigate('/');
                        }
                    )
                    .catch(
                        error => console.log("Profile update error:", error)
                    )

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    return (
        <div className="hero min-h-auto">
            <div className="hero-content text-center">
                <Motion.div
                    className="max-w-md"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <Motion.form onSubmit={handleRegister}
                        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 m-auto shadow-md"
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        <label className="label">Full Name</label>
                        <Motion.input
                            type="text"
                            name="name"
                            className="input input-primary"
                            placeholder="e.g. Al Sams"
                            required
                            whileHover="hover"
                            whileTap="tap"
                            variants={inputVariants}
                        />

                        <label className="label mt-2">Phone</label>
                        <Motion.input
                            type="tel"
                            name="phone"
                            className="input input-neutral"
                            placeholder="Phone"
                            required
                            whileHover="hover"
                            whileTap="tap"
                            variants={inputVariants}
                        />

                        <label className="label mt-2">Email</label>
                        <Motion.input
                            type="email"
                            name="email"
                            className="input input-accent"
                            placeholder="Email"
                            required
                            whileHover="hover"
                            whileTap="tap"
                            variants={inputVariants}
                        />

                        <label className="label mt-2">Password</label>
                        <div className="relative">
                            <Motion.input
                                type={showPassword ? "text" : "password"}
                                name="password"
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

                        <Motion.button
                            className="btn btn-active btn-primary mt-4"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Register
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
                                Already have an account?{" "}
                                <NavLink className="hover:underline text-[var(--color-primary)] font-semibold underline" to="..">
                                    Sign in
                                </NavLink>
                            </p>
                        </div>
                    </Motion.form>
                </Motion.div>
            </div>
        </div>
    );
};

export default Register;
