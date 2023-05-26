import ContactPrompt from './ContactPrompt'

import {
  chakra,
  Box,
  SimpleGrid,
  GridItem,
  Text,
  Select,
  Heading,
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import { useState } from 'react'
import validator from 'validator'

const FinanceForm = () => {
  const [formInput, setFormInput] = useState({
    firstName: '',
    email: '',
    address: '',
    creditScore: '',
    downPayment: '',
    tradeIn: 'yes',
  })

  // form display before submit
  const [formActive, setFormActive] = useState('block')
  // form prompt display after submit
  const [promptActive, setPromptActive] = useState('none')
  // setting our form errors
  const [formErrors, setFormErrors] = useState({})
  const [validEmail, setValidEmail] = useState(false)

  // validating our user input
  const validateForm = (formInput) => {
    const errorObject = {}

    if (!formInput.firstName) {
      errorObject.firstName = 'name required'
    }

    // validating email with validator
    if (validator.isEmail(formInput.email)) {
      setValidEmail(true)
    } else {
      setValidEmail(false)
      errorObject.email = 'required'
    }

    if (!formInput.address) {
      errorObject.address = 'required'
    }

    if (!formInput.creditScore) {
      errorObject.creditScore = 'required'
    }

    if (formInput.creditScore > 1000 || formInput.creditScore < 1) {
      errorObject.creditScore = 'invalid score'
    }

    if (!formInput.downPayment) {
      errorObject.downPayment = 'required'
    }

    if (formInput.downPayment > 50000 || formInput.downPayment < 1) {
      errorObject.downPayment = 'invalid amount'
    }

    return errorObject
  }

  // handling any changes to our form inputs
  const handleChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // getting object that may contain errors
    const errorCheck = validateForm(formInput)

    //if any errors present
    if (
      errorCheck.firstName ||
      errorCheck.email ||
      errorCheck.address ||
      errorCheck.downPayment ||
      errorCheck.creditScore
    ) {
      // set errors in state for display
      setFormErrors(validateForm(formInput))

      // else display success promt + submit
    } else {
      // presenting user with success prompt
      setFormActive('none')
      setPromptActive('block')

      // we could send form info to its own collection here.
    }
  }

  return (
    <Box p={{ base: 6, sm: 12 }} maxW="500px" m="0 auto">
      <Box
        px={{ base: '0px', md: '20px' }}
        textAlign={{ base: 'center', md: null }}
      >
        <Heading fontSize={{ base: '1.5rem', sm: '1.8rem' }} fontWeight="700">
          Personal Information
        </Heading>
        <Text mt={1} fontSize={{ base: '0.9rem', sm: '1.1rem' }}>
          Use a permanent address where you can receive mail.
        </Text>
      </Box>
      <SimpleGrid
        display={{ base: 'initial', md: 'grid' }}
        columns={{ md: 2 }}
        spacing={{ md: 6 }}
      >
        <GridItem mt={{ base: '20px', md: null }} colSpan={{ md: 2 }}>
          <chakra.form
            method="POST"
            rounded={[null, 'md']}
            overflow={{ sm: 'hidden' }}
            mb={{ base: '10px', md: '' }}
            display={`${formActive}`}
            border="1px solid silver"
          >
            <Stack px={4} py={5} p={[null, 6]} bg="white" spacing={6}>
              <SimpleGrid columns={6} spacing={2}>
                <FormControl as={GridItem} colSpan={[6]}>
                  <FormLabel
                    htmlFor="firstName"
                    mb={'2px'}
                    fontSize="1rem"
                    fontWeight="500"
                    color="black"
                  >
                    Name
                  </FormLabel>
                  <Input
                    value={formInput.firstName}
                    placeholder="Enter your name"
                    onChange={handleChange}
                    position="relative"
                    required
                    maxLength="30"
                    type="text"
                    name="firstName"
                    id="firstName"
                    autoComplete="given-name"
                    borderColor="silver"
                    bg="white"
                    focusBorderColor="black"
                    size="sm"
                    w="full"
                    maxW="400px"
                    rounded="md"
                  />
                  <chakra.p
                    color="red"
                    position={'absolute'}
                    top={{ base: '10px', md: '8px' }}
                    right={{ base: '10px', md: '15px' }}
                    fontSize={{ base: '0.8rem', md: '15px' }}
                  >
                    {formInput.firstName === '' ? formErrors.firstName : ''}
                  </chakra.p>
                </FormControl>

                <FormControl isRequired as={GridItem} colSpan={[6]}>
                  <FormLabel
                    htmlFor="email"
                    mb="2px"
                    fontSize="1rem"
                    color="black"
                  >
                    Email
                  </FormLabel>
                  <Input
                    value={formInput.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    id="email"
                    required
                    autoComplete="email"
                    borderColor="silver"
                    bg="white"
                    focusBorderColor="black"
                    shadow="sm"
                    size="sm"
                    w="full"
                    maxW="400px"
                    rounded="md"
                  />
                  <chakra.p
                    color="red"
                    position={'absolute'}
                    top={{ base: '10px', md: '8px' }}
                    right={{ base: '10px', md: '15px' }}
                    fontSize={{ base: '0.75rem', md: '15px' }}
                  >
                    {validEmail === false ? formErrors.email : ''}
                  </chakra.p>
                </FormControl>

                <FormControl as={GridItem} colSpan={6}>
                  <FormLabel
                    mb="2px"
                    htmlFor="address"
                    fontSize="1rem"
                    color="black"
                  >
                    Street address
                  </FormLabel>
                  <Input
                    value={formInput.address}
                    onChange={handleChange}
                    type="text"
                    placeholder={'Enter your address'}
                    name="address"
                    id="address"
                    borderColor="silver"
                    autoComplete="street-address"
                    bg="white"
                    focusBorderColor="black"
                    shadow="sm"
                    size="sm"
                    w="full"
                    maxW="400px"
                    rounded="md"
                  />
                </FormControl>

                <FormControl as={GridItem} colSpan={[6]}>
                  <FormLabel
                    htmlFor="creditScore"
                    fontSize="1rem"
                    mb="2px"
                    color="black"
                  >
                    Credit Score
                  </FormLabel>
                  <Input
                    value={formInput.creditScore}
                    onChange={handleChange}
                    type="number"
                    min="1"
                    max="999"
                    maxLength={4}
                    required
                    name="creditScore"
                    id="creditScore"
                    autoComplete="credit-score"
                    borderColor="silver"
                    bg="white"
                    placeholder="Enter credit score"
                    focusBorderColor="black"
                    shadow="sm"
                    size="sm"
                    w="100%"
                    maxW="400px"
                    rounded="md"
                  />
                  <chakra.p
                    color="red"
                    position={'absolute'}
                    top={{ base: '10px', md: '8px' }}
                    right={{ base: '10px', md: '15px' }}
                    fontSize={{ base: '0.8rem', md: '15px' }}
                  >
                    {formInput.creditScore === ''
                      ? formErrors.creditScore
                      : '' || formInput.creditScore > 1000
                      ? formErrors.creditScore
                      : '' || formInput.creditScore < 1
                      ? formErrors.creditScore
                      : ''}
                  </chakra.p>
                </FormControl>

                <FormControl as={GridItem} colSpan={[6]}>
                  <FormLabel
                    htmlFor="downPayment"
                    fontSize="1rem"
                    mb="2px"
                    color="black"
                  >
                    Down Payment
                  </FormLabel>
                  <Input
                    value={formInput.downPayment}
                    onChange={handleChange}
                    type="number"
                    placeholder="Enter down payment"
                    min="500"
                    max="50000"
                    required
                    name="downPayment"
                    id="downPayment"
                    autoComplete="down-payment"
                    borderColor="silver"
                    bg="white"
                    focusBorderColor="black"
                    shadow="sm"
                    size="sm"
                    w="100%"
                    maxW="400px"
                    rounded="md"
                  />
                  <chakra.p
                    color="red"
                    position={'absolute'}
                    top={{ base: '10px', md: '8px' }}
                    right={{ base: '10px', md: '15px' }}
                    fontSize={{ base: '0.8rem', md: '15px' }}
                  >
                    {formInput.downPayment === ''
                      ? formErrors.downPayment
                      : '' || formInput.downPayment > 50000
                      ? formErrors.downPayment
                      : '' || formInput.downPayment < 1
                      ? formErrors.downPayment
                      : ''}
                  </chakra.p>
                </FormControl>
                <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                  <FormLabel
                    htmlFor="tradeIn"
                    fontSize="1rem"
                    mb="2px"
                    color="black"
                  >
                    Trade-In
                  </FormLabel>
                  <Select
                    value={formInput.tradeIn}
                    onChange={handleChange}
                    type="text"
                    _placeholder="yes"
                    name="tradeIn"
                    id="tradeIn"
                    borderColor="silver"
                    bg="white"
                    focusBorderColor="black"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                  >
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                  </Select>
                </FormControl>
              </SimpleGrid>
            </Stack>
            <Box px={{ base: 4, sm: 6 }} py={6} bg="white" textAlign="center">
              <Button
                onClick={handleSubmit}
                w="100%"
                maxW="200px"
                border="1px solid gray"
                borderRadius="55px"
                bg="white"
                color="black"
                fontSize="0.8rem"
                zIndex={99}
                _hover={{
                  border: '2px solid black',
                }}
              >
                Submit
              </Button>
            </Box>
          </chakra.form>
        </GridItem>
      </SimpleGrid>
      {promptActive === 'block' ? (
        <ContactPrompt promptActive={`${promptActive}`} />
      ) : (
        <></>
      )}
    </Box>
  )
}
export default FinanceForm
