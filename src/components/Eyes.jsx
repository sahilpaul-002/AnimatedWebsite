import React, { useState, useEffect, useMemo } from 'react'

export default function Eyes() {
    // UseEffect to rotate the eyebal
    useEffect(() => {
        const handleMouseMove = (e) => {
            // X,Y position of mouse
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            // For each eye, calculate angle to mouse and rotate
            const eyes = document.querySelectorAll('.eyeball');
            eyes.forEach(eye => {
                // Get eye center position
                const rect = eye.getBoundingClientRect();
                const eyeX = rect.left + rect.width / 2;
                const eyeY = rect.top + rect.height / 2;

                const diffX = mouseX - eyeX;
                const diffY = mouseY - eyeY;

                // Angle calculation
                const angleToCenter = Math.atan2(diffY, diffX);
                const angleInDegrees = angleToCenter * (180 / Math.PI);
                const angle = angleInDegrees - 180; // Adjusting angle to point correctly

                const rotatingLine = eye.querySelector('.eyeRotatingLine');
                if (angle) rotatingLine.style.transform = `rotate(${angle}deg)`;
            });
        };
        // Add event listener
        window.addEventListener('mousemove', handleMouseMove);
        // Remove event listener on cleanup
        return () => window.removeEventListener('mousemove', handleMouseMove);
    });

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
