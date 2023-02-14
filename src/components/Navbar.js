import React from 'react'
// import logo from '../images/logo.png'
import { Box } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Box className='w-screen h-[70px] px-24 py-5 absolute top-0 flex items-center justify-between uppercase text-sm font-medium ' pos={'absolute'}>
      {/* <img src={logo}/> */}
      <div className='flex items-center gap-5 text-neutral-500'>
        <a href='/' className='hover:text-neutral-50 hover:underline'>Home</a>
        <a href='/about'>About</a>
      </div>
      <div className='flex items-center text-neutral-500'>
        <a href='/'>Home</a>
        <a href='/about'>About</a>
      </div>
    </Box>
  )
}

export default Navbar