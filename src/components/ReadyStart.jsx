import React, {useEffect} from 'react'
import { ArrowUpRight } from 'lucide-react';

export default function ReadyStart() {
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
