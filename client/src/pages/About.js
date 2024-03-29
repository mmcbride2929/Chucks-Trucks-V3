import TextBody from '../components/About/TextBody'
import Header from '../components/About/Header'
import CallToAction from '../components/About/CallToAction'
import { Box } from '@chakra-ui/react'
const About = () => {
  return (
    <Box bg="white" p={12} display="flex" flexDirection="column">
      <Header />

      <TextBody />
      <CallToAction />
    </Box>
  )
}
export default About
