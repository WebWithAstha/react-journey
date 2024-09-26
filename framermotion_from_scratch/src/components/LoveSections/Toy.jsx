import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'





const Topbar = () => {
  const ref =  useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset:['start 30%','end 90%']
  })

  const rotate = useTransform(scrollYProgress,[0,1],["3deg","0deg"])
  const opacity = useTransform(scrollYProgress,[0,1],["0","1"])
  const y = useTransform(scrollYProgress,[0,1],["100%","0%"])

  return (
    <div ref={ref} className="w-full md:h-[70vh] h-max md:px-0 px-[8vw] flex justify-between items-center relative">
      <motion.img style={{opacity,y}} className=' w-[20vw] md:w-[14vw] md:ml-[10vw] z-[9] mix-blend-multiply' src="https://rukminim2.flixcart.com/image/416/416/xif0q/baby-rattle/0/j/c/newborn-baby-dog-grey-hanging-pulling-developmental-toy-baby-moo-original-imah2d4wnya7duks.jpeg?q=70&crop=false" alt="" />
      <div
       className="md:absolute right-[4%] top-[20%] md:top-[30%]">
        <div className="w-max md:h-[5.6vw] overflow-hidden">
        <motion.h1
        style={{rotate,y}}
        className='text-[6vw] leading-none'>Oh, the</motion.h1>
        </div>
        <div className="w-max md:h-[10vw] overflow-hidden">
        <motion.h1
        style={{rotate,y}}
         className='text-[6vw] leading-none'><span className='text-[10vw]'> joy</span> of <span className='text-[10vw]'> toys!</span> </motion.h1>
        </div>
      </div>
    </div>

  )
}
const Bottombar = () => {
  return (
    <div className="w-full h-max relative md:pt-[20vh] pt-[10vw] z-[0] flex flex-col justify-between">
      <div className="md:w-[50%]">
        <p className='md:text-[2vw] text-[4vw]'>Our humans bring us these delightful objects of entertainment and chewing pleasure. <br /> Imagine this: there we are, minding our own business, when suddenly, our human comes home with a new toy. It's like Christmas, our birthday, and the best day ever all rolled into one! We sniff it, we chew it, we throw it around, and repeat.</p>
      </div>
      <div className="md:absolute md:h-[80vh] translate-y-[20%] bottom-0 z-[-1] right-0 overflow-hidden">
        <img className='w-max h-full object-contain' src="https://img.freepik.com/free-photo/pure-youth-crazy-english-cocker-spaniel-young-dog-is-posing_155003-32328.jpg?t=st=1722416939~exp=1722420539~hmac=b9a462d28a79c14db7f14753540882b5f66f4e5410d79775543e833856e5e8ab&w=996" alt="" />

      </div>

    </div>

  )
}


const Loves = () => {

  const parentRef = useRef(null)
  
  return (
    <div ref={parentRef} className='w-full relative h-max z-[0] overflow-hidden md:p-[4vw] px-[8vw] bg-[#efefef]'>
      <Topbar  />
      <Bottombar />
    </div>
  )
}

export default Loves