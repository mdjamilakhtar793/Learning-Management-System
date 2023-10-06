import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const UpdateProfile = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  return (
    <Container py={'16'} minH={'90vh'}>
      <form>
        <Heading
          children="Update Profile"
          my={'16'}
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        />
        <VStack spacing={'8'}>
          <Input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter Name"
            type="text"
            focusBorderColor="blue"
          />

          <Input
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your Old Password"
            type="email"
            focusBorderColor="blue"
          />
          <Button w={'full'} colorScheme={'blue'} type={'submit'}>
            Change
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default UpdateProfile;
