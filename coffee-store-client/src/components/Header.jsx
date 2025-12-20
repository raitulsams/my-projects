import React from 'react';
import logo from '../assets/more/logo1.png';
import headerBg from '../assets/more/15.jpg';

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
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Content */}
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

        </header>
    );
};

export default Header;
