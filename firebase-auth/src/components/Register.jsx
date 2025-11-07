import React, { use, useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { SiGoogle } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { TbBrandTwitter } from "react-icons/tb";
import { AuthContext } from '../contexts/AuthContext';

const Register = () => {
    const { createUser } = use(AuthContext);
    console.log(createUser)
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleTogglePassword = () => {
        // Only toggle if the password field is not empty
        if (password) {
            setShowPassword(!showPassword);
        }
    };
    const hangleRegister = (e) => {
        // alert('Register form submitted', e);
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, phone, email, password);

        //Create User ------------

        // createUserWithEmailAndPassword(auth, email, password)
        //     .then((userCredential) => {
        //         const user = userCredential.user;
        //         console.log(userCredential);
        //     })
        //     .catch((error) => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         console.log("error", errorCode, errorMessage);
        //     });

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate('/home');
                form.reset();
            })
            .catch(error => {
                console.log(error)
            })


    }


    return (
        <div>
            <div className="hero bg-base-200 min-h-auto">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <form onSubmit={hangleRegister} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 m-auto">
                            <label className="label">Full Name</label>
                            <input type="text" name="name" className="input input-primary" placeholder="e.g. Al Sams" required />

                            <label className="label">Phone</label>
                            <input type="tel" name="phone" className="input input-neutral" placeholder="Phone"
                                required />

                            <label className="label">Email</label>
                            <input type="email" name="email" className="input nput-accent" placeholder="Email" required />

                            <label className="label">Password</label>
                            <div className='relative'>
                                <input type={showPassword ? "text" : "password"} name="password" className="input" placeholder="Password" value={password}
                                    onChange={(e) => setPassword(e.target.value)} required />
                                <span
                                    className={`absolute top-1/2 right-3 -translate-y-1/2 ${password ? 'cursor-pointer' : 'cursor-default'}`}
                                    onClick={handleTogglePassword}>
                                    {
                                        showPassword ? <VscEyeClosed size={23} /> : <VscEye size={23} />
                                    }
                                </span>
                            </div>

                            <button className="btn btn-active btn-primary mt-4">Register</button>
                            <div>
                                <div className="flex w-full flex-col">
                                    <div className="divider text-base text-gray-400">Or sign in with</div>
                                </div>
                                <div className='flex justify-center gap-3 mt-2'>
                                    <button className="btn btn-outline hover:bg-white hover:text-gray-700 px-3 text-white"><SiGoogle size={20}></SiGoogle></button>
                                    <button className="btn btn-outline hover:bg-white hover:text-gray-700 px-3 text-white"><FiGithub size={23}></FiGithub></button>
                                    <button className="btn btn-outline hover:bg-white hover:text-gray-700 px-3 text-white"><TbBrandTwitter size={23}></TbBrandTwitter></button>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <div>
                                    <p className='text-base text-gray-200'>Already have an account? <NavLink className="hover:underline text-[var(--color-primary)]" to="..">Sign in</NavLink></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;