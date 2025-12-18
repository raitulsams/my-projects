import React from 'react';
import heroBg from '../assets/more/6.jpeg';
import Qualities from './Qualities';
import PopularProducts from './PopularProducts';
import Product from './Product';
const Home = () => {
    return (
        <div className='bg-white'>
            <div className="relative min-h-screen overflow-hidden">

                {/* Background Image */}
                <img
                    src={heroBg}
                    alt="Hero background"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Centered Content */}
                <div className="absolute inset-0 left-20 flex flex-col justify-center px-4 max-w-3xl">
                    <h2 className="text-4xl font-medium font-rancho text-white">
                        Would you like a Cup of Delicious Coffee?
                    </h2>

                    <p className="text-[16px] mt-4 text-[#FFFFFF] font-raleway leading-relaxed">
                        It's coffee time - Sip & Savor - Relaxation in every sip!
                        Get the nostalgia back!! Your companion of every moment!!!
                        Enjoy the beautiful moments and make them memorable.
                    </p>

                    <button className="btn w-28 text-[#242222] bg-[#E3B577] mt-10">Learn More</button>

                </div>
            </div>
            <Qualities></Qualities>
            <PopularProducts></PopularProducts>
            <Product></Product>
        </div>
    );
};

export default Home;