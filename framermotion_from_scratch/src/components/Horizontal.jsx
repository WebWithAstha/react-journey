import { animate, motion, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useRef } from 'react'






const Horizontal = () => {

    const ref = useRef(null)
    let {scrollYProgress,scrollX,scrollY,scrollXProgress} = useScroll({target: ref})
    const moveX = useTransform(scrollYProgress ,[0,1],["0%","-50%"])
    // console.log(moveX)
    console.log(scrollYProgress)
    useEffect(()=>{
        console.log("hey")

    },[scrollYProgress])





    const dogImages = [
        "https://images.unsplash.com/photo-1532623049-d9741e2bb744?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1591946614720-90a587da4a36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1618071147360-19df8b66de4f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1565194481104-39d1ee1b8bcc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ];


    return (
        <div ref={ref} className='w-full h-[300vh] relative'>
            <div className="w-full h-screen sticky overflow-hidden top-0 left-0 ">

            <motion.div 
            style={{x:moveX,transition:".2s transform linear"}}
            className="w-[500vw] md:w-[198vw] h-screen flex gap-[2vw] items-center md:px-[4vw] px-[8vw]">
                {
                    dogImages.map((image, index) => (
                        <img key={index} className='md:w-[30vw] w-[80vw] h-[80vh] object-cover rounded-lg shrink-0' src={image} alt="" />
                    ))
                }
            </motion.div>
                </div>
        </div>
    )
}

export default Horizontal