import React from 'react';
import { Link, useLoaderData } from 'react-router';
import bgLeaf from '../assets/more/11.png';

const CoffeeDetail = () => {
    // Assuming you are using a loader to fetch data. 
    // If passing via props, replace this with const { coffee } = props;
    const coffee = useLoaderData();
    console.log("Coffee details: ", coffee);

    const { _id, name, chef, supplier, price, category, details, photo } = coffee;

    return (
        // Same outer container structure as your AddCoffee component
        <div
            className="min-h-screen w-full bg-[#F4F3F0] p-4 md:p-6 bg-contain object-cover font-raleway"
            style={{ backgroundImage: `url(${bgLeaf})` }}
        >

            {/* 'Back to home' Link - Exactly matching your AddCoffee style */}
            <div className="max-w-4xl mx-auto mb-8">
                <Link to="/" className="inline-flex items-center gap-2 font-rancho text-2xl text-gray-700 hover:text-[#D2B48C] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Back to home
                </Link>
            </div>

            {/* Main Content Card */}
            <div className="bg-[#F4F3F0]/90 w-full px-8 py-16 md:px-20 md:py-24 rounded-lg shadow-sm mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                {/* Left Side: Image */}
                {/* Centered on mobile, Left aligned on desktop */}
                <div className="flex justify-center md:justify-start">
                    <img
                        src={photo}
                        alt={name}
                        className="max-h-100 w-full object-contain drop-shadow-xl"
                    />
                </div>

                {/* Right Side: Details */}
                <div className="space-y-4">
                    {/* Title uses the Rancho font and specific brown color */}
                    <h2 className="text-4xl font-rancho font-bold text-[#331A15] mb-6 drop-shadow-md">
                        Niceties
                    </h2>

                    <div className="space-y-3 text-lg text-[#5C5B5B]">
                        <p>
                            <span className="font-bold text-[#1B1A1A]">Name: </span>
                            {name}
                        </p>
                        <p>
                            <span className="font-bold text-[#1B1A1A]">Chef: </span>
                            {chef}
                        </p>
                        <p>
                            <span className="font-bold text-[#1B1A1A]">Supplier: </span>
                            {supplier}
                        </p>
                        <p>
                            <span className="font-bold text-[#1B1A1A]">Price: </span>
                            {price}
                        </p>
                        <p>
                            <span className="font-bold text-[#1B1A1A]">Category: </span>
                            {category}
                        </p>
                        <p>
                            <span className="font-bold text-[#1B1A1A]">Details: </span>
                            {details}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CoffeeDetail;