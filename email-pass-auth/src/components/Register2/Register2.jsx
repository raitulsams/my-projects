import { auth } from "../../firebase.init";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { AuthContext } from "../../provides/AuthProviders";
import { useContext, useState } from "react";

const Register2 = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const { createUser } = useContext(AuthContext);
    // console.log("AuthProviders context:", createUser);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");
        const email = event.target.email.value;
        const password = event.target.password.value;
        const username = event.target.username.value;
        console.log("Email:", email, "Password:", password, "Username:", username);
        setError("");
        createUser(email, password)
            .then((result) => {
                console.log(result.user)
            })
            .catch((err) => {
                console.log("ERROR: ", err)
            })

    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-4">
                    <div className="card-body ">
                        <fieldset className="fieldset relative">
                            <label className="label">Username</label>
                            <input name="username" type="text" className="input" placeholder="User name" />
                            <label className="label">Email</label>
                            <input name="email" type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input name="password" type={showPassword ? "text" : "password"} className="input pr-10" placeholder="Password" />
                            {/* <fieldset className="fieldset bg-base-100 rounded-box">
                                <label className="label">
                                    <input name="remember" type="checkbox" defaultChecked className="checkbox" />
                                    Remember me
                                </label>
                            </fieldset> */}
                            <button className="btn btn-neutral mt-4">Login</button>
                            <button type="button" onClick={() => { setShowPassword(!showPassword) }} className="btn btn-ghost btn-circle btn-sm absolute right-5 top-43 z-10">
                                {
                                    showPassword ? <IoEyeOff /> : <IoEye />
                                }
                            </button>
                        </fieldset>
                        {
                            error && <p className="text-red-500 text-sm mt-2">{error}</p>
                        }
                        {
                            success && <p className="text-green-500 text-sm mt-2">User registered successfully!</p>
                        }

                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register2