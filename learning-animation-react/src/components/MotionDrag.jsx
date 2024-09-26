import React, { useRef } from 'react'
import { anticipate, easeInOut, motion } from 'framer-motion'


const MotionDrag = () => {

  const parentRef = useRef(null)

  return (
    <div ref={parentRef}

     className="overflow-hidden bg-purple-400 h-64 lg:h-80 rounded-lg flex justify-center items-center relative">
      <h1 className='font-bold text-2xl text-purple-800'>Pick & play</h1>
          <motion.img dragConstraints={parentRef} drag whileDrag={{scale:1.4}} transition={{duration:1,ease:"backOut",}} className="pool h-20 lg:h-20 absolute bottom-0 left-2 cursor-pointer hue-rotate-[20deg]" draggable="false" src="https://cdn-icons-png.flaticon.com/128/10889/10889021.png"/>
          <motion.img dragConstraints={parentRef} drag whileDrag={{scale:1.4}} transition={{duration:1,ease:"backOut",}} className="3-hole h-20 lg:h-20 absolute bottom-0 left-10 cursor-pointer hue-rotate-[20deg]" draggable="false" src="https://cdn-icons-png.flaticon.com/128/6177/6177950.png"/>
          <motion.img dragConstraints={parentRef} drag whileDrag={{scale:1.4}} transition={{duration:1,ease:"backOut",}} className="pool-blu h-20 lg:h-20 absolute bottom-4 left-40 cursor-pointer hue-rotate-[20deg]" draggable="false" src="https://cdn-icons-png.flaticon.com/128/10889/10889029.png"/>
          <motion.img dragConstraints={parentRef} drag whileDrag={{scale:1.4}} transition={{duration:1,ease:"backOut",}} className="pool-11 h-20 lg:h-20 absolute bottom-0 left-36 cursor-pointer hue-rotate-[20deg]" draggable="false" src="https://cdn-icons-png.flaticon.com/128/10888/10888926.png"/>
          <motion.img dragConstraints={parentRef} drag whileDrag={{scale:1.4}} transition={{duration:1,ease:"backOut",}} className="volly h-20 lg:h-20 absolute bottom-6 left-56 cursor-pointer hue-rotate-[20deg]" draggable="false" src="https://cdn-icons-png.flaticon.com/128/10466/10466230.png"/>
          <motion.img dragConstraints={parentRef} drag whileDrag={{scale:1.4}} transition={{duration:1,ease:"backOut",}} className="3-hole h-20 lg:h-20 absolute bottom-0 right-2 cursor-pointer hue-rotate-[20deg]" draggable="false" src="https://cdn-icons-png.flaticon.com/128/6177/6177950.png"/>
          <motion.img dragConstraints={parentRef} drag whileDrag={{scale:1.4}} transition={{duration:1,ease:"backOut",}} className="pool-blu h-20 lg:h-20 absolute bottom-0 right-20 cursor-pointer hue-rotate-[20deg]" draggable="false" src="https://cdn-icons-png.flaticon.com/128/10889/10889029.png"/>
          <motion.img dragConstraints={parentRef} drag whileDrag={{scale:1.4}} transition={{duration:1,ease:"backOut",}} className="pool-11 h-20 lg:h-20 absolute bottom-0 right-2 cursor-pointer hue-rotate-[20deg]" draggable="false" src="https://cdn-icons-png.flaticon.com/128/10888/10888926.png"/>
          <motion.img dragConstraints={parentRef} drag whileDrag={{scale:1.4}} transition={{duration:1,ease:"backOut",}} className="volly h-20 lg:h-20 absolute bottom-10 left-2 cursor-pointer hue-rotate-[20deg]" draggable="false" src="https://cdn-icons-png.flaticon.com/128/10466/10466230.png"/>
          <motion.img dragConstraints={parentRef} drag whileDrag={{scale:1.4}} transition={{duration:1,ease:"backOut",}} className="pool-yel h-20 lg:h-20 absolute bottom-0 left-24 cursor-pointer hue-rotate-[20deg]" draggable="false" src="https://cdn-icons-png.flaticon.com/128/10889/10889043.png"/>
          <motion.img dragConstraints={parentRef} drag whileDrag={{scale:1.4}} transition={{duration:1,ease:"backOut",}} className="pool-blac h-20 lg:h-20 absolute bottom-0 left-2 cursor-pointer hue-rotate-[20deg]" draggable="false" src="https://cdn-icons-png.flaticon.com/128/10888/10888959.png"/>
        </div>
  )
}

export default MotionDrag