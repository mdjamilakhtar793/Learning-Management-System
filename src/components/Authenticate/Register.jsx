import {
  Avatar,
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
const uploadFileCss = {
  cursor: 'pointer',
  marginleft: '-2%',
  width: '110%',
  border: 'none',
  height: '100%',
  color: '#ECC94B',
  backgroundColor: 'white',
};
const uploadFiles = {
  '&::file-selector-button': uploadFileCss,
};

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [imagePreview, setImagePreview] = useState();
  const [image, setImage] = useState();
  const imageChangeHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePreview(reader.result);
      setImage(file);
    };
  };
  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent={'center '} spacing={'16'}>
        <Heading children="Please Register" textTransform={'uppercase'} />
        <form action="" style={{ width: '100%' }}>
          <Box my={'3'} display={'flex'} justifyContent={'center'}>
            <Avatar size={'lg'} src={imagePreview} />
          </Box>

          <Box my={'3'}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter your name"
              type="text"
              focusBorderColor="blue"
            />
          </Box>
          <Box my={'3'}>
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

          <Box my={'3'}>
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

          <Box my={'3'}>
            <FormLabel htmlFor="chooseAvatar" children="Choose Image" />
            <Input
              accept="image*/"
              required
              id="chooseAvatar"
              placeholder="Enter Your Password"
              type={'file'}
              focusBorderColor="blue"
              css={uploadFiles}
              onChange={imageChangeHandler}
            />
          </Box>

          <Button colorScheme="blue" my={'3'} type={'submit'}>
            Register
          </Button>
          <Box my={'none'}>
            {' '}
            Already Register?{' '}
            <Link to={'/login'}>
              <Button colorScheme="blue" variant={'link'}>
                Login
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};
export default Register;
