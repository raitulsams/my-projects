import { useLoaderData } from "react-router-dom"
import Category from "../Category/Category"
const Categories = () => {
    // const [mealsCategories, setMealsCategories] = useState([]);
    //Cateories fetching
    // useEffect(() => {
    //     fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    //         .then(res => res.json())
    //         .then(data => setMealsCategories(data.categories))
    //         .catch(err => {
    //             console.error("Error fetching meals categories:", err);

    //         });
    // }, []);
    // console.log("Meals Categories:", mealsCategories);

    const mealsCategories = useLoaderData();
    return (
        <>
            <h1 className="text-3xl font-bold text-center w-full p-2">Categories</h1>
            <div className="flex flex-wrap gap-2 p-4 justify-center">
                {
                    mealsCategories.map((category, idx) => {
                        return (
                            <>
                                <Category key={idx} category={category}></Category>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Categories