import React from "react";
import {Flex ,Text,Box} from '@chakra-ui/react'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div style={{display:"flex",width:"90%" ,justifyContent:"space-between" ,padding:"2rem" ,borderBottom:"1px solid red",margin:"auto"}} >
        <Text fontSize='4xl'>E-commenrse</Text>
        <Box style={{display:"flex",justifyContent:"space-between",width:"70%"}} >
        <Link to="/"><Text fontSize='2xl' >Home</Text></Link>
        <Link to="/product"><Text fontSize='2xl'>Products</Text></Link>
        <Link to="/search"><Text fontSize='2xl'>Search</Text></Link>
        </Box>
       
      </div>
    </>
  );
};

export default Navbar;
    