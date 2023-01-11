import { useContext, useEffect } from 'react'
import axios from 'axios'
import Vehicles from '../components/inventory/Vehicles'
import InventoryContext from '../context/InventoryContext'
import Header from '../components/inventory/Header'
import { Box } from '@chakra-ui/react'
import FeatureList from '../components/inventory/FeatureList'

const Inventory = () => {
  const { inventory, setInventory } = useContext(InventoryContext)

  // fetching all vehicles on page load
  useEffect(() => {
    const fetchInventory = async () => {
      const response = await axios.get(
        'https://chucks-trucks-v3-production.up.railway.app/api/v1/inventory'
      )
      setInventory(response.data)
    }
    fetchInventory()
  }, [])

  return (
    <Box
      bg="whitesmoke"
      as="section"
      p={8}
      paddingLeft={{ base: 8, lg: 0 }}
      m="0 auto"
      maxW="1350px"
    >
      <Header />
      <Box display="flex">
        <Box display={{ base: 'none', lg: 'block' }} w="25%">
          <FeatureList />
        </Box>
        <Box
          w={{ base: '', lg: '66%' }}
          margin="0 auto"
          display={{ base: '', lg: 'flex' }}
          justifyContent={{ base: '', lg: 'center' }}
        >
          <Vehicles vehicles={inventory} />
        </Box>
      </Box>
    </Box>
  )
}
export default Inventory
