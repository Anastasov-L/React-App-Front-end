import Header from '../components/Header'
import Bar from '../components/bar'
import BarNormal from '../components/barNormal'
import { Box, Flex, VStack, HStack, Stack, Text, Button, Image, Spacer, useBreakpointValue,useMediaQuery } from "@chakra-ui/react"
import Product38 from '../resources/product38.png'
import { useNavigate } from 'react-router-dom'
import Removed from '../resources/removed.png'
import Reminder from '../resources/reminder.png'
import { ListTitleText, ListLinkText, ListButtonText } from '../css/texts'




const ReviewsList = () => {
      const [isLessThan900] = useMediaQuery(["(max-width: 849px)"]);
const isMdBreakpoint = useBreakpointValue({
  base: true,
  sm: false,
  md: true,
  lg: false,
  xl: false,
});

const useColumn = isMdBreakpoint && isLessThan900;


      const [isLessThan] = useMediaQuery(["(max-width: 849px)"]);
const isMdBreak = useBreakpointValue({
  base: true,
  sm: false,
  md: true,
  lg: false,
  xl: false,
});

const useCol = isMdBreakpoint && isLessThan;


        const isDefaultOpen = useBreakpointValue({ base: false, sm: false, md: true, lg: true, xl: true }); // Open for larger screens, closed for smaller
    
    const navigate = useNavigate();
    function handleReviews(){
      navigate('/reviewsGrid')
    }

  
    return (
      <>
    <Flex bg = "#f0f0f0" gap = "24px" w = " 100%" h = "100vh" overflowX="hidden"    textOverflow="ellipsis" whiteSpace="nowrap" alignContent="center" >
                 <Box   w = {isDefaultOpen ? "280px" : "0px"} position = "unset"  >
                {isDefaultOpen ? <BarNormal /> : <Bar />}
      </Box>
    <Box width={{  base: "calc(100vw - 48px) ", sm: "calc(100vw - 48px)" , md: "calc(100vw - 328px)" , lg: "calc(100vw - 328px)" }}  alignItems="center"  overflowX = "hidden" >            
   <VStack gap = "24px">
    <Box py = "40px" h = "51px" w = "100%">
   <Header />
   </Box>
                <Flex alignItems = "center" w = "100%" mt = "35px">
                    <Box >
                        <Text fontSize = {{ base: "0px", sm: "14px", md: "16px", lg: "18px" }} font = "inter" fontWeight = "500" lineHeight="160%">Product List</Text>
                    </Box>
                       <Spacer/>
                    <Box>
                    <HStack gap = "8px">
                        <Button  w = {{  base: "100px", sm: "100px", md: "110px", lg: "110px" }} h = "40px" borderRadius = "10px" bg = "white" color = "black" onClick = {handleReviews}>Grid View</Button>
                        <Button  w = {{ base: "100px", sm: "100px", md: "110px", lg: "110px" }} h = "40px" bg = "black" color = "white" borderRadius = "10px">List View</Button>
                    </HStack>
                    </Box>
                </Flex>


                       <Box  bg = "#FFFFFF" w = "100%"  h = "100px" borderRadius="20px" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap" justifyContent="center" alignContent="center">
                            <Flex align="center" justifyContent="center"  alignContent="center">
                                <Box display="flex" alignContent="center" justifyContent="center" alignItems="center" alignSelf="center" verticalAlign="center" px={4}>
                                    <HStack gap = "2">
                                        <Image src = {Product38} boxSize = "68px"/>
                                        <Stack   direction={useColumn ? "column" : "row"} gap = {{base:"2" ,sm:"4", md:"2", lg:"4"}} alignItems = "flex-start">
                                        <VStack gap = "0" alignItems = "flex-start">
                                            <ListTitleText maxW = "none">Product title goes here</ListTitleText>
                                            <ListLinkText maxW = {{base:"110px", sm:"100px",md: "150px", lg:"none"}}>https://yourproducturlgoeshere1122.com</ListLinkText>
                                        </VStack>
                                        <Image alignSelf = {useColumn ? "flex-start" : "center"}  src = {Removed}  h ={{ base: "24px", sm: "24px", md: "34px", lg: "34px" }} w = "auto"/>
                                        </Stack>
                                    </HStack>
                                </Box>
                                <Spacer/>
                                 <Box alignItems = " center"  justifyContent="center" display = "flex">
                                    <Stack  direction={{ base: "column",sm:"column", md: "column", lg:"row", xl:"row" }}>
                                        <Button mr = {{base:3, sm: 3,md: 0, lg:0, xl:0 }} color = "white" bg = "black" w = {{ base: "76px", sm: "76px", md: "140px", lg: "101px" }} h = {{ base: "35px", sm: "40px", md: "40px", lg: "54px" }} borderRadius = "8px" ><ListButtonText>Source</ListButtonText></Button>
                                        <Button  mr = "3" color = "white" bg = "#6F6CF3" w={{ base: "76px", sm: "76px", md: "140px", lg: "160px" }} h = {{ base: "35px", sm: "40px", md: "40px", lg: "54px" }} borderRadius = "8px" ><ListButtonText>View Details</ListButtonText></Button>
                                    </Stack>
                                </Box>
                            </Flex>
                        </Box>

                       
                       <Box  bg = "#FFFFFF" w = "100%"  h = "100px" borderRadius="20px" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap" justifyContent="center" alignContent="center">
                            <Flex align="center" justifyContent="center"  alignContent="center">
                                <Box display="flex" alignContent="center" justifyContent="center" alignItems="center" alignSelf="center" verticalAlign="center" px={4}>
                                    <HStack gap = "2">
                                        <Image src = {Product38} boxSize = "68px"/>
                                        <Stack direction={useColumn ? "column" : "row"} gap = {{base:"2" ,sm:"4", md:"2", lg:"4"}} alignItems = "flex-start">
                                        <VStack gap = "0" alignItems = "flex-start">
                                            <ListTitleText maxW = "none">Product title goes here</ListTitleText>
                                            <ListLinkText maxW = {{base:"110px", sm:"100px",md: "150px", lg:"none"}}>https://yourproducturlgoeshere1122.com</ListLinkText>
                                        </VStack>
                                        <Image alignSelf = {useColumn ? "flex-start" : "center"} src = {Reminder}  h ={{ base: "24px", sm: "24px", md: "34px", lg: "34px" }} w = {{base:"auto",sm:"auto",md:"95px",lg:"auto"}}/>
                                        </Stack>
                                    </HStack>
                                </Box>
                                <Spacer/>
                                 <Box alignItems = " center"  justifyContent="center" display = "flex">
                                    <Stack  direction={{ base: "column",sm:"column", md: "column", lg:"row", xl:"row" }}>
                                        <Button mr = {{base:3, sm: 3,md: 0, lg:0, xl:0 }} color = "white" bg = "black" w = {{ base: "76px", sm: "76px", md: "140px", lg: "101px" }} h = {{ base: "35px", sm: "40px", md: "40px", lg: "54px" }} borderRadius = "8px" ><ListButtonText>Source</ListButtonText></Button>
                                        <Button  mr = "3" color = "white" bg = "#6F6CF3" w={{ base: "76px", sm: "76px", md: "140px", lg: "160px" }} h = {{ base: "35px", sm: "40px", md: "40px", lg: "54px" }} borderRadius = "8px" ><ListButtonText>View Details</ListButtonText></Button>
                                    </Stack>
                                </Box>
                            </Flex>
                        </Box>

                          <Box  bg = "#FFFFFF" w = "100%"  h = "100px" borderRadius="20px" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap" justifyContent="center" alignContent="center">
                            <Flex align="center" justifyContent="center"  alignContent="center">
                                <Box display="flex" alignContent="center" justifyContent="center" alignItems="center" alignSelf="center" verticalAlign="center" px={4}>
                                    <HStack gap = "2">
                                        <Image src = {Product38} boxSize = "68px"/>
                                        <Stack   direction={useColumn ? "column" : "row"} gap = {{base:"2" ,sm:"4", md:"2", lg:"4"}} alignItems = "flex-start">
                                        <VStack gap = "0" alignItems = "flex-start">
                                            <ListTitleText maxW = "none">Product title goes here</ListTitleText>
                                            <ListLinkText maxW = {{base:"110px", sm:"100px",md: "150px", lg:"none"}}>https://yourproducturlgoeshere1122.com</ListLinkText>
                                        </VStack>
                                        <Image alignSelf = {useColumn ? "flex-start" : "center"}  src = {Removed}  h ={{ base: "24px", sm: "24px", md: "34px", lg: "34px" }} w = "auto"/>
                                        </Stack>
                                    </HStack>
                                </Box>
                                <Spacer/>
                                 <Box alignItems = " center"  justifyContent="center" display = "flex">
                                    <Stack  direction={{ base: "column",sm:"column", md: "column", lg:"row", xl:"row" }}>
                                        <Button mr = {{base:3, sm: 3,md: 0, lg:0, xl:0 }} color = "white" bg = "black" w = {{ base: "76px", sm: "76px", md: "140px", lg: "101px" }} h = {{ base: "35px", sm: "40px", md: "40px", lg: "54px" }} borderRadius = "8px" ><ListButtonText>Source</ListButtonText></Button>
                                        <Button  mr = "3" color = "white" bg = "#6F6CF3" w={{ base: "76px", sm: "76px", md: "140px", lg: "160px" }} h = {{ base: "35px", sm: "40px", md: "40px", lg: "54px" }} borderRadius = "8px" ><ListButtonText>View Details</ListButtonText></Button>
                                    </Stack>
                                </Box>
                            </Flex>
                        </Box>

                            <Box  bg = "#FFFFFF" w = "100%"  h = "100px" borderRadius="20px" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap" justifyContent="center" alignContent="center">
                            <Flex align="center" justifyContent="center"  alignContent="center">
                                <Box display="flex" alignContent="center" justifyContent="center" alignItems="center" alignSelf="center" verticalAlign="center" px={4}>
                                    <HStack gap = "2">
                                        <Image src = {Product38} boxSize = "68px"/>
                                        <Stack   direction={useColumn ? "column" : "row"} gap = {{base:"2" ,sm:"4", md:"2", lg:"4"}} alignItems = "flex-start">
                                        <VStack gap = "0" alignItems = "flex-start">
                                            <ListTitleText maxW = "none">Product title goes here</ListTitleText>
                                            <ListLinkText maxW = {{base:"110px", sm:"100px",md: "150px", lg:"none"}}>https://yourproducturlgoeshere1122.com</ListLinkText>
                                        </VStack>
                                        <Image alignSelf = {useColumn ? "flex-start" : "center"}  src = {Removed}  h ={{ base: "24px", sm: "24px", md: "34px", lg: "34px" }} w = "auto"/>
                                        </Stack>
                                    </HStack>
                                </Box>
                                <Spacer/>
                                 <Box alignItems = " center"  justifyContent="center" display = "flex">
                                    <Stack  direction={{ base: "column",sm:"column", md: "column", lg:"row", xl:"row" }}>
                                        <Button mr = {{base:3, sm: 3,md: 0, lg:0, xl:0 }} color = "white" bg = "black" w = {{ base: "76px", sm: "76px", md: "140px", lg: "101px" }} h = {{ base: "35px", sm: "40px", md: "40px", lg: "54px" }} borderRadius = "8px" ><ListButtonText>Source</ListButtonText></Button>
                                        <Button  mr = "3" color = "white" bg = "#6F6CF3" w={{ base: "76px", sm: "76px", md: "140px", lg: "160px" }} h = {{ base: "35px", sm: "40px", md: "40px", lg: "54px" }} borderRadius = "8px" ><ListButtonText>View Details</ListButtonText></Button>
                                    </Stack>
                                </Box>
                            </Flex>
                        </Box>

                            <Box  bg = "#FFFFFF" w = "100%"  h = "100px" borderRadius="20px" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap" justifyContent="center" alignContent="center">
                            <Flex align="center" justifyContent="center"  alignContent="center">
                                <Box display="flex" alignContent="center" justifyContent="center" alignItems="center" alignSelf="center" verticalAlign="center" px={4}>
                                    <HStack gap = "2">
                                        <Image src = {Product38} boxSize = "68px"/>
                                        <Stack   direction={useColumn ? "column" : "row"} gap = {{base:"2" ,sm:"4", md:"2", lg:"4"}} alignItems = "flex-start">
                                        <VStack gap = "0" alignItems = "flex-start">
                                            <ListTitleText maxW = "none">Product title goes here</ListTitleText>
                                            <ListLinkText maxW = {{base:"110px", sm:"100px",md: "150px", lg:"none"}}>https://yourproducturlgoeshere1122.com</ListLinkText>
                                        </VStack>
                                        <Image alignSelf = {useColumn ? "flex-start" : "center"}  src = {Removed}  h ={{ base: "24px", sm: "24px", md: "34px", lg: "34px" }} w = "auto"/>
                                        </Stack>
                                    </HStack>
                                </Box>
                                <Spacer/>
                                 <Box alignItems = " center"  justifyContent="center" display = "flex">
                                    <Stack  direction={{ base: "column",sm:"column", md: "column", lg:"row", xl:"row" }}>
                                        <Button mr = {{base:3, sm: 3,md: 0, lg:0, xl:0 }} color = "white" bg = "black" w = {{ base: "76px", sm: "76px", md: "140px", lg: "101px" }} h = {{ base: "35px", sm: "40px", md: "40px", lg: "54px" }} borderRadius = "8px" ><ListButtonText>Source</ListButtonText></Button>
                                        <Button  mr = "3" color = "white" bg = "#6F6CF3" w={{ base: "76px", sm: "76px", md: "140px", lg: "160px" }} h = {{ base: "35px", sm: "40px", md: "40px", lg: "54px" }} borderRadius = "8px" ><ListButtonText>View Details</ListButtonText></Button>
                                    </Stack>
                                </Box>
                            </Flex>
                        </Box>

                            <Box  bg = "#FFFFFF" w = "100%"  h = "100px" borderRadius="20px" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap" justifyContent="center" alignContent="center">
                            <Flex align="center" justifyContent="center"  alignContent="center">
                                <Box display="flex" alignContent="center" justifyContent="center" alignItems="center" alignSelf="center" verticalAlign="center" px={4}>
                                    <HStack gap = "2">
                                        <Image src = {Product38} boxSize = "68px"/>
                                        <Stack   direction={useColumn ? "column" : "row"} gap = {{base:"2" ,sm:"4", md:"2", lg:"4"}} alignItems = "flex-start">
                                        <VStack gap = "0" alignItems = "flex-start">
                                            <ListTitleText maxW = "none">Product title goes here</ListTitleText>
                                            <ListLinkText maxW = {{base:"110px", sm:"100px",md: "150px", lg:"none"}}>https://yourproducturlgoeshere1122.com</ListLinkText>
                                        </VStack>
                                        <Image alignSelf = {useColumn ? "flex-start" : "center"}  src = {Removed}  h ={{ base: "24px", sm: "24px", md: "34px", lg: "34px" }} w = "auto"/>
                                        </Stack>
                                    </HStack>
                                </Box>
                                <Spacer/>
                                 <Box alignItems = " center"  justifyContent="center" display = "flex">
                                    <Stack  direction={{ base: "column",sm:"column", md: "column", lg:"row", xl:"row" }}>
                                        <Button mr = {{base:3, sm: 3,md: 0, lg:0, xl:0 }} color = "white" bg = "black" w = {{ base: "76px", sm: "76px", md: "140px", lg: "101px" }} h = {{ base: "35px", sm: "40px", md: "40px", lg: "54px" }} borderRadius = "8px" ><ListButtonText>Source</ListButtonText></Button>
                                        <Button  mr = "3" color = "white" bg = "#6F6CF3" w={{ base: "76px", sm: "76px", md: "140px", lg: "160px" }} h = {{ base: "35px", sm: "40px", md: "40px", lg: "54px" }} borderRadius = "8px" ><ListButtonText>View Details</ListButtonText></Button>
                                    </Stack>
                                </Box>
                            </Flex>
                        </Box>
                       

            </VStack>
            </Box>
        </Flex>
</>
)
}
export default ReviewsList 