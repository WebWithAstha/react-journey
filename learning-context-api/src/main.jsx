import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import DataContext from './context/DataContext.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <DataContext>
    <App />
  </DataContext>,
)
