import {useColorMode} from 'chakra-ui/color-mode';
import {Button} from 'chakra-ui/button';
import {MoonIcon,SunIcon} from 'chakra-ui/icons'


import React from 'react'

function ToggleColorMode() {
	const {colorMode,toggleColorMode}=useColorMode()
  return (
	<Button 
	onClick={()=>toggleColorMode()}
	pos="absolute"
	top="0"
	right="0"
	m="1rem"
	>
		{colorMode ==='dark'?<SunIcon/>:<MoonIcon/> }</Button>
  )
}

export default ToggleColorMode