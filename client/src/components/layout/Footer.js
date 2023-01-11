import logo from '../../img/logo/logoRED.png'

import { chakra, Flex, Icon, Image } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Flex
      w="full"
      bg="white"
      p="5px"
      shadow="md"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        h={{ base: 'vh', sm: '5vh' }}
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
          <Image src={logo} alt="logo" maxW="185px" />
        </chakra.a>

        <chakra.p py={{ base: '0', sm: '0' }} color="black">
          {' '}
          All rights reserved
        </chakra.p>
      </Flex>
    </Flex>
  )
}

export default Footer
