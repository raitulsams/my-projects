import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Players from './Components/Players/Players'
import Footer from './Components/Footer/Footer'
import FavoritePlayers from './Components/FavoritePlayers/FavoritePlayers'
import { ToastContainer, toast } from 'react-toastify'

function App() {
  const [coins, setCoins] = useState(0)
  const handleSetCoins = () => {
    console.log("coins", coins)
    const newCoins = coins + 100000
    setCoins(newCoins)
  }
  const [favorite, setFavorite] = useState([])
  const [isFavorite, setIsFavorite] = useState(true);

  const handleFavoritePlayers = (player) => {
    setIsFavorite(!isFavorite)
    console.log("favorite", player)
    const alreadyFavorite = favorite.find((p) => p.id === player.id)
    if (alreadyFavorite) {
      toast("This player is already in the list!");
      return
    }
    const newFavorite = [...favorite, player]
    setFavorite(newFavorite)
    toast("Added to favorite list");
  }
  const handleRemovefavorite = (id) => {
    const newFavorite = favorite.filter((player) => player.id !== id)
    setFavorite(newFavorite)
    toast("Removed from favorite list");
  }

  return (
    <>
      <div className='max-w-[1320px] mx-auto p-2'>
        <Header coins={coins} favorite={favorite}></Header>
        <Hero handleSetCoins={handleSetCoins}></Hero>
        <Players coins={coins} setCoins={setCoins} handleFavoritePlayers={handleFavoritePlayers} handleRemovefavorite={handleRemovefavorite}></Players>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}

      </div>
      <Footer></Footer>
      <FavoritePlayers favorite={favorite} handleRemovefavorite={handleRemovefavorite}></FavoritePlayers>


    </>
  )
}

export default App
