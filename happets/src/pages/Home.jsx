import { Box, Flex, Heading, Spacer } from '@chakra-ui/react'
import HomeInstruction from '../components/HomeInstruction'
import { FaPaw } from "react-icons/fa"

export default function Home() {
    return (
        <Box w="100%" h="100vh">
            <Heading 
                size='xl' 
                textAlign='center' 
                mt='10vh'
                mb="10vh"
                color='green.200'>
                    ¡Bienvenidos a Happets!<FaPaw/>
                
            </Heading>

            <HomeInstruction/>
        </Box>
    )
}