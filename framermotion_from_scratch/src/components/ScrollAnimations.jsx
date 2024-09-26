import { motion, transform, useInView } from 'framer-motion'
import React, { useRef } from 'react'

const imgAnimate = {
    intial: {
        opacity: 0,
        y: 200,
        rotate: -4
    },
    animate: {
        opacity: 1,
        y: 0,
        rotate: 0
    }

}



const TextContent = () => {

    const randomText = "If you think we're cute, you should see us with a treat."

    const ref = useRef(null)
    const isInView = useInView(ref, {
        margin: "180px", // Trigger animation when 50% of the element is in view
    })


    const animateText = {
        initial:{
            opacity: 0,
            y: 20,
            rotate: -4
        },
        animate: {
            opacity: 1,
            y: 0,
            rotate: 0
        }
    }

    // const isInview = useInView()



    return (
        <motion.div
            className="w-full h-max py-[4vw] flex items-center justify-center">
            <h1
             className='text-[10vw] text-center leading-tight '>
                {
                    randomText.split(' ').map((l, i) => (
                        <motion.span ref={ref}
                        variants={animateText}
                initial="initial"
                animate={ isInView && "animate"}
                transition={{
                    duration:.5,
                    ease:"linear",
                    // staggerChildren:1,
                    // delay:1
                }}
                        key={i} className='inline-block'>{l + "-"}</motion.span>
                    ))
                }</h1>
        </motion.div>
    )
}




const ScrollAnimations = () => {


    const imgRef = useRef(null)
    const isInView = useInView(imgRef, {
        margin: "-80px", // Trigger animation when 50% of the element is in view
    })

    return (
        <div className='md:px-[4vw]  px-[8vw] py-[2vw] relative w-full min-h-screen overflow-hidden'>
            <div className="w-full overflow-hidden mb-[4vw] h-[90vh]">

            <motion.img
                ref={imgRef}
                variants={imgAnimate}
                initial="intial"
                animate={isInView && "animate"}
                transition={{ duration: 1 }}
                
                className='w-full h-full origin-top mb-[4vw] object-cover object-center rounded' src="https://images.unsplash.com/photo-1583336663277-620dc1996580?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            <TextContent />
        </div>
    )
}

export default ScrollAnimations