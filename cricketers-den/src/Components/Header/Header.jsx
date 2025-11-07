
const Header = ({ coins, favorite }) => {
    return (
        <nav>
            <div className='flex justify-between items-center py-3'>
                <img src="/src/assets/logo.png" alt="" />
                <div>
                    <ul className='flex gap-10 justify-between items-center text-[#131313c9] hover:cursor-pointer '>
                        <li>Home</li>
                        <li>Fixture</li>
                        <li onClick={() => document.getElementById('favPlayersDialog').showModal()}>Favorites <span className="text-red-400">({favorite.length})</span> </li>
                        <li>Team</li>
                        <li>Schedules</li>
                        <button className="btn text-[#131313c9] rounded-xl">{coins} Coins <img className='w-[24px] h-[24px]' src="/src/assets/dollar.png" alt="" /></button>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Header