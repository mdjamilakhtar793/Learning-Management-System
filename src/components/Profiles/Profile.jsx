import {
  Avatar,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
const uploadFileCss = {
  cursor: 'pointer',
  marginleft: '-2%',
  width: '110%',
  border: 'none',
  height: '100%',
  color: '#ECC94B',
  backgroundColor: 'white',
};
const uploadFiles = {
  '&::file-selector-button': uploadFileCss,
};

const Profile = () => {
  const user = {
    name: 'Md Jamil Akhtar',
    email: 'mdjamilakhtar793@gmail.com',
    createdAt: String(new Date().toISOString()),
    role: 'user',
    subscription: {
      status: 'active',
    },
    plalist: [
      {
        course: 'sahsdhjs',
        poster: 'https://img.icons8.com/?size=512&id=63727&format=png',
      },
    ],
  };
  const removeFhandlerPlaylist = id => {
    console.log(id);
  };

  const changeImageSubmitHandler = (e, image) => {
    e.preventDefault();
    console.log(image);
  };

  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Container minH={'95vh'} maxW={'container.lg'}>
      <Heading children="Profile" m={'8'} textTransform={'uppercase'} />
      <Stack
        justifyContent={'flex-start'}
        direction={['column', 'row']}
        alignItems={'center'}
        spacing={['8', '16']}
        p={'8'}
      >
        <VStack>
          <Avatar boxSize={'48'} />
          <Button onClick={onOpen} variant={'ghost'} colorScheme="blue">
            Change Image
          </Button>
        </VStack>
        <VStack spacing={'4'} alignItems={['center', 'start']}>
          <HStack>
            <Text children="Name" fontWeight={'bold'} />
            <Text children={user.name} />
          </HStack>
          <HStack>
            <Text children="Email" fontWeight={'bold'} />
            <Text children={user.email} />
          </HStack>
          <HStack>
            <Text children="Created At" fontWeight={'bold'} />
            <Text children={user.createdAt.split('t')[0]} />
          </HStack>
          {user.role !== 'admins' && (
            <HStack>
              <Text children="Subscription" fontWeight={'bold'} />
              {user.subscription.status === 'active' ? (
                <Button color={'blue'} variant={'unstyled'}>
                  Cancel Subscription
                </Button>
              ) : (
                <Link to={'/subscribe'}>
                  <Button colorScheme={'blue'}>Subscribe</Button>
                </Link>
              )}
            </HStack>
          )}
          <Stack direction={['column', 'row']} alignItems={'center'}>
            <Link to={'/updateprofile'}>
              <Button>Update Profile</Button>
            </Link>

            <Link to={'/changepassword'}>
              <Button>Update Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>
      <Heading children="Playlist" size={'md'} />
      {user.plalist.length > 0 && (
        <Stack
          direction={['column', 'row']}
          alignItems={'center'}
          flexWrap={'wrap'}
          padding={'4'}
        >
          {user.plalist.map(element => (
            <VStack w={'48'} m={'2'} key={element.course}>
              <Image
                boxSize={'full'}
                objectFit={'contain'}
                src={element.poster}
              />
              <HStack>
                <Link to={`/courses/${element.course}`}>
                  <Button variant={'ghost'} colorScheme="blue">
                    Watch Now
                  </Button>
                </Link>
                <Button onClick={() => removeFhandlerPlaylist(element.course)}>
                  {' '}
                  <RiDeleteBin5Fill />
                </Button>
              </HStack>
            </VStack>
          ))}
        </Stack>
      )}
      <BPhotoChange
        changeImageSubmitHandler={changeImageSubmitHandler}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Container>
  );
};

export default Profile;

function BPhotoChange({ isOpen, onClose, changeImageSubmitHandler }) {
  const closeHandler = () => {
    onClose();
    setImagePreview('');
    setImage('');
  };
  const [imagePre, setImagePreview] = useState();
  const [image, setImage] = useState();

  const ImageChanges = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePreview(reader.result);
      setImage(file);
    };
  };
  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay backdropFilter={'blur(10px)'} />
      <ModalContent>
        <ModalHeader>Change Photo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={e => changeImageSubmitHandler(e, image)}>
            <VStack spacing={'8'}>
              {imagePre && <Avatar src={imagePre} boxSize={'48'} />}
              <Input
                type="file"
                css={{ '&::file-selector-button': uploadFiles }}
                onChange={ImageChanges}
              />
              <Button w={'full'} colorScheme={'blue'} type="submit">
                Change
              </Button>
            </VStack>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button mr={'3'} onClick={closeHandler}>
            Cancle
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
