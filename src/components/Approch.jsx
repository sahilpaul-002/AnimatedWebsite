import React from 'react'
import { ArrowUpRight } from 'lucide-react';

export default function Approch() {
  return (
    <div className='w-full h-full px-10 py-10 md:py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl'>
        <span className='text-[3vw] text-black'>We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, and market leadership.</span>

        <div className="border-t border-zinc-700 m-10"></div>

        <div className="w-full "></div>

        <div className="w-full h-full py-1 bg-amber-300 flex justify-between items-start">
            <div className="w-[30vw] h-full p-1 bg-red-400 flex flex-col justify-center items-start gap-3">
                <div className="w-full h-full p-1 bg-green-400">
                    <h2 className='text-[3vw] text-black font-semibold'>Our Approach</h2>
                </div>
                <button className="w-[16vw] h-[4vw] px-5 py-1 ms-5 bg-zinc-900  rounded-full flex justify-center items-center gap-4">
                    <span className='text-[1.5vw] text-white'>Learn More</span>
                    <div className="w-8 h-8 p-1 bg-white rounded-full lg:flex justify-center items-center hidden">
                        <ArrowUpRight color="black" size={18}/>
                    </div>
                </button>
            </div>
        </div>
    </div>
  )
}
