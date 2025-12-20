import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import HomeLayout from '../layouts/HomeLayout';
import Home from '../components/Home';
import AddCoffee from '../components/AddCoffee';
import UpdateCoffee from '../components/UpdateCoffee';
const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch('http://localhost:3002/coffees').then(res => res.json())
            },
            {
                path: 'addCoffee',
                Component: AddCoffee
            },
            {
                path: 'updateCoffee/:id',
                Component: UpdateCoffee
            }

        ]
    },
]);

export default router;