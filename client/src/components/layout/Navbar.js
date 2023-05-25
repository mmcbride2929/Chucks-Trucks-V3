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
        maxW="1100px"
        px={{ base: 2, sm: 4 }}
        py={1}
        m="0 auto"
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
              display={{ base: 'none', md: 'inline-flex' }}
            >
              <Button
                h="30px"
                w="80px"
                fontSize="14px"
                onClick={() => navigate('/inventory')}
                variant="ghost"
                _hover={{ border: '1px solid black' }}
              >
                Inventory
              </Button>
              <Button
                h="30px"
                w="80px"
                fontSize="14px"
                onClick={() => navigate('/finance')}
                variant="ghost"
                _hover={{ border: '1px solid black' }}
              >
                Finance
              </Button>
              <Button
                h="30px"
                w="80px"
                fontSize="14px"
                onClick={() => navigate('/about')}
                variant="ghost"
                _hover={{ border: '1px solid black' }}
              >
                About
              </Button>
            </HStack>
            <Box display={{ base: 'inline-flex', md: 'none' }}>
              <IconButton
                display={{ base: 'flex', md: 'none' }}
                aria-label="Open menu"
                fontSize="20px"
                color="black"
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
                _hover={{ color: 'black', border: '1px solid black' }}
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
                color="black"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />
                <Link
                  w="80px"
                  _hover={{
                    textDecoration: 'none',
                  }}
                  onClick={() => navigate('/')}
                >
                  <Button
                    textAlign="center"
                    h={9}
                    w="100%"
                    fontSize="0.9rem"
                    variant="ghost"
                    _hover={{ border: '1px solid black' }}
                    onClick={mobileNav.onClose}
                  >
                    Home
                  </Button>
                </Link>
                <Link
                  w="80px"
                  _hover={{
                    textDecoration: 'none',
                  }}
                  onClick={() => navigate('/inventory')}
                >
                  <Button
                    h={9}
                    w="100%"
                    fontSize="0.9rem"
                    _hover={{ border: '1px solid black' }}
                    variant="ghost"
                    onClick={mobileNav.onClose}
                  >
                    Inventory
                  </Button>
                </Link>

                <Link
                  w="80px"
                  _hover={{
                    textDecoration: 'none',
                  }}
                  onClick={() => navigate('/finance')}
                >
                  <Button
                    h={9}
                    w="100%"
                    fontSize="0.9rem"
                    _hover={{ border: '1px solid black' }}
                    variant="ghost"
                    onClick={mobileNav.onClose}
                  >
                    Finance
                  </Button>
                </Link>

                <Link
                  w="80px"
                  _hover={{
                    textDecoration: 'none',
                  }}
                  onClick={() => navigate('/about')}
                >
                  <Button
                    h={9}
                    w="100%"
                    fontSize="0.9rem"
                    variant="ghost"
                    _hover={{ border: '1px solid black' }}
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
