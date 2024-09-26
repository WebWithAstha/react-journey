import {React,useContext} from 'react'
import {datacontext} from './context/DataContext.jsx'

function App() {
  const [data,setdata] = useContext(datacontext)
  return (
    <>
      <h1>I'm component App</h1>
      <h1>{data}</h1>
    </>
  )
}

export default App
