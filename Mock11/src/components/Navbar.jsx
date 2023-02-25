import { Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Compo.css"
const Navbar = () => {
  return (
    <div>
        <nav>
            <Text fontSize="2xl">Masai Country Finder</Text>
                <Text><Link to="/">Home</Link></Text>
       
         
        </nav>
    </div>
  )
}

export default Navbar