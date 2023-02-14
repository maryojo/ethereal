import React from 'react'
import { Button } from '@chakra-ui/react'

const Btn = ({text}) => {
  return (
    <Button bg='#5B9D19' py='5' px='7' fontWeight={'medium'} color={'black'}>
      {text}
    </Button>
  );
}

export default Btn;