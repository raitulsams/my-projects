import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import HomeLayout from '../layouts/HomeLayout';
import Home from '../components/Home';
import AddCoffee from '../components/AddCoffee';
import UpdateCoffee from '../components/UpdateCoffee';
import CoffeeDetail from '../components/CoffeDetail';
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
                path: 'coffee/:id',
                Component: CoffeeDetail,
                loader: ({ params }) => fetch(`http://localhost:3002/coffees/${params.id}`).then(res => res.json())
            },
            {
                path: 'updateCoffee/:id',
                Component: UpdateCoffee,
                loader: ({ params }) => fetch(`http://localhost:3002/coffees/${params.id}`).then(res => res.json())
            }

        ]
    },
]);

export default router;