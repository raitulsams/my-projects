import React from 'react';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';

const Selected = ({ selected, handleDeleteSelected, setActive }) => {
    console.log("selected", selected)
    return (
        <>
            <div className='max-w-[1000px] mx-auto'>

                {
                    selected.map((player, idx) => {
                        return (
                            <SelectedPlayer key={idx} num={++idx} player={player} handleDeleteSelected={handleDeleteSelected}></SelectedPlayer>
                        )
                    })
                }
                <button onClick={() => setActive("available")} className="btn bg-[#E7FE29] text-black font-bold rounded-xl border-0 ring-black ring-2 ring-offset-4 hover:bg-[#0c0c0c] hover:text-[#E7FE29] hover:ring-[#E7FE29] mt-2">
                    Add More Players
                </button>
            </div>
        </>
    )
}

export default Selected