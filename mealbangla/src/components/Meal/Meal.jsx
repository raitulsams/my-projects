import { NavLink, Outlet } from 'react-router-dom'
const Meal = ({ meal }) => {
    // console.log(meal);
    const { idMeal, strMeal, strMealThumb } = meal;

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <NavLink to={`/meal-details/${idMeal}`}>
                <figure>
                    <img className="rounded-lg cursor-pointer w-full hover:scale-125 transition-all duration-300 ease-in-out"
                        src={strMealThumb} />
                </figure>
            </NavLink>
            <div className="py-2"> <h2 className="font-bold text-center tracking-wider">{strMeal}</h2>
                {/* <p className="line-clamp-2">{strInstructions}</p> */}
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Check</button>
                </div> */}
            </div>
        </div>
    )
}

export default Meal