import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Intro from '../../assets/video/Intro.webm';
import { RiSecurePaymentFill } from 'react-icons/ri';
import termsandcond from '../../assets/documents/termsandCOnditions';
const VideoPlayers = () => (
  <Box>
    <video
      controls
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      src={Intro}
    ></video>
  </Box>
);
const TrandC = ({ termsCOnditions }) => (
  <Box>
    <Heading
      size={'md'}
      children="TermsAndConditions "
      textAlign={['center', 'left']}
      my={'4'}
    />
    <Box overflow={'scroll'} h={'sm'} p={'4'}>
      <Text
        textAlign={['center', 'left']}
        letterSpacing={'widest'}
        fontFamily={'heading'}
      >
        {termsCOnditions}
      </Text>
      <Heading
        m={'4'}
        size={'xs'}
        children="Refund Only applicable for Cancelation within 7 Days."
      />
    </Box>
  </Box>
);

const About = () => {
  return (
    <Container maxW={'container.lg'} padding={'16'} boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center', 'left']} />
      <Founder />
      <Stack m={'8'} direction={['column', 'row']} alignItems={'center'}>
        <Text fontFamily={'cursive'} m={'8'} textAlign={['center', 'left']}>
          We are a video streaming platform with some premium courses available
          only premium users.
        </Text>
        <Link to={'/subscribe'}>
          <Button variant={'ghost'} colorScheme="blue">
            Checkout Plan
          </Button>
        </Link>
      </Stack>
      <VideoPlayers />
      <TrandC termsCOnditions={termsandcond} />
      <HStack my={'4'} p={'4'}>
        <RiSecurePaymentFill />
        <Heading
          children="Payment is Secure by RezorPay"
          size={'xs'}
          fontFamily={'sans-serif'}
          textTransform={'uppercase'}
        />
      </HStack>
    </Container>
  );
};

export default About;
const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']}>
    <VStack>
      <Avatar
        src="https://media.licdn.com/dms/image/D5603AQHM6xTwM5ocbQ/profile-displayphoto-shrink_100_100/0/1685771867716?e=1698278400&v=beta&t=voOurG5fGSsgT29a86pOeoLCYfsDQLzRxr_pv_yCSS8"
        boxSize={['40', '48']}
      />
      <Text children="Co-Founder" opacity={0.7} />
    </VStack>
    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children="Md Jamil Akhtar" size={['md', 'xl']} />
      <Text
        alignItems={['center', 'lef']}
        children="Hi, I'm A Software Engineer Student Our Mission is to Provide good Quality content at reasonable Price."
      />
    </VStack>
  </Stack>
);
