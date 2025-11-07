import React, { use } from 'react';
import { NavLink } from 'react-router';
import userIcon from '../assets/user.png';
import { motion as Motion } from 'framer-motion';
import { AuthContext } from '../provider/AuthProvider';
const NavBar = () => {
    const { user, logOut, setUser, bookmarkedNews } = use(AuthContext);
    const handleLogout = () => {
        // Implement logout functionality
        console.log("Logout clicked");

        logOut().then(() => {
            console.log("User signed out successfully");
            setUser(null);
        }).catch((error) => {
            console.log("Error signing out:", error);
        });
    };
    return (
        <div>
            <div className='flex items-center'>
                <div className="nav-left flex-1">
                    {
                        user && <span className='text-sm text-gray-600'>Welcome, {user?.displayName || user.mail}</span>
                    }
                </div>
                <div className="nav-mid flex gap-6">
                    <Motion.div
                        whileHover={{ scale: 1.1, transition: { duration: 0.2, ease: "easeOut" }, }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "tween" }}
                    >
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? "font-bold border-b-2 border-[#FF8C47] text-[#FF8C47]"
                                    : "font-default"
                            }
                            to="/category/0"
                        >
                            <span>Home</span>
                        </NavLink>
                    </Motion.div>
                    <Motion.div
                        whileHover={{ scale: 1.1, transition: { duration: 0.2, ease: "easeOut" }, }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "tween" }}
                    >
                        <NavLink className={({ isActive }) =>
                            isActive ? 'font-bold border-b-1 text-[#FF8C47]' : 'font-default'
                        } to="/about">
                            <span>About</span>
                        </NavLink>
                    </Motion.div>
                    <Motion.div
                        whileHover={{ scale: 1.1, transition: { duration: 0.2, ease: "easeOut" }, }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "tween" }}
                    > <NavLink className={({ isActive }) =>
                        isActive ? 'font-bold border-b-1 text-[#FF8C47]' : 'font-default'
                    } to="/career">
                            <span>Faq</span>
                        </NavLink>
                    </Motion.div>
                    <Motion.div
                        whileHover={{ scale: 1.1, transition: { duration: 0.2, ease: "easeOut" }, }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "tween" }}
                    >
                        <NavLink className={({ isActive }) =>
                            isActive ? 'font-bold border-b-1 text-[#FF8C47]' : 'font-default'
                        } to="/bookmarkednews">
                            {
                                bookmarkedNews.length > 0 && (
                                    <div className="indicator">
                                        <span className="indicator-item badge badge-secondary">{bookmarkedNews.length}</span>
                                        {/* <button className="btn">Bookmarked</button> */}
                                        <span className=''>Bookmarked</span>
                                    </div>
                                )
                            }

                        </NavLink>
                    </Motion.div>
                </div>
                <div className="nav-right flex gap-3 justify-end flex-1">
                    <img src={userIcon} className='' alt="" />
                    {
                        user ?
                            <button onClick={handleLogout} className='btn btn-primary px-10'>Logout</button>
                            :
                            <NavLink to="/login">
                                {/* <button className='btn btn-primary px-10'>Login</button> */}
                                <button className="btn btn-outline btn-primary">Login</button>
                            </NavLink>

                    }

                </div>
            </div>
            {/* <div className="divider"></div> */}
        </div>
    );
};

export default NavBar;