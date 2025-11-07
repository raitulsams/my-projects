import React from 'react'

const Hero = ({ handleSetCoins }) => {
    return (
        <>
            <div className='relative w-full'>
                <img className='rounded-xl bg-[#131313] ' src="/src/assets/bg-shadow.png" alt="" />
                <div className='flex justify-center flex-col gap-6 items-center absolute inset-0'>
                    <img className='w-[248px] h-[200px]' src="/src/assets/banner-main.png" alt="" />
                    <h1 className='text-[#ffffff] text-3xl font-bold '>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <h3 className='text-[#ffffffc9]'>Beyond Boundaries Beyond Limits</h3>
                    {/* <div className='border-2 border-[#E7FE29] p-2 rounded-xl'> */}
                    <button onClick={() => handleSetCoins()} className="btn bg-[#E7FE29] text-black font-bold  rounded-xl border-0 ring-[#E7FE29] ring-2 ring-offset-4 ring-offset-black">
                        Claim Free Credit
                    </button>
                    {/* </div> */}
                </div>
            </div >
        </>
    )
}

export default Hero