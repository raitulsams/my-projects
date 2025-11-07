import Login from "../components/Login"
import NavBar from "../components/NavBar"
import Home from "../components/Home"
import { Outlet } from "react-router"
const root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Home></Home>
            <Login></Login>
            <Outlet></Outlet>
        </div>
    )
}

export default root