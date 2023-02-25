import React from 'react'
import { Link } from 'react-router-dom'
import "./Compo.css"
const Navbar = () => {
  return (
    <div>
        <nav>
            <h1>Mock10</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
       
            </ul>
        </nav>
    </div>
  )
}

export default Navbar