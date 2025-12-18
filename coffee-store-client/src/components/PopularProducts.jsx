import React from 'react';

const PopularProducts = () => {
    return (
        <div>
            <div className='flex flex-col justify-center bg-white items-center'>
                <p className="font-rancho text-[20px] text-[#1B1A1A] mt-8">--- Sip & Savor ---</p>
                <p className="font-rancho text-[35px] text-[#331A15]">Our Popular Products</p>
                <button className="btn w-32 font-rancho font-light text-[24px] text-[#FFFFF] bg-[#E3B577] mt-2">Add Coffee</button>
            </div>
        </div>
    );
};

export default PopularProducts;