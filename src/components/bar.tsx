import {
  Box,
  Button,
  VStack,
  Image,
  useBreakpointValue,
  Flex,
  Drawer,
  Portal,
  CloseButton,
  HStack,
} from '@chakra-ui/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../Context';
import { BarButtonText } from '../css/texts';
import logo from '../resources/LOGO.png';
import home from '../resources/home-2.png';
import command from '../resources/command-square.png';
import commandBlack from '../resources/command-squareBlack.png';
import frame from '../resources/Frame.png';
import frameBlack from '../resources/FrameBlack.png';
import hashtag from '../resources/hashtag.png';
import hashtagBlack from '../resources/hashtagBlack.png';
import setting from '../resources/setting.png';
import settingBlack from '../resources/settingBlack.png';
import quote from '../resources/quote-down-square.png';
import quoteBlack from '../resources/quote-down-squareBlack.png';
import user from '../resources/user.png';
import userBlack from '../resources/userBlack.png';
import logOut from '../resources/logout.png';
import logOutBlack from '../resources/logoutBlack.png';
import homeBlack from '../resources/homeBlack.png';
import compass from '../resources/burger.png';

const Bar = () => {
  const isDefaultOpen = useBreakpointValue({ base: false, sm: false, md: true, lg: true, xl: true }); // Open for larger screens, closed for smaller
  const [isOpen, setOpen] = useState(false);

  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [isQuoteHovered, setIsQuoteHovered] = useState(false);
  const [isHashtagHovered, setIsHashtagHovered] = useState(false);
  const [isCommandHovered, setIsCommandHovered] = useState(false);
  const [isFrameHovered, setIsFrameHovered] = useState(false);
  const [isSettingHovered, setIsSettingHovered] = useState(false);
  const [isUserHovered, setIsUserHovered] = useState(false);
  const [isLogOutHovered, setIsLogOutHovered] = useState(false);

  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isDefaultOpen) {
      setOpen(false); // Close drawer when switching to mobile
    }
  }, [isDefaultOpen]);

  function handleLogout() {
    logout();
    navigate('/login');
  }
  function handleDashboard() {
    navigate('/dashboard');
  }
  function handleReviews() {
    navigate('/reviewsGrid');
  }

  const path = location.pathname;
  const activeButton = (() => {
    if (path.includes('/dashboard')) return 'dashboard';
    if (path.includes('/reviewsGrid')) return 'reviews';
    if (path.includes('/keywords')) return 'keywords';
    if (path.includes('/crawler')) return 'crawler';
    if (path.includes('/notifications')) return 'notifications';
    if (path.includes('/settings')) return 'settings';
    if (path.includes('/users')) return 'user';
    return '';
  })();

  return (
    <Drawer.Root open={isOpen} onOpenChange={(e) => setOpen(e.open)} placement="start">
      <Drawer.Trigger asChild>
        <Button variant="ghost" size="sm" w="10px">
          <Image src={compass} width = "200px" height = "40px" position = "absolute" zIndex = "9999"/>
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content height="100vh">
            <Drawer.Body>
              <Flex bg = "yellow">
                <Box bg="#FFFFFF" width="280px" h="100vh" position="relative">
                  <Image src={logo} alt="Logo" position="absolute" top="3vh" left="4.4vw" w="12vw" />

                  <VStack mt="70px" bg="#FFFFFF" w="100%" h="80vh" alignContent="center" alignSelf="center"  width = "120%">
                    <Button
                      alignItems="center"
                      justifyContent="flex-start"
                      bg={activeButton === 'dashboard' ? '#6F6CF3' : 'white'}
                      color={activeButton === 'dashboard' ? 'white' : 'black'}
                      borderRadius="10px"
                      onClick={handleDashboard}
                      w="92%"
                      h="48px"
                      bgPos="15px center"
                      bgRepeat="no-repeat"
                      onMouseEnter={() => setIsHomeHovered(true)}
                      onMouseLeave={() => setIsHomeHovered(false)}
                      _hover={{
                        bg: '#6F6CF3',
                        color: 'white',
                      }}
                    >
                      <HStack gap="5">
                        <Image src={isHomeHovered || activeButton === 'dashboard' ? home : homeBlack} />
                        <BarButtonText>Dashboard</BarButtonText>
                      </HStack>
                    </Button>

                    <Button
                      alignItems="center"
                      justifyContent="flex-start"
                      bg={activeButton === 'reviews' ? '#6F6CF3' : 'white'}
                      color={activeButton === 'reviews' ? 'white' : 'black'}
                      borderRadius="10px"
                      onClick={handleReviews}
                      w="92%"
                      h="48px"
                      onMouseEnter={() => setIsQuoteHovered(true)}
                      onMouseLeave={() => setIsQuoteHovered(false)}
                      _hover={{ bg: '#6F6CF3', color: 'white' }}
                    >
                      <HStack gap="5">
                        <Image src={isQuoteHovered || activeButton === 'reviews' ? quote : quoteBlack} />
                        <BarButtonText>Reviews</BarButtonText>
                      </HStack>
                    </Button>

                    <Button
                      alignItems="center"
                      justifyContent="flex-start"
                      bg={activeButton === 'keywords' ? '#6F6CF3' : 'white'}
                      color={activeButton === 'keywords' ? 'white' : 'black'}
                      borderRadius="10px"
                      onClick={() => navigate('/keywords')}
                      w="92%"
                      h="48px"
                      onMouseEnter={() => setIsHashtagHovered(true)}
                      onMouseLeave={() => setIsHashtagHovered(false)}
                      _hover={{ bg: '#6F6CF3', color: 'white' }}
                    >
                      <HStack gap="5">
                        <Image src={isHashtagHovered || activeButton === 'keywords' ? hashtag : hashtagBlack} />
                        <BarButtonText>Keywords</BarButtonText>
                      </HStack>
                    </Button>

                    <Button
                      alignItems="center"
                      justifyContent="flex-start"
                      bg={activeButton === 'crawler' ? '#6F6CF3' : 'white'}
                      color={activeButton === 'crawler' ? 'white' : 'black'}
                      borderRadius="10px"
                      onClick={() => navigate('/crawler')}
                      w="92%"
                      h="48px"
                      onMouseEnter={() => setIsCommandHovered(true)}
                      onMouseLeave={() => setIsCommandHovered(false)}
                      _hover={{ bg: '#6F6CF3', color: 'white' }}
                    >
                      <HStack gap="5">
                        <Image src={isCommandHovered || activeButton === 'crawler' ? command : commandBlack} />
                        <BarButtonText>Web Crawler</BarButtonText>
                      </HStack>
                    </Button>

                    <Button
                      alignItems="center"
                      justifyContent="flex-start"
                      bg={activeButton === 'notifications' ? '#6F6CF3' : 'white'}
                      color={activeButton === 'notifications' ? 'white' : 'black'}
                      borderRadius="10px"
                      onClick={() => navigate('/notifications')}
                      w="92%"
                      h="48px"
                      onMouseEnter={() => setIsFrameHovered(true)}
                      onMouseLeave={() => setIsFrameHovered(false)}
                      _hover={{ bg: '#6F6CF3', color: 'white' }}
                    >
                      <HStack gap="5">
                        <Image src={isFrameHovered || activeButton === 'notifications' ? frame : frameBlack} />
                        <BarButtonText>Notifications</BarButtonText>
                      </HStack>
                    </Button>

                    <Button
                      alignItems="center"
                      justifyContent="flex-start"
                      bg={activeButton === 'settings' ? '#6F6CF3' : 'white'}
                      color={activeButton === 'settings' ? 'white' : 'black'}
                      borderRadius="10px"
                      onClick={() => navigate('/settings')}
                      w="92%"
                      h="48px"
                      onMouseEnter={() => setIsSettingHovered(true)}
                      onMouseLeave={() => setIsSettingHovered(false)}
                      _hover={{ bg: '#6F6CF3', color: 'white' }}
                    >
                      <HStack gap="5">
                        <Image src={isSettingHovered || activeButton === 'settings' ? setting : settingBlack} />
                        <BarButtonText>Settings</BarButtonText>
                      </HStack>
                    </Button>

                    <Button
                      alignItems="center"
                      justifyContent="flex-start"
                      bg={activeButton === 'user' ? '#6F6CF3' : 'white'}
                      color={activeButton === 'user' ? 'white' : 'black'}
                      borderRadius="10px"
                      onClick={() => navigate('/users')}
                      w="92%"
                      h="48px"
                      onMouseEnter={() => setIsUserHovered(true)}
                      onMouseLeave={() => setIsUserHovered(false)}
                      _hover={{ bg: '#6F6CF3', color: 'white' }}
                    >
                      <HStack gap="5">
                        <Image src={isUserHovered || activeButton === 'user' ? user : userBlack} />
                        <BarButtonText>User Management</BarButtonText>
                      </HStack>
                    </Button>

                    <Button
                      alignItems="center"
                      justifyContent="flex-start"
                      mt={6}
                      bg="white"
                      color="black"
                      borderRadius="10px"
                      onClick={handleLogout}
                      w="92%"
                      h="48px"
                      onMouseEnter={() => setIsLogOutHovered(true)}
                      onMouseLeave={() => setIsLogOutHovered(false)}
                      _hover={{ bg: '#6F6CF3', color: 'white' }}
                    >
                      <HStack gap="5">
                        <Image src={isLogOutHovered ? logOut : logOutBlack} />
                        <BarButtonText>Logout</BarButtonText>
                      </HStack>
                    </Button>
                  </VStack>
                </Box>
              </Flex>
            </Drawer.Body>
            <Drawer.Footer></Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default Bar;
