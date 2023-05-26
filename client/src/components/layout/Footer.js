import logo from '../../img/logo/logoRED.png'

import { chakra, Flex, Icon, Image } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Flex
      maxW="1100px"
      bg="white"
      alignItems="center"
      justifyContent="center"
      m="0 auto"
    >
      <Flex
        h={{ base: '5vh', sm: '4vh' }}
        w="full"
        as="footer"
        flexDir={{ base: 'column', sm: 'row' }}
        align="center"
        justify="center"
        px="2"
        py="2"
        bg="white"
      >
        <chakra.a href="/">
          <Image src={logo} alt="logo" maxW="165px" />
        </chakra.a>

        <chakra.p py={{ base: '0', sm: '0' }} fontSize="0.85rem" color="black">
          {' '}
          All rights reserved
        </chakra.p>
      </Flex>
    </Flex>
  )
}

export default Footer
