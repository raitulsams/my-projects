import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <NavLink to={"/"} className="btn btn-ghost text-xl">Firebase</NavLink>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <NavLink to={"/login"}><li><a>Login</a></li></NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Header