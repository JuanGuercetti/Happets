import { Box, Flex, Image } from "@chakra-ui/react"
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import CarrouselBtn from "./CarrouselBtn"
import CarrouselItem from "./CarrouselItem"

export default function Carrousel() {
    return (
        <Flex 
            justify="space-around"
            align="center" 
            m='0 50px 10vh 50px' 
            p="50px" 
            border="1px solid black">

            <CarrouselBtn icon={ ArrowBackIcon }/>
            <CarrouselItem 
                img='https://firebasestorage.googleapis.com/v0/b/happets-22915.appspot.com/o/correaWarning.png?alt=media&token=4ced3af3-de3c-492f-a79f-c9837cdc9a3d'
                description='Combo de collar y pretal'
                title='Conjunto Warning'
            />
            <CarrouselBtn icon={ ArrowForwardIcon }/>
        </Flex>
    )
} 
