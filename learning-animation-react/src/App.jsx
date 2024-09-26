import React from 'react'
import MotionDrag from './components/MotionDrag'
import MotionScroll from './components/MotionScroll'
import MotionScaleMove from './components/MotionScaleMove'
import MotionMove from './components/MotionMove'

const App = () => {
  return (
    <>
      <div className="w-full lg:h-screen min-h-screen bg-purple-700 p-2 lg:p-10">
        <div className="w-full h-full border-8 border-purple-400 grid grid-cols-1 lg:grid-cols-4 gap-2 rounded-lg p-4 lg:p-10">
          <MotionDrag />
          <MotionScroll/>
          <MotionScaleMove/>
          <MotionMove/>


        </div>

      </div>
    </>
  )
}

export default App