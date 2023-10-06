import { Button, Container, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const FailedPayments = () => {
  return (
    <Container h={'90vh'}>
      <VStack justifyContent={'center'} h={'full'} spacing={'4'}>
        <RiErrorWarningFill color="red" size={'50px'} />
        <Heading my={'8'} textAlign={'center'} children="Payment Failed " />

        <Link to={'/subscribe'}>
          <Button variant={'ghost'}>Try Again</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default FailedPayments;
