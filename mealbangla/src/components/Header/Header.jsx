import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Header = () => {
    const handleSearch = (event) => {
        event.preventDefault();
        const inputMeal = event.target.inputMeal.value;
        console.log(inputMeal);
    }

    return (
        <div className="navbar bg-[#1e1b17] shadow-sm">
            {/* <div className='w-full lg:w-[1200px] mx-auto'> */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn text-white btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-[#1e1b17]  rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><NavLink to="/home" className={({ isActive }) => {
                            return isActive ? "text-orange-500" : "text-white";
                        }}>Home</NavLink></li>
                        <li> <NavLink to="/categories" className={({ isActive }) => {
                            return isActive ? "text-orange-500" : "text-white";
                        }}>Categories</NavLink>
                            {/* <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul> */}
                        </li>
                        <li><NavLink to="/contact" className={({ isActive }) => {
                            return isActive ? "text-orange-500" : "text-white";
                        }}>Contact</NavLink></li>
                    </ul>
                </div>
                <div>
                    <NavLink to="/home">
                        <img className='w-[200px]' src="./assests/logo.png" alt="" />
                    </NavLink>

                </div>
            </div>
            <div className="navbar-center">
                {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}

                <form onSubmit={handleSearch} class="flex items-center max-w-sm mx-auto">
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <input name="inputMeal" type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Meal..." required />
                    </div>
                    <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-orange-700 rounded-lg border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span class="sr-only">Search</span>
                    </button>
                </form>

            </div>
            <div className='lg:navbar-end'>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white/[.55]">
                        <li><NavLink to="/home" className={({ isActive }) => {
                            return isActive ? "text-orange-500" : "text-white";
                        }}>Home</NavLink></li>
                        <li><NavLink to="/categories" className={({ isActive }) => {
                            return isActive ? "text-orange-500" : "text-white";
                        }}>Categories</NavLink>
                            {/* <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details> */}
                        </li>
                        <li><NavLink to="/contact" className={({ isActive }) => {
                            return isActive ? "text-orange-500" : "text-white";
                        }}>Contact</NavLink></li>
                    </ul>
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}

export default Header