import {
  Button,
  Heading,
  Stack,
  Text,
  VStack,
  Image,
  Box,
  HStack,
} from '@chakra-ui/react';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import { Link } from 'react-router-dom';
import React from 'react';
import './home.css';
import vg from '../../assets/images/vg.png';
import introvideo from '../../assets/video/Elearning.mp4';
const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height={'100%'}
          justifyContent={['center', 'space-between']}
          alignItems={'center'}
          spacing={['16', '56']}
        >
          <VStack
            width={'full'}
            alignItems={['center', 'flex-end']}
            spacing={'3'}
          >
            <Heading
              children="Learn With JEM-Tech"
              textAlign={['center', 'left']}
              size={'2xl'}
            />
            <Text children="Find Valuable Content with Good Explaination With Normal Price" />
            <Link to="/courses">
              <Button size={'lg'} colorScheme="facebook">
                Register Now
              </Button>
            </Link>
          </VStack>
          <Image
            className="vector"
            boxSize={'md'}
            src={vg}
            objectFit={'contain'}
          />
        </Stack>
      </div>
      <Box padding={'8'} bg={'blackAlpha.700'}>
        <Heading
          children="Our Product"
          textAlign={'center'}
          fontFamily={'body'}
          color={'blue.400'}
        />
        <HStack
          className="brandsban"
          justifyContent={'space-evenly'}
          marginTop={'4'}
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>
      <div className="container2">
        <video
          autoPlay={true}
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introvideo}
        ></video>
      </div>
    </section>
  );
};

export default Home;
