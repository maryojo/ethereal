import React from 'react'
import { Flex, Box, Image, Spacer, Text } from '@chakra-ui/react'
import SocialMediaIcons from '../components/SocialMediaIcons'
import Btn from './Button'
import logo from '../images/logo.png'


const IntroPanel = () => {
  return (
    <div>
      <Flex className="panel" alignItems={'center'} gap={'1.5rem'} ps={'2rem'}>
    <Image src={logo} alt="logo" pos={'absolute'} top={5}/>
        <Box>
        <h1>Every day is an adventure</h1>
        <Text width={'70%'} my={'30px'} fontWeight={'light'}>Discover the beauty and culture of the world with Ethereal. We provide easy and affordable bookings for all your travel needs, so you can explore the planet without breaking your bank</Text>
        <Btn text='Get started' />
        </Box>
        <Spacer/>
        <Box>
          <Image src={require('../images/img1.png')} />
        </Box>
        <SocialMediaIcons />
      </Flex>
    </div>
  )
}

export default IntroPanel