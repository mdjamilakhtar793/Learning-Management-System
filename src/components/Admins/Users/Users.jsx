import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import cursor from '../../../assets/images/login.png';
import Sidebar from '../Dashboard/Sidebar';
import { RiDeleteBin6Fill } from 'react-icons/ri';

const Users = () => {
  const users = [
    {
      _id: 'kcnzjcsucdshjsnv',
      name: 'Jamil Akhtar',
      role: 'Admin',
      subscription: {
        status: 'active',
      },
      email: 'ajjds@gmail.com',
    },
  ];

  const updateHandler = userId => {
    console.log(userId);
  };
  const deleteBtnHandler = userId => {
    console.log(userId);
  };
  return (
    <Grid
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
      css={{
        cursor: `url(${cursor}), default`,
      }}
    >
      <Box padding={['0', '16']} overflowX={'auto'}>
        <Heading
          textTransform={'uppercase'}
          children="All Users"
          my={'16'}
          textAlign={['center', 'left']}
        />

        <TableContainer width={['100vw', 'full']}>
          <Table variant={'simple'} size={'lg'}>
            <TableCaption>All Available Users in the Database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Subscription</Th>
                <Th isNumeric>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map(item => (
                <Row
                  updateHandler={updateHandler}
                  deleteBtnHandler={deleteBtnHandler}
                  key={item._id}
                  item={item}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      <Sidebar />
    </Grid>
  );
};

export default Users;

function Row({ item, updateHandler, deleteBtnHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>{item.subscription.status === 'active' ? 'active' : 'Not Active'}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            onClick={() => updateHandler(item._id)}
            variant={'outline'}
            color={'blue.500'}
          >
            Change Role
          </Button>

          <Button onClick={() => deleteBtnHandler(item._id)} color={'blue.400'}>
            <RiDeleteBin6Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}
