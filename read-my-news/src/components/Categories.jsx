// import React, { use } from 'react';
// import { NavLink } from 'react-router';
// const categoryPromise = fetch('/categories.json').then(result => result.json());
// console.log(categoryPromise);
// const Categories = () => {
//     const categories = use(categoryPromise);
//     return (
//         <div>
//             <h2 className='font-semibold !text-base-400'>All Category</h2>
//             <div className='grid grid-cols-1 mt-4'>
//                 {
//                     categories.map((category) => {
//                         return <NavLink key={category.id} className={({ isActive }) =>
//                             ` bg-base-100 border-0 hover:bg-base-200 text-accent text-left pl-4 py-2 ${isActive ? 'bg-base-300 font-semibold text-base-400' : ''}`
//                         } to={`/category/${category.id}`} > {category.name}</NavLink>
//                     })
//                 }
//             </div>
//         </div>
//     );
// };


// export default Categories;

import React, { use } from "react";
import { NavLink } from "react-router";
import { motion as Motion } from "framer-motion";
// Fetch the category data
const categoryPromise = fetch("/categories.json").then(res => res.json());

const Categories = () => {
    const categories = use(categoryPromise);

    return (
        <div>
            <h2 className="font-semibold text-gray-600 mb-3">All Categories</h2>

            <div className="flex flex-col gap-2">
                {categories.map(category => (
                    <NavLink
                        key={category.id}
                        to={`/category/${category.id}`}
                        className={({ isActive }) =>
                            `relative block px-4 py-2 rounded-md text-left transition-colors duration-200 overflow-hidden
                             ${isActive
                                ? "text-[#FF8C47] font-semibold"
                                : "text-gray-700 hover:text-[#FF8C47]"
                            }`
                        }
                    >
                        {({ isActive }) => (
                            <Motion.div
                                whileHover={{ scale: 1.05, x: 4, transition: { duration: 0.2 } }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: "spring", stiffness: 300, damping: 150 }}
                                className="relative"
                            >
                                <span>{category.name}</span>

                                {isActive && (
                                    <Motion.div
                                        layoutId="activeCategory"
                                        className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF8C47]"
                                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                    />
                                )}
                            </Motion.div>
                        )}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Categories;
