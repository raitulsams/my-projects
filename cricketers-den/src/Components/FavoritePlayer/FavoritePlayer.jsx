
import StarRating from '../StarRating/StarRating';
import { MdFavorite } from "react-icons/md";

const FavoritePlayer = ({ player, num, handleRemovefavorite }) => {
    console.log("FavoritePlayer")
    const { id, fullName, battingStyle, rating, playerSkill, image, price } = player;
    return (
        <>

            <ul className="list bg-base-100 rounded-box shadow-md border-2 border-gray-300 my-2">
                <li className="list-row flex items-center justify-between p-4">
                    <div className='flex items-center p-4 justify-around gap-x-4'>
                        <div playerid={id} className="text-4xl font-thin opacity-30 tabular-nums">{num}</div>
                        <div><img className="size-20 rounded-box" src={image} /></div>
                        <div className="list-col-grow">
                            <div>{fullName}</div>
                            <div className="text-xs uppercase font-semibold opacity-60">{battingStyle}</div>
                            <div className="text-xs uppercase font-semibold opacity-60">{playerSkill}</div>
                            <div className="text-xs uppercase font-semibold opacity-60">
                                <StarRating rating={rating} className="text-yellow-500" />
                            </div>
                        </div>
                    </div>
                    <button onClick={() => { handleRemovefavorite(id) }} className="btn btn-square btn-ghost">
                        {/* <MdFavorite className="size-[2.2em] text-red-500" /> */}
                    </button>
                </li>
            </ul>

        </>
    )
}

export default FavoritePlayer