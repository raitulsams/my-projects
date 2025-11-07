import Header from "../Header/Header"
import { Outlet } from "react-router";
const Layout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Header></Header>
            <Outlet></Outlet>
        </div>

    )
}

export default Layout