import { Heading, Text, chakra, Flex, Box } from '@chakra-ui/react'

const Header = () => {
  return (
    <Heading
      pt={{ base: 0, md: 10 }}
      fontWeight="bold"
      fontSize={{ base: '1.8rem', sm: '2.0rem', lg: '2.5rem' }}
      textAlign="left"
      letterSpacing="tight"
      m="0 auto"
    >
      <Box>
        Getting A Truck You{' '}
        <Text as={'span'} color="red">
          Love{' '}
        </Text>
      </Box>
      <Box>
        Has Never Been So{' '}
        <Text as={'span'} color="red">
          Easy
        </Text>
        .
      </Box>
    </Heading>
  )
}
export default Header
