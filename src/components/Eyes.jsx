import React, { useState, useEffect } from 'react'

export default function Eyes() {
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
        <div className='eys -background w-full h-screen bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] bg-cover bg-center flex justify-center items-center'>
            <div className="eyes-container w-fit h-fit flex justify-center items-center gap-10">
                <div className="eyes w-[20vw] h-[20vw] bg-amber-50 rounded-full flex justify-center items-center">
                    <div className="eyeball w-[12vw] h-[12vw] bg-black rounded-full flex justify-center items-center">
                        <div className="eyeRotatingLine w-full h-fit">
                            <div className="followingEyeball w-[2vw] h-[2vw] bg-white rounded-full"></div>
                        </div>
                    </div>
                </div>
                <div className="eyes w-[20vw] h-[20vw] bg-amber-50 rounded-full flex justify-center items-center">
                    <div className="eyeball w-[12vw] h-[12vw] bg-black rounded-full flex justify-center items-center">
                        <div className="eyeRotatingLine w-full h-fit">
                            <div className="followingEyeball w-[2vw] h-[2vw] bg-white rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
