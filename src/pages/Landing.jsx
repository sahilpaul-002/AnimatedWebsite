import React, { useRef, useEffect } from 'react'
import HeroComponent from '../components/HeroComponent'
import Marquee from '../components/Marquee'
import Approch from '../components/Approch'
import Eyes from '../components/Eyes'
import ReadyStart from '../components/ReadyStart'
import LocomotiveScroll from 'locomotive-scroll';

export default function Landing() {
  // Add Locomotive Scroll
  // const locomotiveScroll = new LocomotiveScroll();
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      const locomotiveScroll = new LocomotiveScroll();
    }
  }, [])


  return (
    <div className="landingPageContainer w-[99vw] min-h-screen bg-zinc-900 px-4 py-2">
      <HeroComponent />
      <div className="marquee&approach-container relative z-1" data-scroll data-scroll-speed="0.1">
        <Marquee />
        <Approch />
      </div>
      <Eyes />
      <ReadyStart />
    </div>
  )
}
