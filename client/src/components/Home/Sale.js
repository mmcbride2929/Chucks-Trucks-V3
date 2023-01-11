import { chakra, Box } from '@chakra-ui/react'
import SaleItems from './SaleItems'

const Sale = ({ forSaleVehicles }) => {
  return (
    <Box p="30px">
      <Box textAlign="center" p={{ base: 5, sm: 5, lg: 6 }}>
        <chakra.h1
          fontSize={{ base: '1.6rem', sm: '2rem' }}
          fontWeight="bold"
          color="red"
        >
          Featured Vehicles
        </chakra.h1>
        <chakra.h2
          fontSize={{ base: '1rem', sm: '1.2rem' }}
          fontWeight="bold"
          color="black"
          textTransform="uppercase"
        >
          DON'T MISS OUT!
        </chakra.h2>
        <chakra.p
          minW="225px"
          maxW="375px"
          m="0 auto"
          marginTop="15px"
          fontSize={{ base: '0.75rem', sm: '1rem' }}
        >
          Chuck is currently offering generous discounts so get here quick! We
          are currently overstocked and need to make room for future orders. So
          if you need a vehicle, you're in luck!
        </chakra.p>
      </Box>
      <Box
        as="section"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection={{ base: 'column', lg: 'row' }}
      >
        {forSaleVehicles.map((vehicle, index) => (
          <SaleItems key={index} vehicle={vehicle} />
        ))}
      </Box>
    </Box>
  )
}
export default Sale
