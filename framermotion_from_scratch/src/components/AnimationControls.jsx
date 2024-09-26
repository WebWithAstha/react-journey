import { motion, useAnimationControls} from 'framer-motion'
import React, { useState } from 'react'


const change = {
    initial: {
        borderRadius: 0
    },
    round: {
        borderRadius: "50%"
    }
}



const AnimationControls = () => {

    const control = useAnimationControls()

    const [isClicked, setisClicked] = useState(false)

    const handleClick = () => {
        control.start({
            scale:2
        })
        // iski style round
    }

    return (
        <div className='w-max h-max relative flex gap-[2vw] items-center p-[2vw]'>
            {/* btn */}
            <button onClick={e=>{handleClick;setisClicked(!isClicked)}} className='bg-neutral-300 w-max h-max px-[3vw] py-[1.2vw] text-[1.5vw]  font-semibold rounded uppercase'>box to circle</button>
            {/* change */}
            <motion.div
                variants={change}
                initial="initial"
                animate={isClicked ? "round" :"initial"}
                className="w-[5vw] h-[5vw] bg-rose-500"></motion.div>
        </div>
    )
}

export default AnimationControls