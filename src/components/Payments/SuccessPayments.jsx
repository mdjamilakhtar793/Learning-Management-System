import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiCheckboxFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const SuccessPayments = () => {
  return (
    <Container h={'90vh'} p={'16'}>
      <Heading my={'8'} textAlign={'center'} children="You Have Pro Pack" />
      <VStack
        boxShadow={'lg'}
        pb={'16'}
        alignItems={'center'}
        borderRadius={'lg'}
      >
        <Box
          w={'full'}
          bg={'blue'}
          p={'4'}
          css={{ borderRadius: '8px 8px 0 0' }}
        >
          <Text children="Payment Success " color={'white'} />
        </Box>
        <Box p={'4'}>
          <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
            <Text>
              Congratulations you are Pro-Members. You have Access to Premiuam
              content.
            </Text>
            <Heading size={'4xl'}>
              <RiCheckboxFill />
            </Heading>
          </VStack>
        </Box>
        <Link to={'/profile'}>
          <Button variant={'ghost'}>Go to Profile</Button>
        </Link>
        <Heading size={'xs'}>Referance: asaadasdahdadja</Heading>
      </VStack>
    </Container>
  );
};

export default SuccessPayments;
