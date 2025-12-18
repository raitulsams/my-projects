import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import HomeLayout from '../layouts/HomeLayout';
const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
    },
]);

export default router;