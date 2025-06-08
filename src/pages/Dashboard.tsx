import Header from '../components/Header';
import { Box, Button, VStack, Flex, Image, HStack,Text, Spacer, SimpleGrid, GridItem, useBreakpointValue} from '@chakra-ui/react'
import takeDown from '../resources/chart-square.png'
import Demo from "../components/demo-chart" // Assuming the chart component is exported as Demo
import Demo1 from "../components/line-chart"
import Demo2 from "../components/baba"
import Demo3 from "../components/ali"
import redU from '../resources/redU.png'
import purpleU from '../resources/purpleU.png'
import greenU from '../resources/greenU.png'
import orangeU from '../resources/orangeU.png'
import blueU from '../resources/blueU.png'
import admin from '../resources/admin.png'
import coin from '../resources/coin.png'
import percent from '../resources/percent.png'
import message from '../resources/message-notifBlack.png'
import { NameText, SubText, ListingText, NumberText, BoxText, ViewAllText, DateText, LinkText, NotificationText, NotificationsView, DashboardText } from "../css/texts"
import Bar from '../components/bar'
import BarNormal from '../components/barNormal';
const Dashboard = () => {
            const isDefaultOpen = useBreakpointValue({ base: false, sm: false, md: true, lg: true, xl: true }); // Open for larger screens, closed for smaller
  return (
    <>
      <Flex bg = "#f0f0f0"   width="100vw" h = "100vh" overflowX="hidden" gap = "24px" >  
      <Box   w = {isDefaultOpen ? "280px" : "0px"} position = "unset">
                {isDefaultOpen ? <BarNormal /> : <Bar />}
      </Box>
      <Flex  w = "100%"                   //right column of boxes
        direction="column" gapY = "20px" overflowY="auto"
        >
          <Box  py = "40px" h = "51px"  zIndex = "1">
      <Header />
      </Box>

      <Box pt = "28px">
      <Flex h = "40px" w = "100%"  gap = "8px">
      <HStack w = "100%" h = "40px" gap ="1" justifyContent = "space-between">
        <Text
        font = "inter"
        fontWeight="500"
        lineHeight="160%"
        letterSpacing="0"
        display = {{base:"none", sm:"block",md:"block", lg:"block"}}
        fontSize={{base:"0px",sm:"18px",md:"18px", lg:"18px"}}
        px = "4px"
        >Wed, Oct 27</Text>
         
        <Text
        font = "inter"
        fontWeight="500"
        lineHeight="160%"
        letterSpacing="0"
        fontSize={{base:"14px",sm:"12px",md:"12px",lg:"12px"}}
        color = "#5C5C5C"
        px = {{base:"4px",sm:"0px",md:"0px",lg:"0px"}}
        >Choose platform:</Text>
        </HStack>

        <HStack gap = "12px">
        <Demo2/>
        <Demo3/>
        <Button mr = "24px" h = "40px" bg = "#6F6CF3" borderRadius = "10px">All</Button>
      </HStack>
      </Flex>
      </Box>
        
        
        
<SimpleGrid columns = {6}  rowGap="24px" pt = "4px" >
  <GridItem colSpan = {{base:6,sm:3,md:3,lg: window.innerWidth <= 1100 ? 3 : 2}} mr = "24px" >
      <Box bg = "#FFFFFF"  h = "180px" borderRadius="20px" overflow = "hidden">
            <Box py=" 15px" px = "24px" >
              <VStack  align = "start" gap = "8px">
            <VStack align = "start" gap = "20px"  >
            <HStack   w = "219px" h = "42px" gap = "0px" >
                <Image src = {takeDown} px = "12px"/>
                <DashboardText>
                  Number of Takedowns
                </DashboardText>
            </HStack>
            
            <HStack  h = "48px" px = "12px" >
              <NumberText>593568</NumberText>
              <Image src = {percent} />
            </HStack>
            
            </VStack>
            <Box h = "22px" px = "12px">
            <DateText >October 2023</DateText>
            </Box>
            </VStack>
            </Box>
          </Box>
  </GridItem>

  <GridItem colSpan = {{base:6,sm:3,md:3,lg: window.innerWidth <= 1100 ? 3 : 2}} mr = "24px" >
      <Box bg = "#FFFFFF"  h = "180px" borderRadius="20px" overflow = "hidden">
            <Box py=" 15px" px = "24px" >
              <VStack  align = "start" gap = "8px">
            <VStack align = "start" gap = "20px"  >
            <HStack   w = "219px" h = "42px" gap = "0px" >
                <Image src = {coin} px = "12px"/>
                <DashboardText>
                  % of Goods Scraped
                </DashboardText>
            </HStack>
            <HStack  h = "48px" px = "12px" >
              <NumberText>92.85%</NumberText>
              <Image src = {percent} />
            </HStack>
            </VStack>
            <Box h = "22px" px = "12px">
            <DateText >October 2023</DateText>
            </Box>
            </VStack>
            </Box>
          </Box>
  </GridItem>

  <GridItem colSpan = {{base:6,sm:6,md:6, lg: window.innerWidth <= 1100 ? 6 : 2}} mr = "24px" >
      <Box bg = "#FFFFFF"  h = "180px" borderRadius="20px" overflow="hidden" minW={0}>
        <Flex gap = "25px">
            <Box py=" 15px" px = "24px" w = "150px" >
              <VStack  align = "start" gap = "8px">
            <VStack align = "start" gap = "20px"  >
            <HStack   w = "219px" h = "42px" gap = "0px" >
                <Image src = {message} px = "12px"/>
                <DashboardText whiteSpace="nowrap">
                  New Notices
                </DashboardText>
            </HStack>
            <HStack  h = "48px" px = "12px" >
              <NumberText>2395</NumberText>
            </HStack>
            </VStack>
            <Box h = "22px" px = "12px">
            <DateText >October 2023</DateText>
            </Box>
            </VStack>
            </Box>
            
            <Box w = "100%" h = "25vh" py = "46px" overflow="hidden" mb = "24px" >
              <Box   w = "90%" h =  {{base:"90%",sm:" 90%",md:"90%",lg:"70%"}}>
                <Demo1 />
                </Box>
              </Box>
              
        </Flex>

          </Box>
  </GridItem>

</SimpleGrid>




<SimpleGrid columns={window.innerWidth <= 1200 ? 2 : 3 } maxW="100%" rowGap = "24px" pt = "4px" >
<GridItem colSpan={window.innerWidth <= 1200 ? 3 : 2} mr = "24px">
          <Box bg = "#FFFFFF" w= "53vw + 24px" h = "337px" borderRadius="20px" position = "relative">
          
              <BoxText alignSelf="start"  px = "24px" py = "20px" position = "absolute"  zIndex="overlay">Analytics</BoxText>
           <Box position = "absolute" left = "-12px" top = {{base:"75px",sm:"45px",md:"45px",lg:"45px"}} w = "100%" h = {{base:"90%",sm:"100%",md:"100%",lg:"100%"}}>
           <Demo /> 
            </Box>
          
            </Box> 

</GridItem>

<GridItem colSpan={window.innerWidth <= 1200 ? 3 : 1} mr = "24px">
          <Box bg = "#FFFFFF"  h = "337px" borderRadius="20px"  maxW="100%"
    maxH="100%"
    overflow="hidden"
    minW={0}>
<Box py= "20px" px = "24px" w = "100%"  h = "100%" >
      <VStack align = "start"  gap  = "17px"  >

             
            <HStack  w= "100%"  h = "29px" >
              <BoxText maxW = {{base:"none",sm:"none",md:"none",lg:"none"}}  truncate = "yes"
    overflow="hidden"
    textOverflow="ellipsis"  >Top 5 Fake Sellers</BoxText>
              <Spacer/>
              <ViewAllText  >View all</ViewAllText>
            </HStack>
            

            
               <Flex  w = "100%" align = "center" justifyContent = "space-between">
               <HStack >
                   <Image src ={greenU}/>  

                   <VStack gap = "1px" align = "start">
                    <NameText>Rose Meadows</NameText>
                    <SubText>Company name</SubText>
                    </VStack> 
               </HStack>
               
               <Box alignItems="flex-end" right = "0px" display = "flex">
                   <ListingText >Listing #2464</ListingText>
               </Box>
               </Flex>
               
               <Flex w = "100%" align = "center">
               <HStack>
                   <Image src ={redU}/>  

                   <VStack gap = "0" align = "start">
                    <NameText>Madden Esparza</NameText>
                    <SubText>Company name</SubText>
                    </VStack> 
               </HStack>
               <Spacer/>
                  <Box alignItems="flex-end">
                   <ListingText>Listing #6345</ListingText>
                   </Box>
               </Flex>

               <Flex w = "100%" align = "center">
               <HStack>
                   <Image src ={purpleU}/>  

                   <VStack gap = "0" align = "start">
                    <NameText>Edison Norman</NameText>
                    <SubText>Company name</SubText>
                    </VStack> 
               </HStack>
               <Spacer/>
               <Box alignItems="flex-end">
                   <ListingText>Listing #9815</ListingText>
               </Box>
               </Flex>

               <Flex w = "100%" align = "center">
               <HStack>
                   <Image src ={blueU}/>  

                   <VStack gap = "0" align = "start">
                    <NameText>Terrance Connor</NameText>
                    <SubText>Company name</SubText>
                    </VStack> 
               </HStack>
               <Spacer/>
               <Box alignItems="flex-end">
                   <ListingText>Listing #9245</ListingText>
               </Box>
               </Flex>
              
               <Flex w = "100%" align = "center ">
               <HStack>
                   <Image src ={orangeU}/>  

                   <VStack gap = "0" align = "start">
                    <NameText>Curtis Valentine</NameText>
                    <SubText>Company name</SubText>
                    </VStack> 
               </HStack>
               <Spacer/>
               <Box alignItems="flex-end">
                   <ListingText>Listing #2390</ListingText>
               </Box>
               </Flex>
            </VStack>
            
</Box>
</Box>
          
          </GridItem>
</SimpleGrid>

      <SimpleGrid columns={{ base: 2, sm: 2, md: 3, lg: 3 }} rowGap="24px" maxW="100%" minW={0} pt = "4px">
           <GridItem colSpan={window.innerWidth <= 1100 ? 3 : 2} mr = "24px">
          <Box bg = "#FFFFFF" w= "51vw + 24px" h = "350px"  borderRadius="20px" position="relative" overflow = "hidden" >
            <HStack gap = "35vw" px = "24px" py = "20px">
              <BoxText whiteSpace="nowrap">Notifications of Take Downs</BoxText>
              <ViewAllText whiteSpace="nowrap" position="absolute" right="6">View all</ViewAllText>
            </HStack>
            <VStack align="start" gap = "20px" px = {6}>


  <HStack w="100%"   justifyContent = "flex-start"  gap ="10px" borderBottom="1px solid" h = "34px"
      borderBottomColor="#F2F2F2">
             
  <NotificationText
  
    truncate = "false"
    whiteSpace="nowrap"
    overflow="hidden"
    textOverflow="ellipsis"
  >
    Mademoiselle 3.4fl.oz 100 ml perfume, CHANEL
  </NotificationText>

  <LinkText

    truncate="true"
    whiteSpace="nowrap" 
    overflow="hidden"
    textOverflow="ellipsis"
  >
    https://yourproducturlgoeshere1122.com
  </LinkText>
<Spacer/>
  
<Box  justifyContent="flex-end">
  <NotificationsView
    flexShrink={0}
    whiteSpace="nowrap"
    alignSelf = "flex-end"
  >
    1 min ago
  </NotificationsView>
  </Box>
</HStack>

  <HStack w="100%"   justifyContent = "flex-start"  gap ="10px" borderBottom="1px solid" h = "34px"
      borderBottomColor="#F2F2F2">
             
  <NotificationText
  
    truncate = "false"
    whiteSpace="nowrap"
    overflow="hidden"
    textOverflow="ellipsis"
  >
    Mademoiselle 3.4fl.oz 100 ml perfume, CHANEL
  </NotificationText>

  <LinkText

    truncate="true"
    whiteSpace="nowrap" 
    overflow="hidden"
    textOverflow="ellipsis"
  >
    https://yourproducturlgoeshere1122.com
  </LinkText>
<Spacer/>
  
<Box  justifyContent="flex-end">
  <NotificationsView
    flexShrink={0}
    whiteSpace="nowrap"
    alignSelf = "flex-end"
  >
    1 min ago
  </NotificationsView>
  </Box>
</HStack>
  <HStack w="100%"   justifyContent = "flex-start"  gap ="10px" borderBottom="1px solid" h = "34px"
      borderBottomColor="#F2F2F2">
             
  <NotificationText
  
    truncate = "false"
    whiteSpace="nowrap"
    overflow="hidden"
    textOverflow="ellipsis"
  >
    Mademoiselle 3.4fl.oz 100 ml perfume, CHANEL
  </NotificationText>

  <LinkText

    truncate="true"
    whiteSpace="nowrap" 
    overflow="hidden"
    textOverflow="ellipsis"
  >
    https://yourproducturlgoeshere1122.com
  </LinkText>
<Spacer/>
  
<Box  justifyContent="flex-end">
  <NotificationsView
    flexShrink={0}
    whiteSpace="nowrap"
    alignSelf = "flex-end"
  >
    1 min ago
  </NotificationsView>
  </Box>
</HStack>

  <HStack w="100%"   justifyContent = "flex-start"  gap ="10px" borderBottom="1px solid" h = "34px"
      borderBottomColor="#F2F2F2">
             
  <NotificationText
  
    truncate = "false"
    whiteSpace="nowrap"
    overflow="hidden"
    textOverflow="ellipsis"
  >
    Mademoiselle 3.4fl.oz 100 ml perfume, CHANEL
  </NotificationText>

  <LinkText

    truncate="true"
    whiteSpace="nowrap" 
    overflow="hidden"
    textOverflow="ellipsis"
  >
    https://yourproducturlgoeshere1122.com
  </LinkText>
<Spacer/>
  
<Box  justifyContent="flex-end">
  <NotificationsView
    flexShrink={0}
    whiteSpace="nowrap"
    alignSelf = "flex-end"
  >
    1 min ago
  </NotificationsView>
  </Box>
</HStack>

  <HStack w="100%"   justifyContent = "flex-start"  gap ="10px" borderBottom="1px solid" h = "34px"
      borderBottomColor="#F2F2F2">
             
  <NotificationText
  
    truncate = "false"
    whiteSpace="nowrap"
    overflow="hidden"
    textOverflow="ellipsis"
  >
    Mademoiselle 3.4fl.oz 100 ml perfume, CHANEL
  </NotificationText>

  <LinkText

    truncate="true"
    whiteSpace="nowrap" 
    overflow="hidden"
    textOverflow="ellipsis"
  >
    https://yourproducturlgoeshere1122.com
  </LinkText>
<Spacer/>
  
<Box  justifyContent="flex-end">
  <NotificationsView
    flexShrink={0}
    whiteSpace="nowrap"
    alignSelf = "flex-end"
  >
    1 min ago
  </NotificationsView>
  </Box>
</HStack>

            </VStack>

          </Box>
</GridItem>
<GridItem colSpan = {window.innerWidth <= 1100 ? 3 : 1} mr = "24px">
          <Box bg = "#FFFFFF"  h = "236px" borderRadius="20px" flex="1"
    maxW="100%"
    maxH="100%"
    overflow="hidden"
    minW={0} >
          <VStack align = "start" py = "20px"  gap = "20px" px = "24px">
                    <HStack w = "100%">
                      <Box>
                    <BoxText>Top admin</BoxText>
                    </Box>
                    <Spacer/>
                    <Box>
                    <ViewAllText>View all</ViewAllText>
                    </Box>
                    </HStack>
               <Flex gap={{base:"5%",sm:"10%",md:"15%",lg:"20%"}} w="100%" direction="row"  align="center" py = "2px" >
  <Box minW="85px" maxW="85px">
    <VStack gap="0" align="flex-start"  w="85px">
      <Image src={admin} w="84px" h="84px" />
      <Text fontWeight={600} fontSize="12px" px="3px" whiteSpace="nowrap">Carl Meadows</Text>
      <Text fontWeight={400} fontSize="10px" px="25px">Admin</Text>
    </VStack>
  </Box>

  <Box
    flex="1"
    minW="0"
  >
    <Flex
      direction="column"
      gap="10px"
      align="stretch"
      w="100%"
      
    >
      <Flex
        bg="#F4F6F7"
        h="5vh"
        w="100%"
        borderRadius="12px"
        align="center"
        justify="space-between"
        px="15px"
        minW="0"
      >
        <Text
          fontSize="16px"
          fontWeight="500"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          
        >
          Notices reviewed:
        </Text>
        <Text  fontWeight="600" fontSize="16px">23,353</Text>
      </Flex>

      <Button
        bg="#6F6CF3"
        h="5vh"
        w="100%"
        fontSize="16px"
        fontWeight="600"
        borderRadius="12px"
        whiteSpace="nowrap"
      >
        View Details
      </Button>
    </Flex>
  </Box>
</Flex>


          </VStack>
          </Box>
          
          </GridItem>
</SimpleGrid>
      </Flex>

        




      </Flex>


    </>
  );
};

export default Dashboard;
