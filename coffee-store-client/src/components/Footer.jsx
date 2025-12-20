import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import footerBg from '../assets/more/13.jpg'; // Adjust path
import footerBottomBg from '../assets/more/24.jpg'; // Adjust path
import logo from '../assets/more/logo1.png'; // Adjust path

const Footer = () => {
    return (
        <footer className="w-full">
            {/* Main Footer Section */}
            <div
                className="bg-cover bg-center bg-no-repeat pt-20 pb-12"
                style={{ backgroundImage: `url(${footerBg})` }}
            >
                <div className="container mx-auto px-4 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center">

                    {/* Left Column: Brand & Contact Info */}
                    <div className="space-y-6">
                        {/* Logo & Title */}
                        <div className="space-y-4">
                            <img src={logo} alt="Espresso Emporium" className="w-16 h-16" />
                            <h2 className="font-rancho text-4xl font-bold text-[#331A15]">
                                Espresso Emporium
                            </h2>
                            <p className="font-raleway text-[#1B1A1A] text-lg leading-relaxed max-w-md">
                                Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.
                            </p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            <FaFacebook className="text-[#331A15] text-3xl cursor-pointer hover:scale-110 transition-transform" />
                            <FaTwitter className="text-[#331A15] text-3xl cursor-pointer hover:scale-110 transition-transform" />
                            <FaInstagram className="text-[#331A15] text-3xl cursor-pointer hover:scale-110 transition-transform" />
                            <FaLinkedin className="text-[#331A15] text-3xl cursor-pointer hover:scale-110 transition-transform" />
                        </div>

                        {/* Get in Touch */}
                        <div className="space-y-4 mt-8">
                            <h3 className="font-rancho text-4xl text-[#331A15] font-bold">Get in Touch</h3>

                            <div className="space-y-3 font-raleway text-[#1B1A1A] text-lg">
                                <p className="flex items-center gap-3">
                                    <FaPhone className="text-[#331A15]" />
                                    +88 01533 333 333
                                </p>
                                <p className="flex items-center gap-3">
                                    <FaEnvelope className="text-[#331A15]" />
                                    info@gmail.com
                                </p>
                                <p className="flex items-center gap-3">
                                    <FaMapMarkerAlt className="text-[#331A15]" />
                                    72, Wall street, King Road, Dhaka
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="space-y-8 mt-10 lg:mt-0">
                        <h2 className="font-rancho text-4xl font-bold text-[#331A15]">Connect with Us</h2>

                        <form className="flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="input w-full p-3 rounded-md bg-white border-none focus:outline-none focus:ring-2 focus:ring-[#331A15] font-raleway placeholder:text-gray-400"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="input w-full p-3 rounded-md bg-white border-none focus:outline-none focus:ring-2 focus:ring-[#331A15] font-raleway placeholder:text-gray-400"
                            />
                            <textarea
                                rows="4"
                                placeholder="Message"
                                className="textarea w-full p-3 rounded-md bg-white border-none focus:outline-none focus:ring-2 focus:ring-[#331A15] font-raleway placeholder:text-gray-400 resize-none"
                            ></textarea>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    className="font-rancho text-2xl text-[#331A15] border-2 border-[#331A15] rounded-full px-6 py-2 hover:bg-[#331A15] hover:text-white transition-colors duration-300"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

            {/* Copyright Bar */}
            <div
                className="py-3 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${footerBottomBg})` }}
            >
                <p className="text-center font-rancho text-white text-xl">
                    Copyright Espresso Emporium ! All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;