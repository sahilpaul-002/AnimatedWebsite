import React, { useEffect, useState, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react';
import { motion } from "motion/react";

export default function ReadyStart() {
    // State to track if eyes are in viewport
    const [isSmallEyeInView, setIsSmallEyeInView] = useState(false);
    // Ref to the eyes container
    const smallEyesRef = useRef(null);

    // Intersection Observer to detect when eyes are in viewport
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsSmallEyeInView(entry.isIntersecting);
        });

        observer.observe(smallEyesRef.current);

        return () => observer.disconnect();
    }, []);

    // Effect to handle mouse movement and eye animations
    useEffect(() => {
        if (!isSmallEyeInView) return;

        const eyes = document.querySelectorAll('.smallEyes');
        const eyeballs = document.querySelectorAll('.eyeball');

        let rafId = null; // for requestAnimationFrame

        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            // Cancel any previous frame to prevent stacking
            if (rafId) cancelAnimationFrame(rafId);

            rafId = requestAnimationFrame(() => {
                // --- ROTATION LOGIC (inner white dot) ---
                eyeballs.forEach((eye) => {
                    const rect = eye.getBoundingClientRect();
                    const eyeX = rect.left + rect.width / 2;
                    const eyeY = rect.top + rect.height / 2;

                    const diffX = mouseX - eyeX;
                    const diffY = mouseY - eyeY;

                    const angleToCenter = Math.atan2(diffY, diffX);
                    const angle = angleToCenter * (180 / Math.PI) - 180;

                    const rotatingLine = eye.querySelector('.eyeRotatingLine');
                    if (rotatingLine)
                        rotatingLine.style.transform = `rotate(${angle}deg)`;
                });

                // --- MOVEMENT LOGIC (black magnetic motion) ---
                eyes.forEach((whiteEye) => {
                    const rect = whiteEye.getBoundingClientRect();
                    const eyeCenterX = rect.left + rect.width / 2;
                    const eyeCenterY = rect.top + rect.height / 2;

                    const diffX = mouseX - eyeCenterX;
                    const diffY = mouseY - eyeCenterY;

                    const strength = 0.04; // for subtle effect
                    const moveX = diffX * strength;
                    const moveY = diffY * strength;

                    const blackEye = whiteEye.querySelector('.eyeball');
                    if (blackEye) {
                        blackEye.style.transform = `translate(${moveX}px, ${moveY}px)`;
                    }
                });
            });
        };

        // Function to reset eyes on mouse leave
        const resetEyes = () => {
            document.querySelectorAll('.eyeball').forEach((e) => {
                e.style.transform = 'translate(0, 0)';
            });
        };

        // Add event listeners
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', resetEyes);

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', resetEyes);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [isSmallEyeInView]);

    // State to manage button hover
    const [isButtonHovered, setIsButtonHovered] = useState(false);
    
    return (
        <div className='readyStart-container w-full h-[40vh] md:h-screen  bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl flex flex-col justify-center items-center gap-10 relative'>
            <div className="text-container w-[80vw] h-fit flex flex-col justify-center items-center py-5">
                <h2 className='text-[12vw] text-black font-bold text-center tracking-tighter leading-[9vw]'>Ready</h2>
                <h2 className='text-[12vw] text-black font-bold text-center tracking-tighter leading-[9vw]'>to start</h2>
                <h2 className='text-[12vw] text-black font-bold text-center tracking-tighter leading-[9vw]'>the project ?</h2>
            </div>

            {/* <button className="w-[20vw] h-[4vw] px-5 py-1 ms-5 bg-zinc-900  rounded-full flex justify-center items-center gap-4">
                <span className='text-[1.5vw] text-white'>Start the project</span>
                <div className="w-8 h-8 p-1 bg-white rounded-full lg:flex justify-center items-center hidden">
                    <ArrowUpRight color="black" size={18} />
                </div>
            </button> */}
            <motion.button className="w-[17vw] h-[4vw] px-5 py-1 bg-zinc-900  rounded-full flex justify-center items-center origin-left relative" initial={{ opacity: 0.7 }} whileHover={{ opacity: 1 }} onHoverStart={() => setIsButtonHovered(true)} onHoverEnd={() => setIsButtonHovered(false)}>
                <span className='text-[1.5vw] text-white me-10'>Start the project</span>
                <div className="w-2 h-2 p-1 bg-white rounded-full hidden lg:inline-block absolute right-9 z-10"></div>
                <motion.div className="w-8 h-8 p-1 bg-white rounded-full lg:flex justify-center items-center hidden absolute right-6 z-10" initial={{ scale: 0 }} animate={{ scale: isButtonHovered ? 1 : 0 }} transition={{ ease: "easeInOut", duration: 0.5 }} viewport={{ once: false, amount: 0.5 }}>
                    <ArrowUpRight color="black" size={18} />
                </motion.div>
            </motion.button>

            {/* Eyes */}
            <div ref={smallEyesRef} className="eyes-container w-fit h-fit flex justify-center items-center gap-10 absolute" data-scroll data-scroll-speed="0.5">
                <div className="smallEyes w-[12vw] h-[12vw] bg-amber-50 rounded-full flex justify-center items-center">
                    <div className="eyeball w-[6vw] h-[6vw] bg-black rounded-full flex justify-center items-center">
                        <div className="eyeRotatingLine w-full h-fit">
                            <div className="followingEyeball w-[1vw] h-[1vw] bg-white rounded-full"></div>
                        </div>
                    </div>
                </div>
                <div className="smallEyes w-[12vw] h-[12vw] bg-amber-50 rounded-full flex justify-center items-center">
                    <div className="eyeball w-[6vw] h-[6vw] bg-black rounded-full flex justify-center items-center">
                        <div className="eyeRotatingLine w-full h-fit">
                            <div className="followingEyeball w-[1vw] h-[1vw] bg-white rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
