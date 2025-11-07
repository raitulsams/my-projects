import React, { use, useState } from 'react';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { MdArrowForward } from "react-icons/md";
import { SiGoogle } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { TbBrandTwitter } from "react-icons/tb";
import { AuthContext } from '../contexts/AuthContext';
const Login = () => {
    const { signInUser } = use(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const handleTogglePassword = () => {
        // Only toggle if the password field is not empty
        if (password) {
            setShowPassword(!showPassword);
        }
    };
    const handleLogin = (e) => {
        // alert('Login form submitted', e);
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log(result)
                // alert('User logged in successfully:', user);
                form.reset();
                setPassword('');
                navigate(location?.state || '/');
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
                        <form onSubmit={handleLogin} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 m-auto">
                            {/* <legend className="fieldset-legend">Login</legend> */}

                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" required />

                            <label className="label">Password</label>
                            <div className='relative'>
                                <input name='password' type={showPassword ? "text" : "password"} className="input" placeholder="Password" value={password}
                                    onChange={(e) => setPassword(e.target.value)} required />
                                <span
                                    className={`absolute top-1/2 right-3 -translate-y-1/2 ${password ? 'cursor-pointer' : 'cursor-default'}`}
                                    onClick={handleTogglePassword}>
                                    {
                                        showPassword ? <VscEyeClosed size={23} /> : <VscEye size={23} />
                                    }
                                </span>
                            </div>

                            <button className="btn btn-outline btn-primary mt-4">Login<MdArrowForward size={16}></MdArrowForward></button>
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
                                    <p className='text-base text-gray-200'>Don't have account? <Link className="text-[var(--color-primary)] hover:underline" to="/register"> Create one</Link></p>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;