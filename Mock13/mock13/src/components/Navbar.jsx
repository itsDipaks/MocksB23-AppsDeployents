import { Button, Flex, HStack, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {useColorMode} from "@chakra-ui/color-mode"
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div>
        <HStack  width="90%" borderBottom={"2px"} flex justify={"space-between"} margin="auto" p="1rem">
<Image width={"5%"} src='https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/2b50.svg' alt=''/>
   
        
        <HStack width="40%"  flex justify={"space-between"} margin="auto" > 
            <Link to="/" >Home</Link>
        </HStack>
        <Button onClick={toggleColorMode}>
         {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
      </Button>
        </HStack>
    </div>
  )
}

export default Navbar