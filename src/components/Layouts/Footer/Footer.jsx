import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  TiSocialYoutubeCircular,
  TiSocialInstagramCircular,
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';

const Footer = () => {
  return (
    <Box padding={'4'} bg={'blackAlpha.900'} minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width={'full'}>
          <Heading children="All Right Reserved" color={'white'} />
          <Heading
            children="@ Md Jamil Akhtar"
            color={'blue'}
            size={'sm'}
            fontFamily={'body'}
          />
        </VStack>
        <HStack
          color={'white'}
          fontSize={'50'}
          spacing={['2', '10']}
          justifyContent={'center'}
        >
          <a href="https://youtube.com/6packprogrammer" target="blank">
            <TiSocialYoutubeCircular />
          </a>
          <a href="https://www.linkedin.com/in/jamil-akhtar/" target="blank">
            <TiSocialLinkedinCircular />
          </a>
          <a href="https://twitter.com/MAkhtar10061" target="blank">
            <TiSocialTwitterCircular />
          </a>
          <a href="https://www.instagram.com/mdjamil259/" target="blank">
            <TiSocialInstagramCircular />
          </a>
          <a href="https://github.com/mdjamilakhtar793" target="blank">
            <DiGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
