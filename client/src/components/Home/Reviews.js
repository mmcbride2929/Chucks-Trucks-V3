import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import Review from './Review'
import ReviewHeader from './ReviewHeader'

const Reviews = () => {
  const [userReviews, setUserReviews] = useState([
    {
      name: 'Josh Jenkins',
      title: 'Read The Warranty',
      description:
        'When I asked to test drive one of the vehicles Chuck said that it was running fine and insissted I sign the paperwork.',
      rating: 2,
      photo: 'man.jpg',
    },
    {
      name: 'Tara Thomas',
      title: "Didn't Work Out",
      description:
        'The owner was nice but nothing caught our eye. We came here thinking it was a dealership but it was a junk-yard.',
      rating: 3,
      photo: 'girl.jpg',
    },
  ])
  return (
    <Box
      p={{ base: 6, sm: 0 }}
      maxW="950px"
      m={{ base: '0px auto', sm: '75px auto' }}
    >
      <ReviewHeader />
      <Box
        p={{ base: 0, md: 0 }}
        display="flex"
        flexDirection={{ base: 'column', lg: 'row' }}
        justifyContent="center"
        my={{ base: 0, sm: 6 }}
      >
        {userReviews.map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </Box>
    </Box>
  )
}
export default Reviews
