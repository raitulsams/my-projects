import React from 'react';
import ImgAroma from '../assets/icons/1.png';
import ImgGrades from '../assets/icons/2.png';
import ImgBeans from '../assets/icons/3.png';
import ImgTaste from '../assets/icons/4.png';

const Qualities = () => {
    // Storing data in an array makes the code cleaner and easier to manage
    const qualitiesData = [
        {
            id: 1,
            image: ImgAroma,
            title: "Awesome Aroma",
            description: "You will definitely be a fan of the design & aroma of your coffee"
        },
        {
            id: 2,
            image: ImgGrades,
            title: "High Quality",
            description: "We served the coffee to you maintaining the best quality"
        },
        {
            id: 3,
            image: ImgBeans,
            title: "Pure Grades",
            description: "The coffee is made of the green coffee beans which you will love"
        },
        {
            id: 4,
            image: ImgTaste,
            title: "Proper Roasting",
            description: "Your coffee is brewed by first roasting the green coffee beans"
        },
    ];

    return (
        <div className='bg-[#dfd3a8] py-10 md:py-14'>
            {/* Container to handle width and padding responsive behavior */}
            <div className='container mx-auto px-6 md:px-12 lg:px-20'>

                {/* GRID SYSTEM: 
                    - grid-cols-1: Mobile (1 item per row)
                    - md:grid-cols-2: Tablet (2 items per row)
                    - lg:grid-cols-4: Desktop (4 items per row)
                */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>

                    {qualitiesData.map((item) => (
                        <div key={item.id} className='space-y-3 text-center md:text-left'>
                            {/* Icon Wrapper - Centered on mobile, Left on desktop */}
                            <div className='flex justify-center md:justify-start h-16 items-center'>
                                <img src={item.image} alt={item.title} className='object-contain' />
                            </div>

                            <div>
                                <h3 className='font-rancho text-2xl md:text-[35px] text-[#331A15] mb-2'>
                                    {item.title}
                                </h3>
                                <p className='font-raleway text-[#1B1A1A] text-sm md:text-base leading-relaxed'>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Qualities;