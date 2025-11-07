import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import Meals from './components/Meals/Meals.jsx'
import Home from './components/Home/Home.jsx'
import Layout from './components/Layout/Layout.jsx'
import Categories from './components/Categories/Categories.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import MealDetails from './components/MealDetails/MealDetails.jsx'
import FilteredMeals from './components/Filtered Meals/FilteredMeals.jsx'

import { mealLoader } from './utils/mealsLoader.jsx'
import { categoriesLoader } from './utils/categoriesLoader.jsx'
import { filterMealByCategory } from './utils/filterMealByCategory.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // Default route (localhost:3000/)
        element: <Home />,
        errorElement: <ErrorPage />,
        loader: mealLoader, // This will fetch meals data when the Home component is rendered
      },
      {
        path: 'home', // Also renders <Home /> (localhost:3000/home)
        element: <Home />,
        errorElement: <ErrorPage />,
        loader: mealLoader,
      },
      {
        path: 'categories',
        element: <Categories />,
        errorElement: <ErrorPage />,
        loader: categoriesLoader,
      },
      {
        path: '/meal-details/:id',
        element: <MealDetails />,
        loader: async ({ params }) => {
          const mealId = params.id;
          if (!mealId) {
            throw new Response('Meal ID is required', { status: 400 });
          }
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
          if (!response.ok) {
            throw new Response('Failed to fetch meal details', { status: response.status });
          }
          const data = await response.json();
          return data.meals ? data.meals[0] : null; // Return the first meal or null if not found
        }
      },
      {
        path: '/filtered-meals/:categoryName',
        element: <FilteredMeals />,
        loader: filterMealByCategory,
        errorElement: <ErrorPage />,
      }
    ]
  }

])
createRoot(document.getElementById('root')).render(
  // <RouterProvider router={router} />
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
