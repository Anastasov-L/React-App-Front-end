import { useAuth } from '../Context'
import {Text,Box,Flex,VStack,Button} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import LogDemo from "../components/logField"

export default function LogIn(){
    const { login } = useAuth()
    const navigate = useNavigate()

    function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        login();
        navigate('/dashboard');
      }

    return (
        <>
        <Flex align = "center" alignContent = "center">
        <VStack alignSelf = "center" alignContent = "center" bg = "white">
        
        <Text font = "inter" fontSize = "2vw" fontWeight="500" lineHeight = "160%">Login to Your Account</Text>
       <LogDemo onSubmit={handleLogin}/>
         
        </VStack>
        <Box w = "35vw" h = "100vh" bg = "#6F6CF3">
           <VStack align = "center" alignContent ="center" py = "35vh" gap = "10">
            <Text font = "inter" fontSize = "4vw">New Here?</Text>
            <Text font="inter" fontSize = "1.5vw" px = {14}>Sign up and discover a great amount of new opportunities!</Text>
            <Button font = "inter" borderRadius = "20px" color = "black" bg = "white">Sign Up</Button>
           </VStack>
        </Box>

        </Flex>
        </>
    )
}
