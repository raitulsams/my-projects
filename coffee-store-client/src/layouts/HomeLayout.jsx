import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import Home from '../components/Home';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                <Home></Home>
            </main>
            <footer>This is footer</footer>
        </div>
    );
};

export default HomeLayout;