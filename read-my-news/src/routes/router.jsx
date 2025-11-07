import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/Home';
import CategoryNews from '../pages/CategoryNews';
import BookMarkedNewsList from '../components/BookMarkedNewsList';
import Login from '../components/loginLayout/Login';
import LoginLayout from '../components/loginLayout/LoginLayout';
import Register from '../components/loginLayout/Register';
import About from '../components/About';
import Career from '../components/Career';
import NewsDetails from '../pages/NewsDetails';
import PrivateRoute from './PrivateRoute';
import NotFound from '../components/NotFound';
import Loading from '../pages/Loading';
const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element: <Navigate to="/category/1" replace></Navigate>
            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: () => fetch("/news.json").then(res => res.json()),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: "/bookmarkednews",
                element: <BookMarkedNewsList></BookMarkedNewsList>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/career",
                element: <Career></Career>
            }
        ]
    },
    {
        path: "/login",
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: "",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "/auth",
        element: <h1>Authentication Page</h1>
    },
    {
        path: "/news-details/:id",
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
        loader: () => fetch("/news.json").then(res => res.json()),
        hydrateFallbackElement: <Loading></Loading>
    },
    {
        path: "/*",
        element: <NotFound></NotFound>
    },
])
export default router;