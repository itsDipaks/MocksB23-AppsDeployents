import { Textarea ,Text} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import "./components.css"
const Navbar = () => {
  return (
    <div>
        
        <nav className='nav'>
        <Text fontSize="2xl">Masai Job App</Text>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/posting">Job Posting</Link></li>
            <li><Link to="/listing">Job Listing</Link></li>
        </ul>
        </nav>
       
    </div>
  )
}

export default Navbar