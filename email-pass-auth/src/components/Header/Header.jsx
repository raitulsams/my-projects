import { NavLink } from "react-router"
import React from 'react'
import { useContext } from "react";
import { AuthContext } from "../../provides/AuthProviders";
const Header = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const handleSignOut = () => {
        signOutUser().then(() => { console.log("User signed out") }).catch((error) => { console.log("Error signing out:", error) });
    }
    const links = <>
        <li><NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
        <li><NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>Login</NavLink></li>
        <li><NavLink to="/register" className={({ isActive }) => isActive ? "active" : ""}>Register</NavLink></li>
        <li><NavLink to="/register2" className={({ isActive }) => isActive ? "active" : ""}>Register2</NavLink></li>
    </>
    const dropDownItems = (
        <>
            <li>
                <NavLink to="/item1">Item 1</NavLink>
            </li>

            <li>
                <NavLink to="/parent">Parent</NavLink>
                <ul className="p-2">
                    <li>
                        <NavLink to="/parent/submenu1">Submenu 1</NavLink>
                    </li>
                    <li>
                        <NavLink to="/parent/submenu2">Submenu 2</NavLink>
                    </li>
                </ul>
            </li>

            <li>
                <NavLink to="/item3">Item 3</NavLink>
            </li>
        </>
    );
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {dropDownItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Email Auth</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <NavLink className="btn">{user?.email}</NavLink>
                                <button onClick={handleSignOut} className="btn btn-error ml-2">Logout</button>
                            </>
                            :
                            <>
                                <NavLink to="/login" className="btn">Login</NavLink>
                            </>

                    }

                </div>
            </div>
        </>
    )
}

export default Header