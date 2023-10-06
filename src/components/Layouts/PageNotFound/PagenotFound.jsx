import { Button, Container, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const PagenotFound = () => {
  return (
    <Container h={'90vh'}>
      <VStack justifyContent={'center'} h={'full'} spacing={'4'}>
        <RiErrorWarningFill color="red" size={'50px'} />
        <Heading my={'8'} textAlign={'center'} children="Page Not Found " />

        <Link to={'/'}>
          <Button variant={'ghost'}>Go to Home</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default PagenotFound;
