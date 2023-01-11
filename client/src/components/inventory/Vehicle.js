import { useNavigate } from 'react-router-dom'
import { chakra, Box, Button, Link } from '@chakra-ui/react'

const Vehicle = ({ vehicle }) => {
  const { name, miles, year, photo, price, condition, _id, description } =
    vehicle

  // navigate with react-router
  const navigate = useNavigate()

  return (
    <Box w="100%" display="flex" justifyContent="center" alignItems="center">
      <Box
        bg="white"
        maxW={{ base: '350px', sm: '300px' }}
        h={{ base: '500px', lg: '490px' }}
        borderWidth="1px"
        marginTop={{ base: 5, sm: 0 }}
        marginBottom={10}
        rounded="lg"
        boxShadow="xl"
        position="relative"
        border="1px solid silver"
      >
        <Box
          roundedTop="lg"
          h="200px"
          w="100%"
          backgroundImage={require(`../../img/photos/${photo}`)}
          bgPos="center"
          bgSize="cover"
          onClick={() => navigate(`${_id}`)}
          _hover={{ cursor: 'pointer' }}
        ></Box>
        <Box px={{ base: '20px', sm: '30px' }} pt="2" pb="4">
          <Box textAlign="center">
            <chakra.h1 fontSize={['1rem']} fontWeight="bold" mb={2}>
              {year} - {name}
            </chakra.h1>
            <Box
              mx={5}
              color="black"
              textAlign="center"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <chakra.p fontWeight="bold" fontSize={['0.9rem']}>
                {' '}
                Price:{' '}
              </chakra.p>

              <chakra.span
                mx="10px"
                py="1px"
                color="red"
                fontSize={['0.9rem']}
                fontWeight="bold"
              >
                ${price.toLocaleString('en-US')}
              </chakra.span>
            </Box>
            <chakra.p>
              <chakra.span fontWeight="bold" fontSize={['0.9rem']}>
                {' '}
                Miles:{' '}
              </chakra.span>
              {miles.toLocaleString('en-US')}
            </chakra.p>
            <chakra.p>
              <chakra.span fontSize={['0.9rem']} fontWeight="bold">
                {' '}
                Condition:{' '}
              </chakra.span>
              {condition}
            </chakra.p>

            <chakra.p
              mt={4}
              fontSize={{ base: '0.9rem', sm: '0.9rem' }}
              fontWeight="500"
            >
              {description}
            </chakra.p>

            <Link
              onClick={() => navigate(`${_id}`)}
              _hover={{ textDecoration: 'none' }}
            >
              <Button
                position="absolute"
                left="50%"
                right="0%"
                w="100px"
                transform="translate(-50%, -50%)"
                textAlign="center"
                bottom="5px"
                bg="red"
                color="white"
                fontSize="0.8rem"
                variant="solid"
                boxShadow="lg"
                _hover={{
                  bg: 'black',
                  color: 'white',
                }}
              >
                DETAILS
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default Vehicle
