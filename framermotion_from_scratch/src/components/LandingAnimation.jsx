import React from 'react'

const LandingAnimation = () => {
  return (
    <div className='w-full md:h-screen bg-red-200/[.1] flex-col-reverse md:flex-col flex justify-end relative md:px-[4vw] px-[8vw] pt-[20vh] md:p-[4vw]'>
        <nav className='w-full font-bold rounded-xl fixed z-[99] top-0 left-0 md:py-[1vw] py-[4vw] md:px-[2vw] px-[8vw] flex justify-between'>
        <img className="md:w-[3vw] w-[10vw] h-max mix-blend-multiply" src="https://cdn-icons-png.flaticon.com/512/672/672675.png" alt=""/>
        <div className="flex items-center gap-4">
            <h4>contact</h4>
            <h4>menu</h4>
        </div>
        </nav>
        <div className="flex self-end md:items-center md:-translate-y-[200%] md:h-[10vh] md:w-[40vw]">
            <img className='md:h-[18vh] md:block hidden object-contain' src="https://cdn-icons-png.flaticon.com/512/2754/2754496.png" alt="" />
        <p className='text-[4vw] mb-[3vw] md:mb-0 md:text-[1.4vw]'>Dogs have a way of finding the people who need them most, filling an emptiness we didn't even know we had. Their unconditional love and boundless joy make every day brighter.</p>
        </div>
        <div className="mb-[3vw] md:mb-0">
        <h1 className='text-[10vw] leading-none uppercase'>Paw-sitive</h1>
        <h1 className='text-[10vw] leading-none uppercase md:mb-0'> Vibes<span> Only</span> </h1>
        </div>
    </div>
  )
}

export default LandingAnimation