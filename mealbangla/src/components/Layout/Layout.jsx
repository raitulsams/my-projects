import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => {
    return (
        <>
            <Header />
            <main className='w-full lg:w-[1200px] mx-auto p-2'>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout