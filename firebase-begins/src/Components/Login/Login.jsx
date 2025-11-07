import React, { useState } from 'react'
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.init"
const Login = () => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result);
                setUser(result.user);
            })
            .catch(error => {
                console.log("ERROR:", error)
                setUser(null);
            })
    }
    const handleGoogleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser(null);
        }).catch((error) => {
            // An error happened.
            console.log("ERROR:", error);
        });
    }
    return (
        <>
            <div className='grid justify-center items-center p-4'>
                <label className="input">
                    <input type="text" placeholder="Name" /> {user && user.displayName}
                </label>
                <label class="input validator">
                    <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            stroke-linejoin="round"
                            stroke-linecap="round"
                            stroke-width="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </g>
                    </svg>
                    <input type="email" placeholder="mail@site.com" /> {user && user.email}
                </label>
                <div class="validator-hint hidden">Enter valid email address</div>

                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <path
                                d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                            ></path>
                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </g>
                    </svg>
                    <input
                        type="password"
                        required
                        placeholder="Password"
                        minlength="8"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                    />
                </label>
                <p className="validator-hint hidden">
                    Must be more than 8 characters, including
                    <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                </p>
            </div>
            <div className='grid justify-center items-center mt-[50px]'>
                {
                    user ?
                        <button onClick={handleGoogleSignOut} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Sign out</button>
                        :
                        <button onClick={handleGoogleSignIn} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Sign in with google</button>

                }

            </div>

        </>
    )
}

export default Login