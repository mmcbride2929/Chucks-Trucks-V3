import { Box, Flex, chakra } from '@chakra-ui/react'
import SortBySelect from './SortBySelect'
import InventoryContext from '../../context/InventoryContext'
import { useContext } from 'react'

const Header = () => {
  const { inventory } = useContext(InventoryContext)

  return (
    <Box as="header" mb={{ base: 10, sm: 10 }}>
      <Flex justifyContent="space-between">
        <chakra.h1
          fontSize={{ base: '1.5rem', sm: '2rem' }}
          fontWeight="semibold"
        >
          Inventory
        </chakra.h1>
        <SortBySelect />
      </Flex>
      <chakra.h3
        borderBottom="1px solid black"
        fontSize={{ base: '0.8rem', sm: '0.9rem' }}
      >
        {inventory.length} Results
      </chakra.h3>
    </Box>
  )
}
export default Header
