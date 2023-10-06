import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import cursor from '../../../assets/images/login.png';
import Sidebar from '../Dashboard/Sidebar';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import CourseModel from './CourseModel';

const AdminCourses = () => {
  const courses = [
    {
      _id: 'kcnzjcsucdshjsnv',
      title: 'ReactJs',
      category: 'Web Development',
      poster: {
        url: 'https://www.appcoda.com/machine-learning-coreml/i/ml-book-cover.png',
      },
      createdby: 'Jem-Tect E-Learning',
      views: 123,
      numOfVideos: 10,
    },
  ];
  const { isOpen, onClose, onOpen } = useDisclosure();

  const courseDetailsHandler = userId => {
    onOpen(onOpen);
  };
  const deleteBtnHandler = userId => {
    console.log(userId);
  };

  const deleteLecBtnHandler = (courseId, lectuerId) => {
    console.log(courseId);
    console.log(lectuerId);
  };

  const addLecHandler = (e, courseId, title, description, video) => {
    e.preventDefault();
  };

  return (
    <Grid
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
      css={{
        cursor: `url(${cursor}), default`,
      }}
    >
      <Box padding={['0', '8']} overflowX={'auto'}>
        <Heading
          textTransform={'uppercase'}
          children="All Users"
          my={'16'}
          textAlign={['center', 'left']}
        />

        <TableContainer width={['100vw', 'full']}>
          <Table variant={'simple'} size={'lg'}>
            <TableCaption>All Available Courses in the Database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th>Subscription</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {courses.map(item => (
                <Row
                  courseDetailsHandler={courseDetailsHandler}
                  deleteBtnHandler={deleteBtnHandler}
                  key={item._id}
                  item={item}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <CourseModel
          deleteBtnHandler={deleteLecBtnHandler}
          addLecHandler={addLecHandler}
          isOpen={isOpen}
          id={'assaffxczx'}
          courseTitle={'React Js'}
          onClose={onClose}
        />
      </Box>

      <Sidebar />
    </Grid>
  );
};

function Row({ item, courseDetailsHandler, deleteBtnHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <Image src={item.poster.url} />
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdby}</Td>
      <Td>{item.views}</Td>
      <Td>{item.numOfVideos}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            onClick={() => courseDetailsHandler(item._id)}
            variant={'outline'}
            color={'blue.500'}
          >
            View Lecture
          </Button>

          <Button onClick={() => deleteBtnHandler(item._id)} color={'blue.400'}>
            <RiDeleteBin6Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}

export default AdminCourses;
