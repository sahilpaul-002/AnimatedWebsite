import React, {useState} from 'react'
import { ArrowUpRight } from 'lucide-react';
import { motion } from "motion/react"

export default function Approch() {
    // State to manage button hover
    const [isButtonHovered, setIsButtonHovered] = useState(false);
  return (
    <div className='w-full h-full px-10 py-10 md:py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl' data-scroll data-scroll-speed="-0.1">
        <motion.span className='text-[3vw] text-black' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeInOut", duration: 2 }} viewport={{ once: true, amount: 0.5 }}>We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, and market leadership.</motion.span>

        <motion.div className="w-full border-t border-zinc-700 my-10" initial={{ scaleX: 0 }} whileInView={{ scaleX: 0.9 }} transition={{ ease: "easeInOut", duration: 2 }} viewport={{ once: true, amount: 0.5 }}></motion.div>

        <div className="w-full h-full py-1 flex justify-between items-start">
            <div className="w-[30vw] h-full p-1 flex flex-col justify-center items-start gap-3">
                <motion.div className="w-full h-full p-1 origin-left" initial={{ scaleX: 0, opacity: 0 }} whileInView={{ scaleX: "100%", opacity: 1 }} transition={{ ease: "easeInOut", duration: 1, visualDuration: 1, delay: 1 }} viewport={{ once: true, amount: 0.5 }}>
                    <h2 className='text-[3vw] text-black font-semibold'>Our Approach</h2>
                </motion.div>
                <motion.button className="w-[17vw] h-[4vw] px-5 py-1 bg-zinc-900  rounded-full flex justify-center items-center origin-left relative" initial={{ rotate: -90, opacity: 0.7 }} whileInView={{ rotate: 0 }} whileHover={{opacity: 1}} transition={{ type: "spring", visualDuration: 1, bounce: 0.3 }} viewport={{ once: true, amount: 0.5 }} onHoverStart={() => setIsButtonHovered(true)} onHoverEnd={() => setIsButtonHovered(false)}>
                    <span className='text-[1.5vw] text-white me-10'>Learn More</span>
                    <div className="w-2 h-2 p-1 bg-white rounded-full hidden lg:inline-block absolute right-9 z-10"></div>
                    <motion.div className="w-8 h-8 p-1 bg-white rounded-full lg:flex justify-center items-center hidden absolute right-6 z-10" initial={{ scale: 0 }} animate={{ scale: isButtonHovered ? 1 : 0 }} transition={{ ease: "easeInOut", duration: 0.5 }} viewport={{ once: false, amount: 0.5 }}>
                        <ArrowUpRight color="black" size={18}/>
                    </motion.div>
                </motion.button>
            </div>
        </div>
    </div>
  )
}
