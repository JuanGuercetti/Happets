import { Box, Button, Flex } from "@chakra-ui/react"
import { IoCartOutline } from "react-icons/io5"
// https://react-icons.github.io/react-icons/search/#q=cart

export default function CartWidget() {
    return (
        <Button colorScheme="green">
            <Flex direction="column" align="center">
                <Box as={IoCartOutline} size="30px" />
                0
            </Flex>
        </Button>
    )
}