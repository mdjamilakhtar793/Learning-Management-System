import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent={'center '} spacing={'16'}>
        <Heading children="Welcome to Jem E-Learning" />
        <form action="" style={{ width: '100%' }}>
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
            <FormLabel htmlFor="password" children="Password" />
            <Input
              required
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              type="password"
              focusBorderColor="blue"
            />
          </Box>
          <Box>
            <Link to={'/fpassword'}>
              <Button variant={'link'}>Forget Password</Button>
            </Link>
          </Box>
          <Button colorScheme="blue" my={'4'} type={'submit'}>
            Login
          </Button>
          <Box my={'3'}>
            {' '}
            New Use?{' '}
            <Link to={'/register'}>
              <Button colorScheme="blue" variant={'link'}>
                Register
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
