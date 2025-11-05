import React, { useState } from 'react'
import { motion } from "motion/react"

export default function HeroComponent() {
    // State to manage the hover effect of the button
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="landingComponent w-full h-full lg:min-h-screen px-2 lg:px-4 py-1" data-scroll data-scroll-speed='-0.3'>
            <div className="textStructure mt-40 mb-[10vw] lg:mb-0 px-10 lg:px-20">
                {["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map((text, index) => {
                    return (
                        <div key={index} className="masker">
                            <div className="w-fit flex justify-start items-center">
                                {index === 1 && (
                                    <motion.div className="w-[9vw] h-[7vw] rounded-md bg-red-400 relative top-[0.5vw]" initial={{ width: 0 }} animate={{ width: "9vw" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 2, delay: 1 }}></motion.div>
                                )}
                                <h1 className="text-[9vw] tracking-tighter font-medium leading-[.75]">{text}</h1>
                            </div>
                        </div>
                    )
                })}

                <div className="border-t border-zinc-700 mt-20"></div>

                <div className="button w-full flex justify-end mt-4">
                    <button
                        className="
                            px-2 py-1 md:px-4 md:py-2 
                            border rounded-full border-zinc-500 
                            text-white 
                            transition-all duration-500 
                            hover:bg-white hover:text-black
                            ">
                        Learn More
                    </button>
                </div>

                <div className="button w-full flex justify-end mt-4">
                    <motion.button
                        className="relative px-4 py-2 border rounded-full border-zinc-500 overflow-hidden text-white"
                        initial={{ color: "#ffffff" }}
                        whileHover={{ color: "#000000" }}
                        onHoverStart={() => setIsHovered(true)}
                        onHoverEnd={() => setIsHovered(false)}
                    >
                        {/* Animated white background */}
                        <motion.span
                            className="absolute bottom-0 left-0 w-full bg-white z-0"
                            initial={{height: 0}}
                            animate={{ height: isHovered ? "100%" : 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        />

                        {/* Text */}
                        <span className="relative z-10">Start Project</span>
                    </motion.button>
                </div>
            </div>
        </div>
    )
}
