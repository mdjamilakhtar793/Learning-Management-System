import {
  Box,
  Button,
  Grid,
  Heading,
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
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiDeleteBin6Fill } from 'react-icons/ri';
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

const CourseModel = ({
  isOpen,
  onClose,
  id,
  deleteBtnHandler,
  addLecHandler,
  courseTitle,
  lectures = [1, 2, 3, 4, 5, 7, 8],
}) => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [video, setVideo] = useState();
  const [videoPrev, setVideoPreview] = useState();
  const videoChangeHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setVideoPreview(reader.result);
      setVideo(file);
    };
  };
  const handlesClose = () => {
    setTitle('');
    setDescription('');
    setVideoPreview('');
    setVideo('');
    onClose();
  };
  return (
    <Modal
      isOpen={isOpen}
      size={'full'}
      onClose={handlesClose}
      scrollBehavior="outside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{courseTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody p={'16'}>
          <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
            <Box px={['0', '16']}>
              <Box my={'5'}>
                <Heading children={courseTitle} />
                <Heading children={`#${id}`} size="sm" opacity={'0.4'} />
              </Box>
              <Heading children="Lectures" size={'lg'} />

              {lectures.map((item, index) => (
                <VideoCard
                  key={index + 1}
                  title="React Intr"
                  description="this is the react first lec "
                  num={2}
                  lectuerId="sjnsjfjfsjfhsfs"
                  courseId={id}
                  deleteBtnHandler={deleteBtnHandler}
                />
              ))}
            </Box>

            <Box>
              <form
                onSubmit={e => addLecHandler(e, id, title, description, video)}
              >
                <VStack spacing={'4'}>
                  <Heading
                    children={'Add Lecture'}
                    size={'md'}
                    textTransform={'uppercase'}
                  />
                  <Input
                    focusBorderColor="blue.300"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                  />
                  <Input
                    focusBorderColor="blue.300"
                    placeholder="Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />

                  <Input
                    accept="video/mp4"
                    required
                    placeholder="Enter Your Password"
                    type={'file'}
                    focusBorderColor="purple.300"
                    css={{
                      '&::file-selector-button': {
                        ...uploadFiles,
                        color: 'purple',
                      },
                    }}
                    onChange={videoChangeHandler}
                  />

                  {videoPrev && (
                    <video
                      controlsList="nodownload"
                      controls
                      src={videoPrev}
                    ></video>
                  )}
                  <Button width={'full'} colorScheme="blue">
                    {' '}
                    Add Lecture
                  </Button>
                </VStack>
              </form>
            </Box>
          </Grid>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handlesClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CourseModel;
function VideoCard({
  title,
  description,
  num,
  lectuerId,
  courseId,
  deleteBtnHandler,
}) {
  return (
    <Stack
      direction={['column', 'row']}
      my={'8'}
      borderRadius={'lg'}
      boxShadow={'0 0 10px rgba(107,70,193,05)'}
      justifyContent={['flex-start', 'space-between']}
      p={['4', '8']}
    >
      <Box>
        <Heading size={'sm'} children={`#${num} ${title}`} />
        <Text children={description} />
      </Box>
      <Button
        color={'blue.500'}
        onClick={() => deleteBtnHandler(courseId, lectuerId)}
      >
        <RiDeleteBin6Fill />
      </Button>
    </Stack>
  );
}
