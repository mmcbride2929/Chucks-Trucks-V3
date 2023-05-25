import { Box, Select, border, textDecoration } from '@chakra-ui/react'
import { useContext } from 'react'
import InventoryContext from '../../context/InventoryContext'
import axios from 'axios'

const SortBySelect = () => {
  const { setInventory } = useContext(InventoryContext)

  // put methods in here... fetch and set inventory
  const handleSort = async (e) => {
    const sortType = e.target.value
    const response = await axios.get(
      `https://chucks-trucks-v3-production.up.railway.app/api/v1/inventory/sortBy=${sortType}`
    )
    setInventory(response.data)
  }

  return (
    <Box display={'flex'} alignItems={'center'}>
      <Select
        onChange={handleSort}
        w={{ base: '145px' }}
        fontSize={{ base: 'xs' }}
        size="sm"
        outline={'1px solid black'}
        focusBorderColor="black"
      >
        <option value="priceLow">Price - Lowest</option>
        <option value="priceHigh">Price - Highest</option>
        <option value="milesLow">Mileage - Lowest</option>
        <option value="milesHigh">Mileage - Highest</option>
        <option value="yearsLow">Year - Lowest</option>
        <option value="yearsHigh">Year - Highest</option>
      </Select>
    </Box>
  )
}
export default SortBySelect
