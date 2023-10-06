import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const Subscribe = () => {
  return (
    <Container h={'90vh'} p={'16'}>
      <Heading children="Welcome" my={'8'} textAlign={'center'} />
      <VStack
        boxShadow={'lg'}
        spacing={'0'}
        alignItems={'stretch'}
        borderRadius={'lg'}
      >
        <Box bg={'blue.600'} p={'4'} css={{ borderRadius: '8px 8px 0 0' }}>
          <Text children="Pro Pack - ₹596.00" />
        </Box>
        <Box padding={'4'}>
          <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
            <Text children="Join Pro Pack and get access to all content. - ₹596.00" />
            <Heading children="₹596.00 Only" size={'md'} />
          </VStack>
          <Button my={'8'} w={'full'} colorScheme="blue">
            Buy Now
          </Button>
        </Box>
        <Box
          bg={'blackAlpha.500'}
          padding={'4'}
          css={{ borderRadius: '0 0 8px 8px' }}
        >
          <Heading
            size={'sm'}
            children="100% Refund and Cancellation"
            color={'white'}
            textTransform={'uppercase'}
          />
          <Text
            children=" Terms and Conditions Apply"
            fontSize={'xs'}
            color={'white'}
          />
        </Box>
      </VStack>
    </Container>
  );
};

export default Subscribe;
