import React from 'react'
import Basics from './Basics'
import AnimationControls from './AnimationControls'
import ScrollAnimations from './ScrollAnimations'
import LandingAnimation from './LandingAnimation'
import Horizontal from './Horizontal'
import Toy from './LoveSections/Toy'
import Drive from './LoveSections/Drive'

const Home = () => {
  return (
    <>
      <div className="w-full bg-[#f3f3f3]">
        <LandingAnimation />
        <ScrollAnimations />
        <Horizontal />
        <Toy />
        <Drive />
      </div>
    </>
  )
}

export default Home