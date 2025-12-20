import React from 'react';
import Header from '../components/Header';
import { Outlet, ScrollRestoration } from 'react-router';
import Footer from '../components/Footer';

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
            <Footer></Footer>
            <ScrollRestoration />
        </div>
    );
};

export default HomeLayout;