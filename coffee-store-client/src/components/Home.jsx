import React from 'react';
import Qualities from './Qualities';
import PopularProducts from './PopularProducts';
import Product from './Product';
import Hero from './Hero';
import { useLoaderData } from 'react-router';
import Footer from './Footer';
import Socials from './Socials';
import bgImage from '../assets/more/1.png'
const Home = () => {
    const coffees = useLoaderData();
    // console.log("Coffees received from server: ", coffees);
    const [coffeeList, setCoffeeList] = React.useState(coffees);
    return (
        <div className='bg-white'>
            <Hero></Hero>
            <Qualities></Qualities>
            <PopularProducts></PopularProducts>
            <div
                className="relative w-full bg-no-repeat bg-center bg-cover"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="relative z-10 pt-10 pb-20">
                    <div className="container mx-auto px-4 md:px-20 py-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {coffeeList.map(coffee => (
                                <Product
                                    key={coffee._id}
                                    coffee={coffee}
                                    coffeeList={coffeeList}
                                    setCoffeeList={setCoffeeList}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Socials></Socials>
        </div>



        // <div className='bg-white'>
        //     <Hero></Hero>
        //     <Qualities></Qualities>

        //     {/* --- Wrapper with the SINGLE background image file --- */}
        //     {/* 1. relative: establishes context for z-index */}
        //     {/* 2. bg-[url(...)]: Sets your single image */}
        //     {/* 3. bg-no-repeat bg-center bg-cover: Standard background positioning */}
        //     <div className={`relative w-full bg-[url(${bgImage})] bg-no-repeat bg-center bg-cover`}>

        //         {/* OPTIONAL: White overlay. Uncomment if the background image makes the text hard to read.
        // <div className="absolute inset-0 bg-white/70 -z-0"></div>
        // */}

        //         {/* --- Content (z-10 ensures it sits *above* the background) --- */}
        //         <div className="relative z-10 pt-10 pb-20">
        //             <PopularProducts></PopularProducts>
        //             <div className="container mx-auto px-4 md:px-20 py-10">
        //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        //                     {coffeeList.map(coffee => (
        //                         <Product
        //                             key={coffee._id}
        //                             coffee={coffee}
        //                             coffeeList={coffeeList}
        //                             setCoffeeList={setCoffeeList}
        //                         />
        //                     ))}
        //                 </div>
        //             </div>
        //         </div>

        //     </div>
        //     {/* --- End Wrapper --- */}

        //     <Socials></Socials>
        // </div>
    );
};

export default Home;