import { React, createContext, useState } from 'react'

export const datacontext = createContext(null)

const DataContext = ({ children }) => {
    const [data, setdata] = useState("Data to access globally!")
    // console.log(children)
    return (
        <datacontext.Provider value={[data, setdata]}>

            <div>DataContext</div>
            {children}
        </datacontext.Provider>

    )
}

export default DataContext