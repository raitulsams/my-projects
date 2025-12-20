import React from 'react';

const Socials = () => {
    // Updated with your specific image links
    const images = [
        "https://i.ibb.co/PZXwJDYZ/Rectangle-9.png",
        "https://i.ibb.co/qFpJDGyL/Rectangle-10.png",
        "https://i.ibb.co/0VW4XSxg/Rectangle-11.png",
        "https://i.ibb.co/Nd5dj1PJ/Rectangle-12.png",
        "https://i.ibb.co/XxNhqjLS/Rectangle-13.png",
        "https://i.ibb.co/n86VSZzZ/Rectangle-14.png",
        "https://i.ibb.co/KJRWPR1/Rectangle-15.png",
        "https://i.ibb.co/HD7G01Rd/Rectangle-16.png",
    ];

    return (
        <section className="w-full py-16 bg-white flex flex-col items-center">
            {/* Import Fonts in your index.html or global CSS: 
          @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400&family=Rancho&display=swap'); 
      */}

            {/* Header Section */}
            <div className="text-center mb-12 relative">
                <p className="font-['Raleway'] text-[#1B1A1A] text-[20px] leading-[26px] mb-2">
                    Follow Us Now
                </p>

                {/* Title with Blur Effect */}
                <div className="relative inline-block">
                    <h2 className="font-['Rancho'] text-[#331A15] text-[55px] leading-[68px] absolute inset-0 blur-[3px] opacity-70 select-none">
                        Follow on Instagram
                    </h2>
                    <h2 className="font-['Rancho'] text-[#331A15] text-[55px] leading-[68px] relative z-10">
                        Follow on Instagram
                    </h2>
                </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-[1400px]">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="w-[312px] h-[350px] overflow-hidden rounded-[10px] hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
                    >
                        <img
                            src={img}
                            alt={`Instagram post ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Socials;