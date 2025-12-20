import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                {/* Render only the active child route here. The index route will show `Home`,
                    and navigating to `/addCoffee` will render `AddCoffee` (keeping Header). */}
                <Outlet />
            </main>
            {/* <footer>This is footer</footer> */}
        </div>
    );
};

export default HomeLayout;