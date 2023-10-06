import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { RiDashboardLine, RiLogoutBoxFill, RiMenu4Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
const NavButtons = ({ url = '/', title = 'Home', onClose }) => (
  <Link onClick={onClose} to={url}>
    <Button variant={'ghost'}>{title}</Button>
  </Link>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuths = true;
  const user = {
    role: 'admins',
  };
  const logoutHandlers = () => {
    console.log('Logout');
    onClose();
  };
  return (
    <>
      <ColorModeSwitcher />
      <Button
        onClick={onOpen}
        zIndex={'overlay'}
        colorScheme="blue"
        rounded={'full'}
        height={'12'}
        position={'fixed'}
        top={'6'}
        left={'6'}
      >
        <RiMenu4Fill />
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter={'blur(4px)'} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'1px'}>Course Uploader</DrawerHeader>
          <DrawerBody>
            <VStack spacing={'4'} alignItems={'flex-start'}>
              <NavButtons onClose={onClose} url="/" title="Home" />
              <NavButtons
                onClose={onClose}
                url="/courses"
                title="View Courses"
              />
              <NavButtons
                onClose={onClose}
                url="/request"
                title="Request for Course"
              />
              <NavButtons onClose={onClose} url="/contact" title="Contact Me" />
              <NavButtons onClose={onClose} url="/about" title="About Us" />
            </VStack>
            <HStack
              justifyContent={'space-evenly'}
              position={'absolute'}
              bottom={'2rem'}
              width={'80%'}
            >
              {isAuths ? (
                <>
                  <VStack>
                    <HStack>
                      <Link onClick={onClose} to={'/profile'}>
                        <Button colorScheme="blue">Profile</Button>
                      </Link>
                      <p>Or</p>
                      <Link onClick={onClose} to={'/logout'}>
                        <Button variant={'ghost'} onClick={logoutHandlers}>
                          {' '}
                          <RiLogoutBoxFill />
                          Logout
                        </Button>
                      </Link>
                    </HStack>
                    {user && user.role === 'admins' && (
                      <Link onClick={onClose} to={'/admins/dashboard'}>
                        <Button variant={'ghost'} colorScheme={'purple'}>
                          <RiDashboardLine style={{ margin: '4px' }} />
                          Dashboard
                        </Button>
                      </Link>
                    )}
                  </VStack>
                </>
              ) : (
                <>
                  {' '}
                  <Link onClick={onClose} to={'/login'}>
                    <Button colorScheme="blue">Login</Button>
                  </Link>
                  <p>Or</p>
                  <Link onClick={onClose} to={'/Register'}>
                    <Button colorScheme="blue">Register</Button>
                  </Link>
                </>
              )}
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
