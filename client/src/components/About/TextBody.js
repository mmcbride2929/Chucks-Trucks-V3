import chuck from '../../img/photos/Chuck.jpg'

import { Flex, Container, Text, Image, Box } from '@chakra-ui/react'
const TextBody = () => {
  return (
    <Box
      mt="40px"
      maxW={'1200px'}
      textAlign="center"
      bg="white"
      shadow="md"
      border="1px solid silver"
    >
      <Flex
        w={'full'}
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="center"
      >
        <Box w={{ base: '100%', md: '50%' }} p={{ base: 4, sm: 6 }}>
          <Image
            shadow="md"
            m="0 auto"
            mt={{ base: '10px', sm: '0px' }}
            src={chuck}
            w={{ base: '24rem', md: '27rem', lg: '30rem' }}
          />
        </Box>
        <Box
          py={{ base: 2, sm: 4 }}
          px={4}
          w={{ base: '100%', md: '50%' }}
          fontWeight="500"
          fontSize={{ sm: '1rem', md: '1.1rem' }}
        >
          {' '}
          <Text fontWeight="500" fontSize={{ base: '0.9rem', sm: '1.1rem' }}>
            Chuck's Trucks has been an established{' '}
            <Text as={'span'} fontStyle="italic" color="red">
              family owned
            </Text>{' '}
            business for over two weeks now. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ipsa facere laboriosam nisi doloremque
            asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Natus praise.
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}
export default TextBody
