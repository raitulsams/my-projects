import React, { use } from 'react'
import { NavLink, useLoaderData, useNavigate } from 'react-router-dom';
import Meal from '../Meal/Meal';

const FilteredMeals = () => {
    const { meals, categoryName } = useLoaderData();
    let navigate = useNavigate();
    console.log("FilteredMeals:", meals);
    const { idMeal, strMeal, strMealThumb } = meals;
    return (
        <>
            <div class="w-full lg:w-[1200px] bg-base-100 py-4">
                <button onClick={() => { navigate(-1) }} class="flex items-center justify-center w-full px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:rotate-180">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    <span>Go back</span>
                </button>
                <h1 className="text-3xl font-bold text-center w-full p-2">Category: {categoryName}</h1>


                <div className="flex flex-wrap grow gap-4 mt-2 justify-center">

                    {
                        meals.map((meal) => {
                            return (
                                <>
                                    <Meal key={idMeal} meal={meal}></Meal>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );



    // return (
    //     <div className="card bg-base-100 w-96 shadow-sm">
    //         <NavLink to={`/filtered-meals/${idMeal}`}>
    //             <figure>
    //                 <img className="rounded-lg cursor-pointer w-[100%] hover:scale-125 transition-all duration-300 ease-in-out"
    //                     src={strMealThumb} />
    //             </figure>
    //         </NavLink>
    //         <div className="py-2"> <h2 className="font-bold text-center tracking-wider">{strMeal}</h2>
    //             {/* <p className="line-clamp-2">{strInstructions}</p> */}
    //             {/* <div className="card-actions justify-end">
    //                 <button className="btn btn-primary">Check</button>
    //             </div> */}


    //         </div>
    //     </div>
    // )
}

export default FilteredMeals