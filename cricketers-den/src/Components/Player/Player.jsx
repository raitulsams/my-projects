import React, { use } from 'react';
import { useState } from 'react';
import { IoIosFlag } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import StarRating from '../StarRating/StarRating';
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";

const Player = ({ player, handleSelected, handleFavoritePlayers, handleRemovefavorite }) => {
    const {
        id,
        fullName,
        age,
        dateOfBirth,
        birthplace,
        battingStyle,
        bowlingStyle,
        price,
        country,
        playerSkill,
        rating,
        image
    } = player;
    // console.log(image)
    // console.log(player.image)
    // isFavorite = player.some(fav => fav.id === player.id);
    const [isFavorite, setIsFavorite] = useState(false);
    return (
        <>
            <div className="card w-max-[424px] h-max-[528px] shadow-sm border-2 border-gray-300 bg-base-100 rounded-xl">
                <div className="card-body px-[var(--card-p, 1.5rem)]">
                    <figure className='shadow-md border-gray-300 rounded-xl'>
                        <img className='w-max-[376px] h-auto rounded-xl shadow-md border-gray-300'
                            src={image}
                            alt="" />
                    </figure>
                    <h2 className="card-title flex justify-between items-center text-xl font-bold mt-3 mb-3">
                        <div className='flex items-center gap-x-2'>
                            <CgProfile />
                            {fullName}
                        </div>
                        <div>
                            {
                                isFavorite ?
                                    <MdFavorite className={`hover:cursor-pointer text-3xl text-red-500`} onClick={() => { handleRemovefavorite(player.id); setIsFavorite(!isFavorite) }} />
                                    : <MdFavoriteBorder className={`hover:cursor-pointer text-3xl color-red-500`} onClick={() => { handleFavoritePlayers(player); setIsFavorite(!isFavorite) }} />

                            }

                        </div>


                    </h2>
                    <div className='flex justify-between items-center border-b-1 border-gray-300 pb-3'>
                        <div className='flex items-center  gap-x-1'>
                            <IoIosFlag className="size-[1.4em] text-gray-400" />
                            <p>{country}</p>
                        </div>
                        <div>
                            <button className='btn btn-sm btn-active'>{playerSkill}</button>
                        </div>
                    </div>
                    <div className='grid gap-y-1'>
                        <div className="flex items-center gap-x-2 justify-between">
                            <h1 className='text-lg font-bold mb-1'>Rating</h1>
                            <StarRating rating={rating}></StarRating>
                        </div>
                        <div className='flex justify-end items-center'>
                            <p className='text-md font-semibold'>{battingStyle}</p>
                            <p className='text-right text-gray-600'>{bowlingStyle}</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='text-md font-semibold'>Price: ${price}</p>
                            <button className='btn btn-sm btn-primary' onClick={() => handleSelected(player)}>Choose Player</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Player