
import Header from "../Header";
import { Outlet } from "react-router";
import { AnimatePresence } from "framer-motion";
import NavBar from "../NavBar";
const LoginLayout = () => {
    return (
        <div>
            <Header></Header>
            <nav className='w-10/12 mx-auto mt-2'>
                <div className="divider"></div>
                <NavBar></NavBar>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default LoginLayout;
