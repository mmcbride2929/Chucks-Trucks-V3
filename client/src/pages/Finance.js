import { Box } from '@chakra-ui/react'
import FinanceForm from '../components/Finance/FinanceForm'
import Header from '../components/Finance/Header'

const Finance = () => {
  return (
    <Box bg="whitesmoke">
      <Header />
      <FinanceForm />
    </Box>
  )
}
export default Finance
