import React from 'react';
import logo from '../assets/more/logo1.png';
import headerBg from '../assets/more/15.jpg';

const Header = () => {
    return (
        <header className="relative">
            {/* Background Image */}
            <img
                src={headerBg}
                alt="Header background"
                className="absolute w-full h-28 object-cover"
            />
            {/* Overlay Content */}
            <div className="relative z-10 flex justify-center items-center h-full">
                <img className="h-16 w-14" src={logo} alt="Logo" />
                <p className="font-rancho text-4xl ml-2 text-white">
                    Espresso Emporium
                </p>
            </div>

        </header>
    );
};

export default Header;
