import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Components/Navbar'
import CobineRoutes from './Routes/CobineRoutes'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <CobineRoutes/>
    </div>
  )
}

export default App
