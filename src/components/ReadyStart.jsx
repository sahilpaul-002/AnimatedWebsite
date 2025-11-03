import React, { useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react';

export default function ReadyStart() {
    // Effect to handle mouse movement and eye animations
    useEffect(() => {
        const eyes = document.querySelectorAll('.eyes');
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

                    const strength = 0.05; // for subtle effect
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
    }, []);


    return (
        <div className='readyStart-container w-full h-[40vh] md:h-screen  bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl flex flex-col justify-center items-center gap-10 relative'>
            <div className="text-container w-[80vw] h-fit flex flex-col justify-center items-center py-5">
                <h2 className='text-[12vw] text-black font-bold text-center tracking-tighter leading-[9vw]'>Ready</h2>
                <h2 className='text-[12vw] text-black font-bold text-center tracking-tighter leading-[9vw]'>to start</h2>
                <h2 className='text-[12vw] text-black font-bold text-center tracking-tighter leading-[9vw]'>the project ?</h2>
            </div>

            <button className="w-[20vw] h-[4vw] px-5 py-1 ms-5 bg-zinc-900  rounded-full flex justify-center items-center gap-4">
                <span className='text-[1.5vw] text-white'>Start the project</span>
                <div className="w-8 h-8 p-1 bg-white rounded-full lg:flex justify-center items-center hidden">
                    <ArrowUpRight color="black" size={18} />
                </div>
            </button>

            {/* Eyes */}
            <div className="eyes-container w-fit h-fit flex justify-center items-center gap-10 absolute">
                <div className="eyes w-[12vw] h-[12vw] bg-amber-50 rounded-full flex justify-center items-center">
                    <div className="eyeball w-[6vw] h-[6vw] bg-black rounded-full flex justify-center items-center">
                        <div className="eyeRotatingLine w-full h-fit">
                            <div className="followingEyeball w-[1vw] h-[1vw] bg-white rounded-full"></div>
                        </div>
                    </div>
                </div>
                <div className="eyes w-[12vw] h-[12vw] bg-amber-50 rounded-full flex justify-center items-center">
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
