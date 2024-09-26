import React, { useRef } from 'react'
import {motion,useScroll} from 'framer-motion'

const MotionScroll = () => {
  const scrollDivRef = useRef(null)
  const {scrollYProgress} = useScroll({
    container: scrollDivRef
  })
  console.log(scrollYProgress)
  return (
    <div ref={scrollDivRef}  className="scrollbar-hid relative overflow-x-hidden selection:bg-purple-900 selection:text-purple-100   h-64 lg:h-80 lg:col-span-2  bg-purple-400 rounded-lg overflow-y-auto">

            <motion.div className="box sticky origin-left top-0 px-10 self-start w-full h-[.7rem] rounded-full  bg-purple-300" style={{scaleX:scrollYProgress}}></motion.div>


            <div className='w-full p-10'>
              <h1 className="text-purple-700 font-mono font-black">Read your bill</h1>
              <div className="">
                In a world that often feels like a relentless race, it's easy to get caught up in the competition and hustle, striving for the next big achievement. Yet, amidst the pursuit of our goals, it's essential to remember the power of positivity and the importance of savoring life's simple pleasures. Embrace each day with a grateful heart, finding joy in the little things—a warm cup of coffee, a heartfelt conversation, or the beauty of a sunset. These moments of joy are not just fleeting distractions but the very essence of a life well-lived. By staying positive and giving your best, you cultivate a mindset that turns challenges into opportunities and setbacks into lessons. And as you chase your dreams, never lose sight of the small, meaningful experiences that bring light to your journey. Remember, true success is not just about reaching the top but also cherishing the path that leads you there.
                In a world that often feels like a relentless race, it's easy to get caught up in the competition and hustle, striving for the next big achievement. Yet, amidst the pursuit of our goals, it's essential to remember the power of positivity and the importance of savoring life's simple pleasures. Embrace each day with a grateful heart, finding joy in the little things—a warm cup of coffee, a heartfelt conversation, or the beauty of a sunset. These moments of joy are not just fleeting distractions but the very essence of a life well-lived. By staying positive and giving your best, you cultivate a mindset that turns challenges into opportunities and setbacks into lessons. And as you chase your dreams, never lose sight of the small, meaningful experiences that bring light to your journey. Remember, true success is not just about reaching the top but also cherishing the path that leads you there.

            </div>
            </div>

          </div>
  )
}

export default MotionScroll