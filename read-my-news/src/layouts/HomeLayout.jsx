import React from 'react';
import Header from '../components/Header';
import { Outlet, useNavigation } from 'react-router';
import LatestNews from '../components/LatestNews';
import NavBar from '../components/NavBar';
import LeftAside from '../components/homelayout/LeftAside';
import RightAside from '../components/homelayout/RightAside';
import Loading from '../pages/Loading';

const HomeLayout = () => {
    const { state } = useNavigation();
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-10/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
            </header>

            <nav className='w-10/12 mx-auto sticky py-4 mb-2 top-0 z-50 bg-white shadow-md border-b border-gray-200'>
                <NavBar></NavBar>
            </nav>

            <main className='w-10/12 mx-auto grid grid-cols-12'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="mid_nav col-span-6">
                    {state === 'loading' ? <Loading></Loading> : <Outlet></Outlet>}
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;