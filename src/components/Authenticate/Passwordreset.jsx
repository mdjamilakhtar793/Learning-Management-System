import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Passwordreset = () => {
  const [password, setPassword] = useState();
  const params = useParams();
  console.log(params.token);
  return (
    <Container h={'90vh'}>
      <form>
        <Heading
          children="Reset Password"
          my={'16'}
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        />
        <VStack spacing={'8'} justifyContent={'center'}>
          <Input
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Create new password"
            type="password"
            focusBorderColor="blue"
          />
          <Button type="submit" width={'full'} colorScheme="blue">
            Reset Password
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default Passwordreset;
