import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import CombineRoutes from './Routes/CombineRoutes'

function App() {

  return (
    <div className="App">
    <Navbar/>
    <CombineRoutes/>
    </div>
  )
}

export default App
