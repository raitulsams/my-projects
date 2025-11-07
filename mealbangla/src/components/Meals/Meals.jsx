import Meal from '../Meal/Meal';
const Meals = ({ meals }) => {
    // const meals = useLoaderData();
    // console.log(meals);
    return (
        <div className="flex flex-row flex-wrap gap-2  justify-center">
            {
                meals.map((meal) => {
                    return (
                        <>
                            <Meal key={meal.idMeal} meal={meal}></Meal>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Meals