import { chakra, Box, Image } from '@chakra-ui/react'
import SaleItems from './SaleItems'
import salePhoto from '../../img/photos/oil-not-tires.jpg'

const Sale = ({ forSaleVehicles }) => {
  const carSelection = forSaleVehicles.slice(1, 3)
  return (
    <Box p="30px">
      <Box
        maxWidth={'950px'}
        textAlign="left"
        p={{ base: 5, sm: 5, lg: 10 }}
        display={'flex'}
        alignItems={{ sm: 'center', md: '' }}
        justifyContent={'space-between'}
        flexDir={{ base: 'column', md: 'row' }}
        margin={'30px  auto 50px auto'}
      >
        <Box
          display={'flex'}
          flexDir={'column'}
          justifyContent={'center'}
          w={{ sm: '75%', md: '45%', lg: '40%' }}
          my={{ sm: '50px', md: '' }}
        >
          <chakra.h1
            fontSize={{ base: '1.6rem', sm: '2rem' }}
            fontWeight="bold"
            color="red"
          >
            Featured Vehicles
          </chakra.h1>

          <chakra.p
            m="0 auto"
            marginTop="15px"
            fontSize={{ base: '0.85rem', sm: '0.9rem' }}
            fontWeight={550}
          >
            Chuck is currently offering generous discounts so get here quick! We
            are currently overstocked and need to make room for future orders.
            So if you need a vehicle, you're in luck!
          </chakra.p>
        </Box>
        <Box
          w={{ sm: '75%', md: '45%', lg: '40%' }}
          my={{ base: '15px', sm: '', md: '' }}
        >
          <Image
            src={salePhoto}
            alt="truck-photo"
            w={{ base: '100%', sm: '100%', lg: '100%' }}
          />
          <a href="inventory/6283f63197d65562ffc25759">
            <chakra.p
              mt={1}
              fontWeight={500}
              _hover={{ textDecor: 'underline 1.2px solid black' }}
              display="inline-block"
            >
              2011 Tundra
            </chakra.p>
          </a>
        </Box>
      </Box>
      <Box
        as="section"
        display="flex"
        alignItems="center"
        maxW="950px"
        m="0 auto"
        justifyContent={{ md: 'center', md: 'space-around' }}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        {carSelection.map((vehicle, index) => (
          <SaleItems key={index} vehicle={vehicle} />
        ))}
      </Box>
    </Box>
  )
}
export default Sale
