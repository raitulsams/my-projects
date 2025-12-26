import React from 'react';
import logo from '../assets/more/logo1.png';
import headerBg from '../assets/more/15.jpg';
import { PiUserBold } from "react-icons/pi";
import { PiUsersBold } from "react-icons/pi";
import { Link, NavLink } from 'react-router';

const Header = () => {
    return (
        <header className="relative h-20 w-full overflow-hidden">

            {/* Background Image */}
            <img
                src={headerBg}
                alt="Header background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Optional dark overlay */}
            {/* <div className="absolute inset-0 bg-black/20"></div> */}

            {/* Center Content (Existing) */}
            <Link to="/">
                <div className="relative z-10 flex justify-center items-center h-full">
                    <img
                        src={logo}
                        alt="Espresso Emporium Logo"
                        className="h-16 w-14"
                    />
                    <p className="font-rancho text-4xl ml-2 text-white">
                        Espresso Emporium
                    </p>
                </div>
            </Link>


            {/* --- NEW RIGHT LOGO --- */}
            {/* right-4: adds spacing from the right edge */}
            {/* top-1/2 -translate-y-1/2: perfectly centers it vertically */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
                <div className='flex gap-3'>
                    <NavLink to="/login">
                        <PiUserBold size={25} className="text-white" />
                    </NavLink>
                    <NavLink to="/users">
                        <PiUsersBold size={25} className="text-white" />
                    </NavLink>
                </div>
            </div>

        </header>
    );
};

export default Header;
