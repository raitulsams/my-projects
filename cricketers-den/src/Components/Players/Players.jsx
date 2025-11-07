import React from 'react'
import { useState } from 'react'
import Available from '../Available/Available'
import Selected from '../Selected/Selected'
import ConfirmToast from '../ConfirmToast/ConfirmToast'
import { ToastContainer, toast, Flip } from 'react-toastify';

const Players = ({ coins, setCoins, handleFavoritePlayers, handleRemovefavorite }) => {
    const [active, setActive] = useState("available");
    const [players, setPlayers] = useState([])
    const [selected, setSelected] = useState([])
    const notify = (msg) => toast(msg);
    const handleSelected = (player) => {
        // console.log(player.price)
        // console.log(coins)

        if (coins < player.price) {
            // alert("You don't have enough coins to select this player")
            notify("You don't have enough coins to select this player!");
            return
        }
        console.log("selected", player.id)
        const alreadySelected = selected.find((p) => p.id === player.id)
        if (alreadySelected) {
            // alert("You have already selected this player")
            notify("You have already selected this player!");
            return
        }
        const newCoins = coins - player.price;
        setCoins(newCoins)
        const newSelected = [...selected, player]
        if (newSelected.length > 6) {
            // alert("You can only select 6 players")
            notify("You can only select 6 players!");
            return
        }
        setSelected(newSelected)
        // console.log(player)
    }

    const handleDeleteSelected = (id, price) => {
        // notify("Remove player from selected list?", { role: "alert" });
        notify(<ConfirmToast onConfirm={() => {
            const selectedCorrection = selected.filter((player) => player.id !== id)
            setSelected(selectedCorrection)
            if (selectedCorrection.length === 0) {
                setActive("available")
            }
            const newCorrectedCoins = coins + price;
            setCoins(newCorrectedCoins)
            notify("Deleted Successfully", { role: "alert" });
        }}></ConfirmToast>, { autoClose: false });

    }
    return (
        <>
            <ToastContainer stacked
                position="top-center"
                // autoClose={1500}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick={false}
                rtl={false}
                draggable={true}
                draggablePercent={60}
                theme="light"
                transition={Flip}
            />
            <div className='flex justify-between items-center py-6'>
                <h1 className='text-2xl font-bold'>
                    {active === "available" && "Available Players"}
                    {active === "selected" && `Selected Players (${selected.length}/6)`}
                </h1>
                <div className="inline-flex">
                    <button className={`font-bold py-2 px-4 rounded-l-xl ${active === "available" ? "bg-[#E7FE29] text-black" : "bg-gray-100 text-gray-500 "}`}
                        onClick={() => setActive("available")}>
                        Available ({players.length})
                    </button>
                    <button className={`font-bold py-2 px-4 rounded-r-xl ${active === "selected" ? "bg-[#E7FE29] text-black" : "bg-gray-100 text-gray-500"}`}
                        onClick={() => {
                            if (selected.length === 0) {
                                // alert("you have not selected any players")
                                notify("You have not selected any players!");
                                return
                            }
                            setActive("selected")
                        }}>
                        Selected ({selected.length})
                    </button>
                </div>
            </div>
            {
                active === "available" && <Available players={players} setPlayers={setPlayers} handleSelected={handleSelected} handleFavoritePlayers={handleFavoritePlayers} handleRemovefavorite={handleRemovefavorite}></Available>
            }
            {
                active === "selected" && selected.length > 0 && <Selected selected={selected} setSelected={setSelected} handleDeleteSelected={handleDeleteSelected} setActive={setActive}></Selected>
            }

        </>
    )
}

export default Players