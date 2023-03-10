import { useNavigate } from 'react-router-dom'
import {
  chakra,
  Box,
  Flex,
  Image,
  Badge,
  Stack,
  Button,
  Link,
} from '@chakra-ui/react'

const SaleItems = ({ vehicle }) => {
  const { name, miles, year, photo, price, condition, _id } = vehicle

  // navigate with react-router
  const navigate = useNavigate()

  return (
    <Box
      bg="white"
      border="1px solid silver"
      w={{ base: '325px', lg: '250px' }}
      marginTop={5}
      marginBottom={10}
      mx={2}
      rounded="lg"
      boxShadow="xl"
      shadow="lg"
      position="relative"
    >
      <Box
        h="175px"
        w="100%"
        roundedTop="lg"
        backgroundImage={require(`../../img/photos/${photo}`)}
        bgPos="center"
        bgSize="cover"
      ></Box>
      <Badge
        position="absolute"
        right="5"
        top="135"
        px="2"
        py="1px"
        color="white"
        bg="red"
        fontSize={'1rem'}
        fontWeight="bold"
        borderRadius="3px"
        textDecoration="solid line-through whitesmoke 3px"
      >
        ${price.toLocaleString('en-US')}
      </Badge>

      <Box
        px="10px"
        pt="2"
        pb="4"
        w={{ base: '325px', lg: '250px' }}
        textAlign="center"
      >
        <Box>
          <chakra.h1 fontSize={['1.1rem', '1.2rem']} fontWeight="bold" mb={2}>
            {year} - {name}
          </chakra.h1>

          <Box
            px={{ base: '55px', md: '35px' }}
            color="black"
            textAlign="center"
            fontSize="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <box>
              <chakra.p fontWeight="bold" fontSize={'0.9rem'} w="100%">
                Sale price:{' '}
              </chakra.p>
            </box>
            <box>
              <chakra.p mx="10px" py="1px" color="red" fontWeight="bold">
                ${vehicle.sale.salePrice.toLocaleString('en-US')}
              </chakra.p>
            </box>
          </Box>
        </Box>
        <chakra.p fontSize={'0.9rem'}>
          <chakra.span fontWeight="bold"> Miles: </chakra.span>
          {miles.toLocaleString('en-US')}
        </chakra.p>
        <chakra.p>
          <chakra.span fontSize={'0.9rem'} fontWeight="bold">
            {' '}
            Condition:{' '}
          </chakra.span>
          {condition}
        </chakra.p>
        <Link onClick={() => navigate(`inventory/${_id}`)}>
          <Button
            mt="20px"
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
            CHECK AVAILABILITY
          </Button>
        </Link>
      </Box>
    </Box>
  )
}
export default SaleItems
