import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import introvideo from '../../assets/video/Elearning.mp4';

const CoursesPage = () => {
  const [lectureno, setLectureno] = useState(0);
  const lecture = [
    {
      _id: 'asasasa',
      title: 'sample',
      description: 'sampledjsfsnfjsfsdfs',
      video: {
        url: introvideo,
      },
    },
    {
      _id: 'asasasa',
      title: 'sample',
      description: 'sampledjsfsnfjsfsdfs',
      video: {
        url: introvideo,
      },
    },
    {
      _id: 'asasasa',
      title: 'sample',
      description: 'sampledjsfsnfjsfsdfs',
      video: {
        url: introvideo,
      },
    },
    {
      _id: 'asasasa',
      title: 'sample',
      description: 'sampledjsfsnfjsfsdfs',
      video: {
        url: introvideo,
      },
    },
  ];
  return (
    <Grid minH={'90vh'} gridTemplate={['1fr', '3fr', '1fr']}>
      <Box>
        <video
          width={'100%'}
          controls
          controlsList="nodownload  noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introvideo}
        ></video>
        <Heading
          m={'4'}
          children={`#${lectureno + 1} ${lecture[lectureno].title}`}
        />
        <Heading children={lecture[lectureno].description} m={'4'} />
        <Text children="Hey this Cse Programing" m={'4'} />
      </Box>
      <VStack>
        {lecture.map((element, index) => (
          <button
            onClick={() => setLectureno(index)}
            key={element._id}
            style={{
              width: '100%',
              padding: '1rem',
              textAlign: 'center',
              margin: 0,
              borderBottom: '1px solid rgba(0,0,0,0.2)',
            }}
          >
            <Text noOfLines={1}>
              #{index + 1}
              {element.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};

export default CoursesPage;
