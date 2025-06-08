import Header from '../components/Header'
import Bar from '../components/bar'
import { SimpleGrid, Box, Flex, VStack, HStack, Text, Button, Image, Spacer, useBreakpointValue } from "@chakra-ui/react"
import Product38 from '../resources/product38.png'
import { useNavigate } from 'react-router-dom'
import { GridLinkText, TileText } from "../css/texts"
import BarNormal from '../components/barNormal'

export default function Reviews() {
      const isDefaultOpen = useBreakpointValue({ base: false, sm: false, md: true, lg: true, xl: true }); // Open for larger screens, closed for smaller
  const navigate = useNavigate();
  function handleReviewsList(){
    navigate('/reviewsList')
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
   <Flex width="100%"  alignItems = "center" alignContent ="start" mt = "35px" >
    <Text fontSize = {{ base: "0px", sm: "14px", md: "16px", lg: "18px" }} font = "inter" fontWeight = "500" lineHeight="160%">Product List</Text>
    <Spacer/>
    <Box alignItems ="flex-end" minW={0} >
      <HStack alignContent="flex-end" gap = "8px" >
        <Button w = {{  base: "100px", sm: "100px", md: "110px", lg: "110px" }} h = "40px" borderRadius = "10px">Grid View</Button>
        <Button w = {{  base: "100px", sm: "100px", md: "110px", lg: "110px" }} h = "40px" bg = "white" color = "black" borderRadius = "10px" onClick={handleReviewsList}>List View</Button>
      </HStack>
    </Box>
   </Flex>



   <SimpleGrid   columnGap = "24px" rowGap="24px" minChildWidth="275px"  w = "100%">
   <Box  bg = "#FFFFFF" alignContent="start" borderRadius="10%" flex="1" overflow="hidden" minW={0}>
      <VStack gap = "16px" p="16px">
    <VStack gap = "12px" alignItems="flex-start"  w="100%" minW={0}>
      <Image src = {Product38} boxSize = "100%"  />
      <VStack gap = "0" alignItems="flex-start" minW={0}  textOverflow="ellipsis" > 
      <TileText>Product title goes here</TileText>
      <GridLinkText maxW= "80%">https://yourproducturlgoeshere1122.com</GridLinkText>
      </VStack>
      
    </VStack>
    <HStack gap = "8" w = "100%" h = "34px"  verticalAlign = "center" >
      <Button w = "49%" h = "34px" borderRadius  = "10px" bg = "#6F6CF3">View Details</Button>
      <Button w = "35%" h = "34px" borderRadius  = "10px" bg = "#161819">Source</Button>
      </HStack>
      </VStack>
   </Box>

   <Box  bg = "#FFFFFF" alignContent="start" borderRadius="10%" flex="1" overflow="hidden" minW={0}>
      <VStack gap = "16px" p="16px">
    <VStack gap = "12px" alignItems="flex-start"  w="100%" minW={0}>
      <Image src = {Product38} boxSize = "100%"  />
      <VStack gap = "0" alignItems="flex-start" minW={0}  textOverflow="ellipsis" > 
      <TileText>Product title goes here</TileText>
      <GridLinkText maxW= "80%">https://yourproducturlgoeshere1122.com</GridLinkText>
      </VStack>
      
    </VStack>
    <HStack gap = "8" w = "100%" h = "34px"  verticalAlign = "center" >
      <Button w = "49%" h = "34px" borderRadius  = "10px" bg = "#6F6CF3">View Details</Button>
      <Button w = "35%" h = "34px" borderRadius  = "10px" bg = "#161819">Source</Button>
      </HStack>
      </VStack>
   </Box>

      <Box  bg = "#FFFFFF" alignContent="start" borderRadius="10%" flex="1" overflow="hidden" minW={0}>
      <VStack gap = "16px" p="16px">
    <VStack gap = "12px" alignItems="flex-start"  w="100%" minW={0}>
      <Image src = {Product38} boxSize = "100%"  />
      <VStack gap = "0" alignItems="flex-start" minW={0}  textOverflow="ellipsis" > 
      <TileText>Product title goes here</TileText>
      <GridLinkText maxW= "80%">https://yourproducturlgoeshere1122.com</GridLinkText>
      </VStack>
      
    </VStack>
    <HStack gap = "8" w = "100%" h = "34px"  verticalAlign = "center" >
      <Button w = "49%" h = "34px" borderRadius  = "10px" bg = "#6F6CF3">View Details</Button>
      <Button w = "35%" h = "34px" borderRadius  = "10px" bg = "#161819">Source</Button>
      </HStack>
      </VStack>
   </Box>

      <Box  bg = "#FFFFFF" alignContent="start" borderRadius="10%" flex="1" overflow="hidden" minW={0}>
      <VStack gap = "16px" p="16px">
    <VStack gap = "12px" alignItems="flex-start"  w="100%" minW={0}>
      <Image src = {Product38} boxSize = "100%"  />
      <VStack gap = "0" alignItems="flex-start" minW={0}  textOverflow="ellipsis" > 
      <TileText>Product title goes here</TileText>
      <GridLinkText maxW= "80%">https://yourproducturlgoeshere1122.com</GridLinkText>
      </VStack>
      
    </VStack>
    <HStack gap = "8" w = "100%" h = "34px"  verticalAlign = "center" >
      <Button w = "49%" h = "34px" borderRadius  = "10px" bg = "#6F6CF3">View Details</Button>
      <Button w = "35%" h = "34px" borderRadius  = "10px" bg = "#161819">Source</Button>
      </HStack>
      </VStack>
   </Box>

      <Box  bg = "#FFFFFF" alignContent="start" borderRadius="10%" flex="1" overflow="hidden" minW={0}>
      <VStack gap = "16px" p="16px">
    <VStack gap = "12px" alignItems="flex-start"  w="100%" minW={0}>
      <Image src = {Product38} boxSize = "100%"  />
      <VStack gap = "0" alignItems="flex-start" minW={0}  textOverflow="ellipsis" > 
      <TileText>Product title goes here</TileText>
      <GridLinkText maxW= "80%">https://yourproducturlgoeshere1122.com</GridLinkText>
      </VStack>
      
    </VStack>
    <HStack gap = "8" w = "100%" h = "34px"  verticalAlign = "center" >
      <Button w = "49%" h = "34px" borderRadius  = "10px" bg = "#6F6CF3">View Details</Button>
      <Button w = "35%" h = "34px" borderRadius  = "10px" bg = "#161819">Source</Button>
      </HStack>
      </VStack>
   </Box>

      <Box  bg = "#FFFFFF" alignContent="start" borderRadius="10%" flex="1" overflow="hidden" minW={0}>
      <VStack gap = "16px" p="16px">
    <VStack gap = "12px" alignItems="flex-start"  w="100%" minW={0}>
      <Image src = {Product38} boxSize = "100%"  />
      <VStack gap = "0" alignItems="flex-start" minW={0}  textOverflow="ellipsis" > 
      <TileText>Product title goes here</TileText>
      <GridLinkText maxW= "80%">https://yourproducturlgoeshere1122.com</GridLinkText>
      </VStack>
      
    </VStack>
    <HStack gap = "8" w = "100%" h = "34px"  verticalAlign = "center" >
      <Button w = "49%" h = "34px" borderRadius  = "10px" bg = "#6F6CF3">View Details</Button>
      <Button w = "35%" h = "34px" borderRadius  = "10px" bg = "#161819">Source</Button>
      </HStack>
      </VStack>
   </Box>

      <Box  bg = "#FFFFFF" alignContent="start" borderRadius="10%" flex="1" overflow="hidden" minW={0}>
      <VStack gap = "16px" p="16px">
    <VStack gap = "12px" alignItems="flex-start"  w="100%" minW={0}>
      <Image src = {Product38} boxSize = "100%"  />
      <VStack gap = "0" alignItems="flex-start" minW={0}  textOverflow="ellipsis" > 
      <TileText>Product title goes here</TileText>
      <GridLinkText maxW= "80%">https://yourproducturlgoeshere1122.com</GridLinkText>
      </VStack>
      
    </VStack>
    <HStack gap = "8" w = "100%" h = "34px"  verticalAlign = "center" >
      <Button w = "49%" h = "34px" borderRadius  = "10px" bg = "#6F6CF3">View Details</Button>
      <Button w = "35%" h = "34px" borderRadius  = "10px" bg = "#161819">Source</Button>
      </HStack>
      </VStack>
   </Box>

      <Box  bg = "#FFFFFF" alignContent="start" borderRadius="10%" flex="1" overflow="hidden" minW={0}>
      <VStack gap = "16px" p="16px">
    <VStack gap = "12px" alignItems="flex-start"  w="100%" minW={0}>
      <Image src = {Product38} boxSize = "100%"  />
      <VStack gap = "0" alignItems="flex-start" minW={0}  textOverflow="ellipsis" > 
      <TileText>Product title goes here</TileText>
      <GridLinkText maxW= "80%">https://yourproducturlgoeshere1122.com</GridLinkText>
      </VStack>
      
    </VStack>
    <HStack gap = "8" w = "100%" h = "34px"  verticalAlign = "center" >
      <Button w = "49%" h = "34px" borderRadius  = "10px" bg = "#6F6CF3">View Details</Button>
      <Button w = "35%" h = "34px" borderRadius  = "10px" bg = "#161819">Source</Button>
      </HStack>
      </VStack>
   </Box>

      <Box  bg = "#FFFFFF" alignContent="start" borderRadius="10%" flex="1" overflow="hidden" minW={0}>
      <VStack gap = "16px" p="16px">
    <VStack gap = "12px" alignItems="flex-start"  w="100%" minW={0}>
      <Image src = {Product38} boxSize = "100%"  />
      <VStack gap = "0" alignItems="flex-start" minW={0}  textOverflow="ellipsis" > 
      <TileText>Product title goes here</TileText>
      <GridLinkText maxW= "80%">https://yourproducturlgoeshere1122.com</GridLinkText>
      </VStack>
      
    </VStack>
    <HStack gap = "8" w = "100%" h = "34px"  verticalAlign = "center" >
      <Button w = "49%" h = "34px" borderRadius  = "10px" bg = "#6F6CF3">View Details</Button>
      <Button w = "35%" h = "34px" borderRadius  = "10px" bg = "#161819">Source</Button>
      </HStack>
      </VStack>
   </Box>

      <Box  bg = "#FFFFFF" alignContent="start" borderRadius="10%" flex="1" overflow="hidden" minW={0}>
      <VStack gap = "16px" p="16px">
    <VStack gap = "12px" alignItems="flex-start"  w="100%" minW={0}>
      <Image src = {Product38} boxSize = "100%"  />
      <VStack gap = "0" alignItems="flex-start" minW={0}  textOverflow="ellipsis" > 
      <TileText>Product title goes here</TileText>
      <GridLinkText maxW= "80%">https://yourproducturlgoeshere1122.com</GridLinkText>
      </VStack>
      
    </VStack>
    <HStack gap = "8" w = "100%" h = "34px"  verticalAlign = "center" >
      <Button w = "49%" h = "34px" borderRadius  = "10px" bg = "#6F6CF3">View Details</Button>
      <Button w = "35%" h = "34px" borderRadius  = "10px" bg = "#161819">Source</Button>
      </HStack>
      </VStack>
   </Box>
   


   
   


    </SimpleGrid>
    </VStack>
    </Box>
    </Flex>
   
   
      
    </>
  )
}
