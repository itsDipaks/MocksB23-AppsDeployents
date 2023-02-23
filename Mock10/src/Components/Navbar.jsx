import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"
const Navbar = () => {
  return (
    <div>
        <nav>
            <h1>Puppy Love</h1>
            <ul>
            <Link to="/"> <li> Home  </li></Link>
            <Link to="/puppy"> <li> Puppy  </li></Link>
            <Link to="/search"> <li> Search-Puppy  </li></Link>
            </ul>
        </nav>

    </div>
  )
}

export default Navbar