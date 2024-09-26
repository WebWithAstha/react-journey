import React, { useState } from 'react'
import {motion} from 'framer-motion'


const MotionMove = () => {
  const [moveX, setmoveX] = useState("0")
  const [moveY, setmoveY] = useState("50")
  return (
    <div className="relative overflow-hidden h-64 lg:h-80 bg-purple-400 lg:col-span-4 rounded-lg flex justify-center items-center">
      <motion.img
      animate={{
        left: moveX+"%",
        top: moveY+"%",
      }}
      transition={{
        duration: 0.5,
        ease:"linear"
      }}
      
      className="hue-rotate-[312deg] top-[50%] left-0 -translate-y-1/2 -translate-x-1/2 absolute h-20 lg:h-32" draggable="false" src="https://cdn-icons-png.flaticon.com/128/477/477153.png" />
      <div className="mt-8 relative bg-white/[.5] p-3 flex gap-3 shadow-2xl rounded-lg">
        <div className="flex gap-4 items-center p-2 bg-purple-300/[.6] rounded-lg">
          <h2 className='text-purple-800 font-black whitespace-nowrap'>move y</h2>
          <input type="range" value={moveY} onChange={(e)=>setmoveY(e.target.value)} className='accent-purple-700' />
        </div>
        <div className="flex gap-4 items-center p-2 bg-purple-300/[.6] rounded-lg">
          <h2 className='text-purple-800 font-black whitespace-nowrap'>move x</h2>
          <input type="range" value={moveX} onChange={(e)=>setmoveX(e.target.value)} className='accent-purple-700' />
        </div>

      </div>
    </div>
  )
}

export default MotionMove