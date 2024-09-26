import React, { useState } from 'react'
import { easeInOut, motion } from 'framer-motion'

const fish = {
  sit:{
    scale: 0.5,
    rotate:-45,
    // opacity: 0,
    left:"0%",
    bottom:"0%",
  },
  jump:{
    scale: 2,
    rotate:100,
    // opacity: 1,
   left:"80%",
    bottom:["0%","50%","-50%"],
  }

}


const MotionScaleMove = () => {

  const [animate, setanimate] = useState("sit")


  return (


    <motion.div
    className="relative overflow-hidden  h-64 lg:h-80 bg-purple-400 rounded-lg flex justify-center items-center"
    >
      <motion.div
        className="absolute cursor-pointer font-bold uppercase text-purple-700 rounded-lg selection:bg-purple-900 selection:text-purple-100 right-50 text-2xl  bg-purple-500/[.5] px-4 py-2 flex gap-6"
        onClick={(e)=>setanimate(animate === "sit" ? "jump" :"sit")}
        >{animate === "sit" ? "jump" :"set initial"}</motion.div>
      <motion.img
        initial="sit"
        variants={fish}
        animate={animate}
        transition={{
          duration: 1,
          ease: "easeInOut",
          // yoyo:true
        }}
      className="h-20 absolute -mb-2 ml-10 lg:h-12 hue-rotate-[70deg]" draggable="false" src="https://cdn-icons-png.flaticon.com/128/2990/2990525.png" />
      <motion.img
        initial="sit"
        variants={fish}
        animate={animate}
        transition={{
          duration: 1,
          ease: "easeInOut",
          // yoyo:true
        }}
      className="h-20 absolute lg:h-12 ml-4" draggable="false" src="https://cdn-icons-png.flaticon.com/128/875/875011.png" />
      <motion.img
        initial="sit"
        variants={fish}
        animate={animate}
        transition={{
          duration: 1,
          ease: "easeInOut",
          // yoyo:true
        }}
      className="h-20 absolute lg:h-12 -mb-4 -ml-4" draggable="false" src="https://cdn-icons-png.flaticon.com/128/2970/2970068.png" />
      <motion.img
        // initial="sit"
        variants={fish}
        animate={animate}
        transition={{
          duration: 1,
          ease: "easeInOut",
          // yoyo:true
        }}
      className="h-20 absolute lg:h-12 mb-4 -ml-4" draggable="false" src="https://cdn-icons-png.flaticon.com/128/10807/10807734.png" />

    </motion.div>
  )
}

export default MotionScaleMove