import { Button, Flex, Heading, HStack, Spacer, Text } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"

export default function Navbar() {
    return (
         <Flex as="nav" p="20px" alignItems="center" bg='green.200'>
            <Heading mr="40px" color='green.400'>
                <NavLink>Happets</NavLink>
            </Heading>

            <HStack spacing="20px">
                <NavLink to='/collares'>Collares</NavLink> 
                <NavLink to='/correas'>Correas</NavLink>
                <NavLink to='/ids'>Identificaciones</NavLink>
                <NavLink to='/pretales'>Pretales</NavLink>
                <Spacer />
                <NavLink to='/compras'>
                    <Text fontSize='lg'>Como comprar</Text>
                </NavLink>
            </HStack>

            <Spacer/>

            <CartWidget/>
        </Flex>
    )
}