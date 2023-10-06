import {
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Course = () => {
  const [keyword, setkeyword] = useState();
  const [category, setcategory] = useState();
  const addtoPhandler = () => {};
  console.log('Playlist Added');
  const categories = [
    'Web Dev',
    'Artificial Int',
    'Database',
    'MySql',
    'Data Science',
    'App Devlopment',
    'DevOps',
  ];
  return (
    <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
      <Heading children="All Courses" m={'8'} />

      <Input
        value={keyword}
        onChange={e => setkeyword(e.target.value)}
        placeholder="Search here Course....."
        type="text"
        focusBorderColor="blue.500"
      />
      <HStack
        overflowX={'auto'}
        paddingY={'4'}
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {categories.map((items, index) => (
          <Button key={index} onClick={() => setcategory(items)} minW={'60'}>
            <Text children={items} />
          </Button>
        ))}
      </HStack>
      <Stack
        direction={['column', 'row']}
        flexWrap={'wrap'}
        justifyContent={['flex-start', 'space-evenly ']}
        alignItems={['center', 'flex-start']}
      >
        <Courses
          title={'Sample'}
          description={'Sample1'}
          views={25}
          id={'Sample1'}
          creater={'Jamil Akh '}
          lecture={3}
          imgsrc={
            'https://www.appcoda.com/machine-learning-coreml/i/ml-book-cover.png'
          }
          addtoPhandler={addtoPhandler}
        />
      </Stack>
    </Container>
  );
};

export default Course;

const Courses = ({
  views,
  title,
  imgsrc,
  id,
  addtoPhandler,
  creater,
  description,
  lecture,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imgsrc} boxSize={'60'} objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxWidth="200px"
        size={'sm'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
      />
      <Text children={description} noOfLines={3} />
      <HStack>
        <Text
          children={'Creator'}
          fontFamily={'body'}
          textTransform={'uppercase'}
        />
        <Text
          fontWeight={'bold'}
          textTransform={'uppercase'}
          children={creater}
        />
      </HStack>
      <Heading
        textAlign={'center'}
        size={'xs'}
        children={`Lectures - ${lecture}`}
      />
      <Heading size={'xs'} children={`Lectures - ${views}`} />
      <Stack direction={['column', 'row  ']} alignItems={'center'}>
        <Link to={`/courses/${id}`}>
          {/* id course it may be correct Id */}
          <Button colorScheme="blue">Start Tutorial</Button>
        </Link>
        <Button
          variant={'ghost'}
          colorScheme={'blue'}
          onClick={() => addtoPhandler(id)}
        >
          Add to Playlist
        </Button>
      </Stack>
    </VStack>
  );
};
