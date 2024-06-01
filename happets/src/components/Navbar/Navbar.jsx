import { Flex, Heading, Box, Text, Button, HStack } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
         <Flex as="nav" p="20px" alignItems="center" bg='green.200'>
            <Heading mr="20px" color='green.400'>Happets</Heading>

            <HStack spacing="20px">
                <NavLink to='/collares'>Collares</NavLink> 
                <NavLink to='/correas'>Correas</NavLink>
                <NavLink to='/ids'>Identificaciones</NavLink>
                <NavLink to='/pretales'>Pretales</NavLink>
            </HStack>
        </Flex>
    )
}