import { chakra, Box } from '@chakra-ui/react'

const ReviewHeader = () => {
  return (
    <Box
      maxWidth={'950px'}
      textAlign="left"
      p={{ base: 5, sm: 5, lg: 10 }}
      display={'flex'}
      alignItems={{ base: 'center', md: '' }}
      justifyContent={'space-between'}
      flexDir={{ base: 'column' }}
      margin={'0px  auto 0px auto'}
    >
      <chakra.h1
        color="black"
        fontSize={{ base: '1.6rem', sm: '2rem' }}
        fontWeight="semibold"
      >
        Customer Reviews
      </chakra.h1>
      <chakra.h2
        color="black"
        fontSize={{ base: '0.85rem', sm: '0.9rem' }}
        fontWeight={550}
      >
        What Our Customers Are Saying
      </chakra.h2>
    </Box>
  )
}
export default ReviewHeader
