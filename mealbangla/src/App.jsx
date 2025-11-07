import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Meals from './components/Meals/Meals'
import { useState, useEffect } from 'react'
import Categories from './components/Categories/Categories'


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState([]);

  //Cateories fetching
  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  //     .then(res => res.json())
  //     .then(data => setMealsCategories(data.categories))
  //     .finally(() => {
  //       setIsLoading(false);
  //     })
  //     .catch(err => {
  //       console.error("Error fetching meals categories:", err);
  //       setIsLoading(false);
  //     });
  // }, []);

  //Meals fetching
  useEffect(() => {
    setIsLoading(true);
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then(res => res.json())
      .then(data => setMeals(data.meals))
      .finally(() => {
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Error fetching meals:", err);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <div>
        <Header></Header>
        <Outlet></Outlet>
        {/* {!isLoading && <Meals meals={meals}></Meals>} */}
        {/* <Outlet></Outlet> */}
        {/* {!isLoading && <Meals meals={meals}></Meals>} */}
        {/* {
          !isLoading && <Meals meals={meals}></Meals>
        }
        <Outlet></Outlet> */}
        {/* <Footer></Footer> */}
      </div>
    </>
  )
}

export default App
