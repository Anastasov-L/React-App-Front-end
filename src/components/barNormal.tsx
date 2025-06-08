import { Box, Button, VStack, Image, Flex, Spacer, HStack } from '@chakra-ui/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
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

const BarNormal = () => {
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

  // Determine active button based on current path
  const path = location.pathname;
  const activeButton = (() => {
    if (path.includes('/dashboard')) return 'dashboard';
    if (path.includes('/reviewsGrid')) return 'reviews';
    if (path.includes('/reviewsList')) return 'reviews';
    if (path.includes('/keywords')) return 'keywords';
    if (path.includes('/crawler')) return 'crawler';
    if (path.includes('/notifications')) return 'notifications';
    if (path.includes('/settings')) return 'settings';
    if (path.includes('/users')) return 'user';
    return '';
  })();

  function handleLogout() {
    logout();
    navigate('/login');
  }
  function handleDashboard() {
    navigate('/dashboard');
  }
function handleReviews() {
  if (path.includes('/reviewsGrid')) {
    navigate('/reviewsGrid');
  } else {
    navigate('/reviewsList');
  }
}

  return (
    <Flex>
      <Box
        bg="#FFFFFF"
        width="280px"
        h="100vh"
        overflow="hidden"
        textOverflow="hidden"
        position="sticky"
      >
        <Image
          src={logo}
          alt="Logo"
          position="absolute"
          top="40px"
          left="24px"
          w="5vw"
        />

        <VStack mt="70px" h="80vh" py="34px">

          <Button
            alignItems="center"
            justifyContent="flex-start"
            bg={activeButton === 'dashboard' ? '#6F6CF3' : 'white'}
            color={activeButton === 'dashboard' ? 'white' : 'black'}
            borderRadius="10px"
            onClick={handleDashboard}
            w="220px"
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
            onClick={handleReviews}
            borderRadius="10px"
            w="220px"
            h="48px"
            onMouseEnter={() => setIsQuoteHovered(true)}
            onMouseLeave={() => setIsQuoteHovered(false)}
            _hover={{
              bg: '#6F6CF3',
              color: 'white',
            }}
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
            w="220px"
             h="48px"
            borderRadius="10px"
            onClick={() => navigate('/keywords')}
            onMouseEnter={() => setIsHashtagHovered(true)}
            onMouseLeave={() => setIsHashtagHovered(false)}
            _hover={{
              bg: '#6F6CF3',
              color: 'white',
            }}
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
            w="220px"
            h="48px"
            borderRadius="10px"
            onClick={() => navigate('/crawler')}
            onMouseEnter={() => setIsCommandHovered(true)}
            onMouseLeave={() => setIsCommandHovered(false)}
            _hover={{
              bg: '#6F6CF3',
              color: 'white',
            }}
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
            w="220px"
            h="48px"
            borderRadius="10px"
            onClick={() => navigate('/notifications')}
            onMouseEnter={() => setIsFrameHovered(true)}
            onMouseLeave={() => setIsFrameHovered(false)}
            _hover={{
              bg: '#6F6CF3',
              color: 'white',
            }}
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
            w="220px"
            h="48px"
            borderRadius="10px"
            onClick={() => navigate('/settings')}
            onMouseEnter={() => setIsSettingHovered(true)}
            onMouseLeave={() => setIsSettingHovered(false)}
            _hover={{
              bg: '#6F6CF3',
              color: 'white',
            }}
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
            w="220px"
            h="48px"
            borderRadius="10px"
            onClick={() => navigate('/users')}
            onMouseEnter={() => setIsUserHovered(true)}
            onMouseLeave={() => setIsUserHovered(false)}
            _hover={{
              bg: '#6F6CF3',
              color: 'white',
            }}
          >
            <HStack gap="5">
              <Image src={isUserHovered || activeButton === 'user' ? user : userBlack} />
              <BarButtonText>User Management</BarButtonText>
            </HStack>
          </Button>

          <Spacer />

          <Button
            alignItems="center"
            position="absolute"
            top="924px"
            justifyContent="flex-start"
            mt={6}
            bg="white"
            color="black"
            w="220px"
            h="48px"
            borderRadius="10px"
            onClick={handleLogout}
            overflow="hidden"
            onMouseEnter={() => setIsLogOutHovered(true)}
            onMouseLeave={() => setIsLogOutHovered(false)}
            _hover={{
              bg: '#6F6CF3',
              color: 'white',
            }}
          >
            <HStack gap="5">
              <Image src={isLogOutHovered ? logOut : logOutBlack} />
              <BarButtonText>Logout</BarButtonText>
            </HStack>
          </Button>

        </VStack>
      </Box>
    </Flex>
  );
};

export default BarNormal;
