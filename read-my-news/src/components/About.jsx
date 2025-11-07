import React from 'react';
import { motion as Motion } from 'framer-motion';
const About = () => {
    return (
        <Motion.div
            className='mx-2 shadow-lg'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            // whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
        >
            <div
                className="hero max-w-full "
                style={{
                    backgroundImage:
                        "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-white text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-2xl font-bold">Hello there</h1>
                        <p className="mb-20 text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, amet. Accusantium molestias aspernatur, reprehenderit repudiandae commodi excepturi quas, minima odio vero impedit fugiat molestiae consequuntur. Aspernatur rerum veniam asperiores! Itaque?
                        </p>
                        <div className="flex flex-col gap-2 items-center text-center">
                            <h1 className="text-2xl font-bold">
                                Sign up to our newsletter
                            </h1>
                            <span>Get weekly access to our best deals, tips and tricks</span>
                        </div>

                        <div className="flex gap-2">
                            <input type="email" className="input input-bordered" placeholder="Enter your email" />
                            <button className="btn btn-primary">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </Motion.div>

    );
};

export default About;