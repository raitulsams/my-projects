import { useLoaderData } from "react-router-dom";
import { MdOutlineNoMeals } from "react-icons/md";
import { useNavigate } from "react-router-dom"; // Import useNavigate to navigate back
const MealDetails = () => {
    const mealDetails = useLoaderData(); // Use the loader data to get the meal details
    console.log(mealDetails); // Log the meal details to check the data structure
    let navigate = useNavigate(); // Initialize the navigate function
    const { idMeal, strMeal, strTags, strCategory, strArea, strInstructions, strMealThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4 } = mealDetails;
    return (
        <div>
            <div className=" bg-base-100 py-4">
                <button onClick={() => { navigate(-1) }} class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:rotate-180">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    <span>Go back</span>
                </button>
            </div>
            <div className="card bg-base-100 py-4">

                {/*  Displaying the meal details */}
                <div className="flex flex-col md:flex-row gap-4 mt-3">
                    <div className="card bg-base-100 shadow-sm flex flex-col items-center p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <MdOutlineNoMeals className=" text-2xl text-[#F4722B]"></MdOutlineNoMeals>
                            <h1 className="font-bold text-3xl text-[#1E1B17]"> {strMeal}</h1>
                        </div>
                        <img className="rounded-lg cursor-pointer w-full md:w-3/4"
                            src={strMealThumb} />
                        <h2 className="text-sm font-light italic text-gray-500 mt-2">{strTags ? `Tag/s: ${strTags}` : "#tags"}</h2>
                    </div>
                    {/* Displaying the meal ingradiets */}
                    <div className="card bg-base-100 shadow-sm p-4">
                        <h1 className="text-2xl font-bold">Ingredient</h1>
                        <h1 className="text-md">Area: {strArea}</h1>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="">
                                <img className="w-full md:w-2/3 mx-auto"
                                    src={`https://www.themealdb.com/images/ingredients/${strIngredient1}.png`} />
                                <p className="text-center">{strIngredient1}</p>
                            </div>
                            <div className="">
                                <img className="w-full md:w-2/3 mx-auto"
                                    src={`https://www.themealdb.com/images/ingredients/${strIngredient2}.png`} />
                                <p className="text-center">{strIngredient2}</p>
                            </div>
                            <div className="">
                                <img className="w-full md:w-2/3 mx-auto"
                                    src={`https://www.themealdb.com/images/ingredients/${strIngredient3}.png`} />
                                <p className="text-center">{strIngredient3}</p>
                            </div>
                            <div className="">
                                <img className="w-full md:w-2/3 mx-auto"
                                    src={`https://www.themealdb.com/images/ingredients/${strIngredient4}.png`} />
                                <p className="text-center">{strIngredient4}</p>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="card bg-base-100 shadow-sm p-4 mt-2">
                    <h1 className="text-2xl font-bold">Instruction</h1>
                    <p className="text-wrap font-medium break-all raleway-500 text-md pt-2">{strInstructions}</p>
                </div>
            </div>
        </div>
    )
}

export default MealDetails