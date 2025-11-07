import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase.init";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useState } from "react";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");
        const email = event.target.email.value;
        const password = event.target.password.value;
        const remember = event.target.remember.checked;
        // console.log("Email:", email);
        // console.log("Password:", password);
        // console.log("Remember me:", remember);

        // Validate remember checkbox
        setError("");
        if (!remember) {
            setError("Remember me must be checked");
            return;
        }


        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log("User registered:", user);
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        console.log("Email verification sent");
                    });
                setSuccess(true);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Error registering user:", errorCode, errorMessage);
                setSuccess(false);
                setError(errorMessage);
            });
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-4">
                    <div className="card-body ">
                        <fieldset className="fieldset relative">
                            <label className="label">Email</label>
                            <input name="email" type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input name="password" type={showPassword ? "text" : "password"} className="input pr-10" placeholder="Password" />
                            <fieldset className="fieldset bg-base-100 rounded-box">
                                <label className="label">
                                    <input name="remember" type="checkbox" defaultChecked className="checkbox" />
                                    Remember me
                                </label>
                            </fieldset>
                            <button className="btn btn-neutral mt-4">Login</button>
                            <button type="button" onClick={() => { setShowPassword(!showPassword) }} className="btn btn-ghost btn-circle btn-sm absolute right-5 top-25 z-10">
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

export default Register