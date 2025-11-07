import React from 'react';
import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-300 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee className='flex gap-5' speed={50} pauseOnHover={true}>
                <p className='font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab placeat numquam, magnam omnis facere deserunt?</p>
                <p className='font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab placeat numquam, magnam omnis facere deserunt?</p>
                <p className='font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab placeat numquam, magnam omnis facere deserunt?</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;