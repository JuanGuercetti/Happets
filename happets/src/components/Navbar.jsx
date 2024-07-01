import { Avatar, Flex, Heading, HStack, Spacer, Text } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"

export default function Navbar() {
    return (
         <Flex as="nav" p="20px" alignItems="center" bg='green.200'>
            <Heading mr="40px" color='green.600' _hover={{ opacity: 0.7 }}>
                <NavLink>
                    <Avatar src="https://firebasestorage.googleapis.com/v0/b/happets-c1317.appspot.com/o/logoBlack.png?alt=media"
                    size="md"
                    mr="5px"/>
                    Happets
                </NavLink>
            </Heading>

            <HStack spacing="20px">
                <NavLink to='/collares'>
                    <Text color="green.600">Collares</Text>
                </NavLink> 
                <NavLink to='/correas'>
                    <Text color="green.600">Correas</Text>
                </NavLink>
                <NavLink to='/ids'>
                    <Text color="green.600">Identificaciones</Text>
                </NavLink>
                <NavLink to='/pretales'>
                    <Text color="green.600">Pretales</Text>
                </NavLink>
                <Spacer />
                <NavLink to='/compras'>
                    <Text fontSize='lg' fontWeight='semibold' color="green.600">Como comprar</Text>
                </NavLink>
            </HStack>

            {/* <Spacer/>

            <CartWidget/> */}
        </Flex>
    )
}