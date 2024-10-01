import React from 'react'
import {assets} from '../assets/assets'

function Sidebar() {
  return (
    <div className=' p-2 w-[25%]  h-full  flex-col gap-2 text-white hidden lg:flex'>
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justfy-around'>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img src={assets.home_icon} className='w-6' alt="" srcset="" />
                <p className='font-bold'>Home</p>
            </div>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img src={assets.search_icon } className='w-6' alt="" srcset="" />
                <p className='font-bold'>Search</p>
            </div>
            </div>
            <div className='bg-[#121212] h-[85%] rounded'>
                <div className='p-4 flex items-center justify-between'>
                    <div className="flex items-center gap-3">
                        <img src={assets.stack_icon} className='w-8' alt="" />
                        <p className='font-semibold'>Your Library</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img src={assets.arrow_icon} className='w-5' alt="" />
                        <img src={assets.plus_icon} className='w-5' alt="" />
                  
                </div>
            </div>
            <div className='p-4 bg-[#242424] m-2 rounded font-semibold items-start justify-start gap-left'>
                <h1>Create your first playlist</h1>
                <p className='font-light'>Its easy we will help you</p>
                <button className='px-4 py-1.5 bg-white text-[15px] text-black roundead-full mt-4 '>create Playlist</button>
            </div>
            <div className='p-4 bg-[#242424] m-2 rounded font-semibold items-start justify-start gap-left mt-4 '>
                <h1>Lets find some podcast to folow </h1>
                <p className='font-light'>We will keep you update on new episodes</p>
                <button className='px-4 py-1.5 bg-white text-[15px] text-black roundead-full mt-4 '>Browse podcast</button>
            </div>

        </div>
    </div>
  )
}

export default Sidebar