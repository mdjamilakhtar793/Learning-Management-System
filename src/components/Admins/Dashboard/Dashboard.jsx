import {
  Box,
  Grid,
  HStack,
  Heading,
  Progress,
  Stack,
  Text,
} from '@chakra-ui/react';
import cursor from '../../../assets/images/login.png';
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
import Sidebar from './Sidebar';
import { DoughnutChart, LineChart } from './Chart';

const DataBox = ({ title, qty, qtyPer, profit }) => (
  <Box
    w={['full', '20%']}
    boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
    padding="8"
    borderRadius={'lg'}
  >
    <Text children={title} />

    <HStack spacing={'6'}>
      <Text fontSize={'2xl'} fontWeight={'bold'} children={qty} />

      <HStack>
        <Text children={`${qtyPer}%`} />
        {profit ? (
          <RiArrowUpLine color="green" />
        ) : (
          <RiArrowDownLine color="red" />
        )}
      </HStack>
    </HStack>
    <Text children="Since Last Month" opacity={'0.6'} />
  </Box>
);

const Bar = ({ title, value, profit }) => (
  <Box py={'4'} px={['0', '20']}>
    <Heading size={'sm'} children={title} mb={'2'} />
    <HStack width={'full'} alignItems={'center'}>
      <Text children={profit ? '0%' : `-${value}%`} />

      <Progress
        width={'full'}
        value={profit ? value : 0}
        colorScheme={'purple'}
      />
      <Text children={`${value > 100 ? value : 100}%`} />
    </HStack>
  </Box>
);
const Dashboard = () => {
  return (
    <Grid
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
      css={{
        cursor: `url(${cursor}), default`,
      }}
    >
      <Box boxSizing={'border-box'} py={'16'} px={['4', '0']}>
        <Text
          textAlign={'center'}
          opacity={0.5}
          children={`Last Change was on ${String(new Date()).split('G')[0]}`}
        />
        <Heading
          children="Dashboard"
          ml={['0', '16']}
          mb={'16'}
          textAlign={['center', 'left']}
        />
        <Stack
          direction={['column', 'row']}
          minH={'24'}
          justifyContent={'space-evenly'}
        >
          <DataBox title="Views" qty={123} qtyPer={30} profit={true} />
          <DataBox title="Users" qty={17} qtyPer={80} profit={true} />
          <DataBox title="Subscription" qty={9} qtyPer={20} profit={false} />
        </Stack>
        <Box
          m={['0', '16']}
          borderRadius={'lg'}
          p={['0', '16']}
          mt={['4', '16']}
          boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
        >
          <Heading
            textAlign={['center', 'left']}
            size={'md'}
            children="Views Graph"
            pt={['8', '0']}
            ml={['0', '16']}
          />

          {/* Lines Graph Here */}
          <LineChart />
        </Box>

        <Grid templateColumns={['1fr', '2fr 1fr']}>
          <Box p={'4'}>
            <Heading
              textAlign={['center', 'left']}
              size={'md'}
              children="Progress Bar"
              my={'8'}
              ml={['0', '16']}
            />
            <Box>
              <Bar profit={true} title="Views" value={30} />
              <Bar profit={true} title="Users" value={80} />
              <Bar profit={false} title="Subscri[tion" value={20} />
            </Box>
          </Box>

          <Box p={['0', '16']} boxSizing={'border-box'} py="4">
            <Heading
              textAlign={'center'}
              size={'md'}
              mb={'4'}
              children="Users"
            />
            <DoughnutChart />
          </Box>
        </Grid>
      </Box>

      <Sidebar />
    </Grid>
  );
};

export default Dashboard;
