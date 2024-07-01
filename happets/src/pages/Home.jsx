import { Box, Flex, Heading } from '@chakra-ui/react'
import Carrousel from '../components/Carrousel'
import HomeInstruction from '../components/HomeInstruction'
import { FaPaw } from "react-icons/fa"

export default function Home() {
    return (
        <Box w="100%">
            <Flex 
                direction="row" 
                alignItems="center" 
                justifyContent="center" 
                mt='10vh'
                mb='10vh'>

                <FaPaw size="30px" style={{ marginRight: '10px' }} />

                <Heading size='xl' color='green.200'>
                    ¡Bienvenidos a Happets!
                </Heading>

                <FaPaw size="30px" style={{ marginLeft: '10px' }} />
            </Flex>

            <Carrousel/>

            <HomeInstruction/>
        </Box>
    )
}