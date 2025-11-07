import Header from "../Header/Header"
import Meals from "../Meals/Meals"
import Footer from "../Footer/Footer"
import { useLoaderData } from "react-router-dom"
const Home = () => {
    const meals = useLoaderData()
    return (
        <>
            <h1 className="text-3xl font-bold text-center w-full p-2">Meals</h1>
            <Meals meals={meals}></Meals>
        </>

    )
}

export default Home