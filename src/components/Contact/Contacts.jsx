import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contacts = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [sms, setSms] = useState();
  return (
    <Container h={'90vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading children="Contact Me" />

        <form action="" style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter Your name"
              focusBorderColor="blue"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="heyuserabdsg@gmail.com"
              type="email"
              focusBorderColor="blue"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="sms" children="Query" />
            <Textarea
              required
              id="sms"
              value={sms}
              onChange={e => setSms(e.target.value)}
              placeholder="Enter your Message.."
              type="text"
              focusBorderColor="blue"
            />
          </Box>

          <Button colorScheme="blue" my={'4'} type={'submit'}>
            Send Query
          </Button>

          <Box my={'3'}>
            {' '}
            Request for Course Regarding?{' '}
            <Link to={'/request'}>
              <Button colorScheme="blue" variant={'link'}>
                Click
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Contacts;
