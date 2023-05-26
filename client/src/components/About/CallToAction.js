import { PhoneIcon } from '@chakra-ui/icons'
import { FiMapPin } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'
import { chakra, Box, Stack, Flex, Button, Link } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const CallToAction = () => {
  // navigate with react-router
  const navigate = useNavigate()

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      m="5px auto"
      mt="40px"
      bg="white"
      p={4}
      py={16}
      w="100%"
    >
      <chakra.h1
        fontWeight="bold"
        fontSize={{ base: '1.4rem', sm: '1.8rem' }}
        textAlign="center"
        letterSpacing="tight"
        mb={4}
      >
        <chakra.h1 color="black">
          Ready To <chakra.span color="red">Upgrade?</chakra.span>
        </chakra.h1>
        <chakra.h1 color="black">
          Stop By Chucks <chakra.span color="red">Today!</chakra.span>
        </chakra.h1>
      </chakra.h1>
      <Box color="black">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize={{ base: '0.75rem', sm: '0.85rem' }}
        >
          <AiOutlineMail size={18} />{' '}
          <chakra.p mx={3}>Chuck@ChuxTrux.truck</chakra.p>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize={{ base: '0.75rem', sm: '0.85rem' }}
        >
          <PhoneIcon /> <chakra.p mx={3}>234-678-9567</chakra.p>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize={{ base: '0.75rem', sm: '0.85rem' }}
        >
          <FiMapPin size={18} />
          <chakra.p mx={2}>123 Big Truck St. Columbus, OH</chakra.p>
        </Box>
      </Box>
      <Box
        mt={{ base: 6, md: 8 }}
        display="flex"
        w="100%"
        maxW="300px"
        justifyContent="space-evenly"
      >
        <Link
          _hover={{ textDecoration: 'none' }}
          onClick={() => navigate('/inventory')}
        >
          <Button
            w="125px"
            border="1px solid gray"
            borderRadius="55px"
            bg="white"
            color="black"
            fontSize="0.8rem"
            zIndex={99}
            _hover={{
              border: '2px solid black',
            }}
          >
            SHOP NOW
          </Button>
        </Link>
        <Link
          _hover={{ textDecoration: 'none' }}
          onClick={() => navigate('/finance')}
        >
          <Button
            w="125px"
            border="1px solid gray"
            borderRadius="55px"
            bg="white"
            color="black"
            fontSize="0.8rem"
            zIndex={99}
            _hover={{
              border: '2px solid black',
            }}
          >
            FINANCE
          </Button>
        </Link>
      </Box>
    </Flex>
  )
}

export default CallToAction
