import React, { use } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Players from '../Players/Players'
import Header from '../Header/Header'
import Player from '../Player/Player'
import './Available.css'

const Available = ({ players, setPlayers, handleSelected, handleFavoritePlayers, handleRemovefavorite }) => {

    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])

    return (
        <>
            <div className="available-container">
                {
                    players.map((player, idx) => {
                        return (
                            <Player key={idx} player={player} handleSelected={handleSelected} handleFavoritePlayers={handleFavoritePlayers} handleRemovefavorite={handleRemovefavorite}></Player>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Available