import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const ForgetPassword = () => {
  const [email, setEmail] = useState();
  return (
    <Container h={'90vh'}>
      <form>
        <Heading
          children="Forgat"
          my={'16'}
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        />
        <VStack spacing={'8'}>
          <Input
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="heyuserabdsg@gmail.com"
            type="email"
            focusBorderColor="blue"
          />
          <Button type="submit" width={'full'} colorScheme="blue">
            Send Reset Link
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ForgetPassword;
