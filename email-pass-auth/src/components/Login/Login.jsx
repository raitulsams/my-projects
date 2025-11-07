import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase.init";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useState, useRef, useContext } from "react";
import { AuthContext } from "../../provides/AuthProviders";
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const emailRef = useRef();
    const { signInUser } = useContext(AuthContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");
        const email = event.target.email.value;
        const password = event.target.password.value;
        setError("");
        signInUser(email, password)
            .then(result => { console.log(result.user) })
            .catch(error => { console.log("ERROR: ", error.message) })
        // signInWithEmailAndPassword(auth, email, password)
        //     .then((userCredential) => {
        //         // Signed in 
        //         const user = userCredential.user;
        //         console.log("User registered:", user);
        //         if (!user.emailVerified) {
        //             console.log("Email is verified");
        //             setError("Please verify your email before logging in.");
        //             return;
        //         }
        //     })
        //     .catch((error) => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         console.error("Error registering user:", errorCode, errorMessage);
        //         setError(errorMessage);
        //     });
    }

    const handleForgotPassword = () => {
        console.log("Forgot password clicked", emailRef.current.value);
        // Implement forgot password functionality here
        const email = emailRef.current.value;
        if (!email) {
            setError("Please enter your email to reset your password.");
            return;
        }
        else {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert("Password reset email sent. Please check your inbox.");
                    console.log("Password reset email sent");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log("Error sending password reset email:", errorCode, errorMessage);
                    setError(errorMessage);
                });
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <div className="hero bg-base-200 min-h-auto">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <div className="card-body">
                                <fieldset className="fieldset relative">
                                    <label className="label">Email</label>
                                    <input name='email' ref={emailRef} type="email" className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input name='password' type={showPassword ? "text" : "password"} className="input" placeholder="Password" />
                                    <div onClick={handleForgotPassword}><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                    {
                                        error && <p className="text-red-500 text-sm mt-2">{error}</p>
                                    }
                                    <button type="button" onClick={() => { setShowPassword(!showPassword) }} className="btn btn-ghost btn-circle btn-sm absolute right-5 top-25 z-10">
                                        {
                                            showPassword ? <IoEyeOff /> : <IoEye />
                                        }
                                    </button>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Login