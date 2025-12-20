import React from 'react';
import Qualities from './Qualities';
import PopularProducts from './PopularProducts';
import Product from './Product';
import Hero from './Hero';
import { useLoaderData } from 'react-router';
const Home = () => {
    const coffees = useLoaderData();
    // console.log("Coffees received from server: ", coffees);
    return (
        <div className='bg-white'>
            <Hero></Hero>
            <Qualities></Qualities>
            <PopularProducts></PopularProducts>
            <div className="container mx-auto px-4 md:px-20 my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {coffees.map(coffee => (
                        <Product key={coffee._id} coffee={coffee} />
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Home;