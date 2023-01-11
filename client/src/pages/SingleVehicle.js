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
        `http://localhost:5000/api/v1/inventory/${path}`
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
      bg="whitesmoke"
      p="20px"
      minH="92vh"
      display="flex"
      justifyContent="center"
    >
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 10, md: 10 }}
        p={{ base: '25px', sm: 5, lg: 6 }}
        bg="white"
        maxW={{ base: '', sm: '400px', md: '450px' }}
        border="1px solid silver"
        marginTop={5}
        marginBottom={10}
        mx={2}
        boxShadow="xl"
        shadow="lg"
        display="flex"
        justifyContent="center"
        flexDirection={{ base: 'column' }}
      >
        <Flex>
          {loading ? (
            <chakra.p>loading</chakra.p>
          ) : (
            <Image
              rounded={'md'}
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
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
            >
              {year} - {name}
            </Heading>
            {loading ? (
              <chakra.p>Loading</chakra.p>
            ) : (
              <Text fontWeight={500} fontSize={'2xl'}>
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
              <Text mt="25px" fontSize={'lg'}>
                {description}
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', sm: '22px', lg: '28px' }}
                fontWeight={'700'}
                textTransform={'uppercase'}
                mb={1}
              >
                Product Details
              </Text>
              <List spacing={1}>
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
                w="125px"
                mt={{ base: '35px', sm: '25px', md: '25px' }}
                bg="red"
                color="white"
                fontSize="0.9rem"
                variant="solid"
                boxShadow="lg"
                _hover={{
                  bg: 'black',
                  color: 'white',
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
