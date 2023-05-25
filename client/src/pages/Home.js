import { useEffect, useState } from 'react'
import axios from 'axios'

import Sale from '../components/Home/Sale'
import Hero from '../components/Home/Hero'
import Reviews from '../components/Home/Reviews'
import { Box } from '@chakra-ui/react'

const Home = () => {
  const [forSaleVehicles, setForSaleVehicles] = useState([])

  // fetching all vehicles on sale on page load
  useEffect(() => {
    const fetchSaleVehicles = async () => {
      const vehicles = await axios.get(
        'https://chucks-trucks-v3-production.up.railway.app/api/v1/home/forSaleVehicles'
      )

      setForSaleVehicles(vehicles.data)
    }
    fetchSaleVehicles()
  }, [])

  return (
    <Box bg="white">
      <Hero />
      <Sale forSaleVehicles={forSaleVehicles} />
      <Reviews />
    </Box>
  )
}
export default Home
