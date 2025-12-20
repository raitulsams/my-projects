import React from 'react';
import heroBg from '../assets/more/6.jpeg';

const Hero = () => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">

            {/* Background Image Wrapper */}
            <div className="absolute inset-0">
                <img
                    src={heroBg}
                    alt="Hero background"
                    className="w-full h-full object-cover"
                />
                {/* Optional: Dark overlay to ensure text is readable on mobile if image is bright */}
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Content Container */}
            {/* 1. 'relative z-10': Brings text above the image.
                2. 'flex items-center': Vertically centers content.
                3. 'px-4': Small side padding for mobile.
                4. 'md:px-20': Restores your original left spacing on desktop.
            */}
            <div className="relative z-10 flex items-center h-screen px-4 md:px-20">

                {/* Text Wrapper */}
                {/* 1. 'text-center': Centers text on mobile.
                   2. 'md:text-left': Aligns text left on larger screens.
                */}
                <div className="max-w-3xl w-full text-center md:text-left">

                    {/* Responsive Heading Size */}
                    <h2 className="text-3xl md:text-5xl font-medium font-rancho text-white leading-tight">
                        Would you like a Cup of Delicious Coffee?
                    </h2>

                    {/* Responsive Paragraph */}
                    <p className="text-sm md:text-[16px] mt-4 text-gray-100 font-raleway leading-relaxed">
                        It's coffee time - Sip & Savor - Relaxation in every sip!
                        Get the nostalgia back!! Your companion of every moment!!!
                        Enjoy the beautiful moments and make them memorable.
                    </p>

                    {/* Button Alignment */}
                    <div className="mt-8 md:mt-10">
                        <button className="btn w-36 text-[#242222] bg-[#E3B577] hover:bg-[#d6a666] border-none rounded-sm">
                            Learn More
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;