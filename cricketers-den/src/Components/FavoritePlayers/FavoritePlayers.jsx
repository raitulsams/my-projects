import FavoritePlayer from "../FavoritePlayer/FavoritePlayer";

const FavoritePlayers = ({ favorite, handleRemovefavorite }) => {
    console.log("favorite is", favorite)
    console.log("favorite len", favorite.length)
    return (
        <div>
            {/* Modal Dialog for favorite features */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button> */}
            <dialog id="favPlayersDialog" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    {
                        favorite.length > 0 && <h3 className="font-bold text-lg">Here is your most favorite players.</h3>
                    }


                    {

                        favorite.length > 0 &&
                        favorite.map((player, idx) => {
                            return (
                                <>
                                    <FavoritePlayer player={player} key={idx} num={idx + 1} handleRemovefavorite={handleRemovefavorite}></FavoritePlayer>
                                </>
                            )
                        })
                    }

                    {
                        favorite.length === 0 &&
                        <h3 className="font-bold text-lg">No favorite players :(</h3>
                    }
                </div>
            </dialog >
        </div >
    );
};

export default FavoritePlayers;