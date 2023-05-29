import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  Link,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  List,
  ListItem,
} from '@chakra-ui/react'

const SingleVehicle = () => {
  const [vehicle, setVehicle] = useState({})
  const [loading, setLoading] = useState(true)
  const location = useLocation()
  const path = location.pathname.split('/')[2]

  // navigate with react-router
  const navigate = useNavigate()

  useEffect(() => {
    const fetchVehicle = async () => {
      const response = await axios.get(
        `https://chucks-trucks-v3-production.up.railway.app/api/v1/inventory/${path}`
      )

      setVehicle(response.data)
      setLoading(false)
    }
    fetchVehicle()
  }, [path])

  const { name, miles, year, photo, price, condition, _id, description } =
    vehicle

  return (
    <Box
      bg="white"
      p={{ base: '15px', sm: '75px' }}
      display="flex"
      justifyContent="center"
    >
      <SimpleGrid
        columns={{ base: 1, lg: 1 }}
        spacing={{ base: 6, md: 4 }}
        p={{ base: '25px', sm: 5, lg: 6 }}
        bg="white"
        maxW={{ base: '', sm: '400px', md: '450px' }}
        border="1px solid silver"
        marginTop={5}
        marginBottom={10}
        mx={2}
        boxShadow="sm"
        shadow="sm"
        display="flex"
        justifyContent="center"
        flexDirection={{ base: 'column' }}
      >
        <Flex>
          {loading ? (
            <chakra.p>loading</chakra.p>
          ) : (
            <Image
              rounded={'sm'}
              alt={'product image'}
              src={require(`../img/photos/${photo}`)}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '300px', md: '350px' }}
            />
          )}
        </Flex>
        <Box>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={700}
              fontSize={{ base: '1rem', sm: '1.2rem' }}
            >
              {year} - {name}
            </Heading>
            {loading ? (
              <chakra.p>Loading</chakra.p>
            ) : (
              <Text fontWeight={500} fontSize={'1.1rem'}>
                ${price.toLocaleString('en-US')}
              </Text>
            )}
          </Box>
          <Stack
            spacing={{ base: 4, sm: 2 }}
            direction={'column'}
            divider={<StackDivider borderColor="whitesmoke" />}
          >
            <VStack spacing={{ base: 4, sm: 6 }} maxW="400px">
              <Text mt="25px" fontSize={'0.9rem'}>
                {description}
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={'1.1rem'}
                fontWeight={'700'}
                textTransform={'uppercase'}
                mb={1}
              >
                Product Details
              </Text>
              <List spacing={1} fontSize={'0.9rem'}>
                <ListItem display="flex">
                  <Text
                    as={'span'}
                    fontWeight={'bold'}
                    mx={{ base: '', md: '1' }}
                  >
                    Price:
                  </Text>{' '}
                  {loading ? (
                    <chakra.p>Loading</chakra.p>
                  ) : (
                    <chakra.p>${price.toLocaleString('en-US')}</chakra.p>
                  )}
                </ListItem>
                <ListItem display="flex">
                  <Text as={'span'} fontWeight={'bold'}>
                    Sale Price:
                  </Text>{' '}
                  {loading ? (
                    <chakra.p>Loading</chakra.p>
                  ) : (
                    <Text color="red" fontWeight={'bold'} mx={1}>
                      {vehicle.sale.salePrice === 'n/a' ? <></> : <>$</>}
                      {vehicle.sale.salePrice.toLocaleString('en-US')}
                    </Text>
                  )}
                </ListItem>
                <ListItem display="flex">
                  <Text as={'span'} fontWeight={'bold'}>
                    Miles:
                  </Text>{' '}
                  {loading ? (
                    <chakra.p>Loading</chakra.p>
                  ) : (
                    <Text mx={1}>{miles.toLocaleString('en-US')}</Text>
                  )}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Driving Condition:
                  </Text>{' '}
                  {condition}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    VIN:
                  </Text>{' '}
                  {_id}
                </ListItem>
              </List>
            </Box>
          </Stack>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Link
              _hover={{ textDecoration: 'none' }}
              onClick={() => navigate(`/inventory`)}
            >
              {' '}
              <Button
                mt={{ base: '35px', sm: '25px', md: '25px' }}
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
                INVENTORY
              </Button>
            </Link>
          </Box>

          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <Text mt="20px" fontWeight={500} fontSize={12} fontStyle="italic">
              Vehicle may need towed off the lot.
            </Text>
          </Stack>
        </Box>
      </SimpleGrid>
    </Box>
  )
}
export default SingleVehicle
