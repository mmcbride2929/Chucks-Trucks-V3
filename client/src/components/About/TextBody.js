import chuck from '../../img/photos/Chuck.jpg'

import { Flex, Container, chakra, Text, Image, Box } from '@chakra-ui/react'
const TextBody = () => {
  return (
    <Box maxW={'1200px'} textAlign="center" bg="white" m="0 auto" mt="60px">
      <Flex
        w={'full'}
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="center"
      >
        <Box w={{ base: '100%', md: '50%' }} p={{ base: 4, sm: 6 }}>
          <Image
            m="0 auto"
            mt={{ base: '10px', sm: '0px' }}
            src={chuck}
            w={{ base: '16rem', sm: '20rem', lg: '22rem' }}
          />
        </Box>
        <Box
          py={{ base: 8, md: 4 }}
          px={{ base: 0, md: 4 }}
          w={{ base: '100%', md: '50%' }}
          fontWeight="500"
          fontSize={{ sm: '1rem', md: '1.1rem' }}
        >
          <Box
            textAlign="left"
            fontWeight="700"
            fontSize={{ base: '0.8rem', sm: '1.2rem', lg: '1.2rem' }}
            letterSpacing="normal"
            mb={4}
          >
            <chakra.h3>
              "My name is Chuck, and I{' '}
              <chakra.span fontWeight="700" color="red">
                know
              </chakra.span>{' '}
              trucks."
            </chakra.h3>
            <chakra.p>- Chuck HiggleBottom</chakra.p>
          </Box>{' '}
          <Text
            lineHeight="7"
            textAlign="left"
            fontWeight="500"
            fontSize={{ base: '0.9rem', sm: '1rem' }}
            px={{ base: 0, md: 0 }}
          >
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
