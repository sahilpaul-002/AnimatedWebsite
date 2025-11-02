import React from 'react'
import { motion } from "motion/react"

export default function Marquee() {
  return (
    <div className='w-full h-full py-8 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden gap-20 animate-marquee">
            <motion.h1 className='text-[20vw] m-0 p-0 tracking-tighter [word-spacing:-12px] font-bold' initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10, repeatType: "loop"}}>WE ARE OCHI</motion.h1>
            <motion.h1 className='text-[20vw] m-0 p-0 tracking-tighter [word-spacing:-12px] font-bold' initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10, repeatType: "loop"}}>WE ARE OCHI</motion.h1>
        </div>

    </div>
  )
}
