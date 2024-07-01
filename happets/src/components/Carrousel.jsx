import { Box, Flex, Image } from "@chakra-ui/react"
import CarrouselItem from "./CarrouselItem"

export default function Carrousel() {
    return (
        <Flex justify="center" mb='10vh'>
            {/* <Image 
                src="https://firebasestorage.googleapis.com/v0/b/happets-22915.appspot.com/o/correaWarning.png?alt=media&token=4ced3af3-de3c-492f-a79f-c9837cdc9a3d"
                boxSize="400px">

            </Image> */}
            <CarrouselItem 
                img='https://firebasestorage.googleapis.com/v0/b/happets-22915.appspot.com/o/correaWarning.png?alt=media&token=4ced3af3-de3c-492f-a79f-c9837cdc9a3d'
                description='Combo de collar y pretal'
                title='Conjunto Warning'
            />
        </Flex>
    )
} 
