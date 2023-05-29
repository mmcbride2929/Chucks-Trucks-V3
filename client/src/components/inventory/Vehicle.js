import { useNavigate } from 'react-router-dom'
import { chakra, Box, Button, Link, Badge } from '@chakra-ui/react'

const Vehicle = ({ vehicle }) => {
  const { name, miles, year, photo, price, condition, _id, description } =
    vehicle

  // navigate with react-router
  const navigate = useNavigate()

  return (
    <Box w="100%" display="flex" justifyContent="center" alignItems="center">
      <Box
        bg="white"
        border="1px solid silver"
        w={{ base: '275px', sm: '300px' }}
        mb={{ base: 8, md: 2 }}
        mx={2}
        rounded="md"
        _hover={{ boxShadow: 'xl', shadow: 'xl' }}
        position="relative"
      >
        <Link
          onClick={() => navigate(`/inventory/${_id}`)}
          _hover={{ textDecoration: 'none' }}
        >
          <Box p={3} pb={1}>
            <Box
              h="175px"
              w="100%"
              roundedTop="md"
              backgroundImage={require(`../../img/photos/${photo}`)}
              bgPos="center"
              bgSize="cover"
            ></Box>
            <Box py={2}>
              <Box
                className="miles-price-wrapper"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <chakra.h1 fontSize={['1rem', '']} fontWeight="bold">
                    {year} - {name}
                  </chakra.h1>
                </Box>
                <Box>
                  <chakra.p fontSize={'1rem'} color="red" fontWeight="bold">
                    ${price.toLocaleString('en-US')}
                  </chakra.p>
                </Box>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <chakra.p fontSize={'0.85rem'}>
                  <chakra.span fontSize={'0.85rem'}>Condition: </chakra.span>
                  {condition}
                </chakra.p>
                <chakra.p fontSize={'0.85rem'} fontWeight="bold">
                  {miles.toLocaleString('en-US')}
                  <chakra.span> mi.</chakra.span>
                </chakra.p>
              </Box>
              <Box
                fontSize={'0.85rem'}
                mt={4}
                display="flex"
                justifyContent="center"
              >
                <chakra.p> {description}</chakra.p>
              </Box>

              <Button
                onClick={() => navigate(`inventory/${_id}`)}
                w="100%"
                mt="5px"
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
                CHECK AVAILABILITY
              </Button>
            </Box>
          </Box>
        </Link>
      </Box>
    </Box>
  )
}
export default Vehicle
