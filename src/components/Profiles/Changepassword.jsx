import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Changepassword = () => {
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  return (
    <Container py={'16'} minH={'90vh'}>
      <form>
        <Heading
          children="Change Password"
          my={'16'}
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        />
        <VStack spacing={'8'}>
          <Input
            required
            value={oldPassword}
            onChange={e => setOldPassword(e.target.value)}
            placeholder="Enter your Old Password"
            type="password"
            focusBorderColor="blue"
          />

          <Input
            required
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            placeholder="Enter your Old Password"
            type="password"
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

export default Changepassword;
