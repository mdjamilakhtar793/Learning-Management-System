import {
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Input,
  Select,
  VStack,
} from '@chakra-ui/react';
import cursor from '../../../assets/images/login.png';
import Sidebar from '../Dashboard/Sidebar';
import { useState } from 'react';
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

const CreateCourse = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [createdBy, setCreatedby] = useState();
  const [category, setCategory] = useState();
  const [imagePreview, setImagePreview] = useState();
  const [image, setImage] = useState();
  const imageChangeHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePreview(reader.result);
      setImage(file);
    };
  };

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
    <Grid
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
      css={{
        cursor: `url(${cursor}), default`,
      }}
    >
      <Container py={'16'}>
        <form>
          <Heading
            textTransform={'uppercase'}
            children="Create COurse"
            my={'16'}
            textAlign={['center', 'left']}
          />
          <VStack m={'auto'} spacing={'8'}>
            <Input
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Title"
              type="text"
              focusBorderColor="blue"
            />

            <Input
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Description"
              type="text"
              focusBorderColor="blue"
            />
            <Input
              value={createdBy}
              onChange={e => setCreatedby(e.target.value)}
              placeholder="Creator Name"
              type="text"
              focusBorderColor="blue"
            />
            <Select
              focusBorderColor="blue"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value=""> Category</option>
              {categories.map(item => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </Select>

            <Input
              accept="image*/"
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
              onChange={imageChangeHandler}
            />

            {imagePreview && (
              <Image src={imagePreview} boxSize={'64'} objectFit={'contain'} />
            )}
            <Button width={'full'} colorScheme="blue" type="submit">
              Create
            </Button>
          </VStack>
        </form>
      </Container>

      <Sidebar />
    </Grid>
  );
};

export default CreateCourse;
