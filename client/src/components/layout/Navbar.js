import logo from '../../img/logo/logoRED.png'

import {
  chakra,
  Box,
  Flex,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Image,
  Link,
} from '@chakra-ui/react'
import { AiOutlineMenu } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const mobileNav = useDisclosure()

  // navigate with react-router
  const navigate = useNavigate()

  return (
    <>
      <chakra.header
        bg="white"
        w="full"
        px={{ base: 2, sm: 4 }}
        py={2}
        shadow="md"
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          mx="auto"
          p={1}
        >
          <Flex>
            <chakra.a href="/" display="flex" alignItems="center">
              <Image
                src={logo}
                alt="logo"
                maxW={{ base: '175px', sm: '225px' }}
              />
            </chakra.a>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={3}
              mr={1}
              color="red"
              display={{ base: 'none', md: 'inline-flex' }}
            >
              <Button
                h="30px"
                w="80px"
                fontSize="14px"
                onClick={() => navigate('/inventory')}
                variant="ghost"
                _hover={{ color: 'white', bg: 'red' }}
              >
                Inventory
              </Button>
              <Button
                h="30px"
                w="80px"
                fontSize="14px"
                onClick={() => navigate('/finance')}
                variant="ghost"
                _hover={{ color: 'white', bg: 'red' }}
              >
                Finance
              </Button>
              <Button
                h="30px"
                w="80px"
                fontSize="14px"
                onClick={() => navigate('/about')}
                variant="ghost"
                _hover={{ color: 'white', bg: 'red' }}
              >
                About
              </Button>
            </HStack>
            <Box display={{ base: 'inline-flex', md: 'none' }}>
              <IconButton
                display={{ base: 'flex', md: 'none' }}
                aria-label="Open menu"
                fontSize="20px"
                color="red"
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
                _hover={{ color: 'white', bg: 'red' }}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? 'flex' : 'none'}
                flexDirection="column"
                p={2}
                pb={4}
                bg="white"
                spacing={3}
                rounded="sm"
                shadow="sm"
                zIndex="2"
                color="red"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />
                <Link
                  w="20%"
                  _hover={{
                    textDecoration: 'none',
                  }}
                  onClick={() => navigate('/')}
                >
                  <Button
                    w="100%"
                    fontSize="0.9rem"
                    variant="ghost"
                    border="1px solid red"
                    _hover={{ color: 'white', bg: 'red' }}
                    onClick={mobileNav.onClose}
                  >
                    Home
                  </Button>
                </Link>
                <Link
                  w="20%"
                  _hover={{
                    textDecoration: 'none',
                  }}
                  onClick={() => navigate('/inventory')}
                >
                  <Button
                    w="100%"
                    fontSize="0.9rem"
                    border="1px solid red"
                    _hover={{ color: 'white', bg: 'red' }}
                    variant="ghost"
                    onClick={mobileNav.onClose}
                  >
                    Inventory
                  </Button>
                </Link>

                <Link
                  w="20%"
                  _hover={{
                    textDecoration: 'none',
                  }}
                  onClick={() => navigate('/finance')}
                >
                  <Button
                    w="100%"
                    fontSize="0.9rem"
                    border="1px solid red"
                    _hover={{ color: 'white', bg: 'red' }}
                    variant="ghost"
                    onClick={mobileNav.onClose}
                  >
                    Finance
                  </Button>
                </Link>

                <Link
                  w="20%"
                  _hover={{
                    textDecoration: 'none',
                  }}
                  onClick={() => navigate('/about')}
                >
                  <Button
                    w="100%"
                    fontSize="0.9rem"
                    variant="ghost"
                    border="1px solid red"
                    _hover={{ color: 'white', bg: 'red' }}
                    onClick={mobileNav.onClose}
                  >
                    About
                  </Button>
                </Link>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </>
  )
}
export default Navbar
