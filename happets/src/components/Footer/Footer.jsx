import { Flex, HStack, Heading } from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom"

export default function Footer() {
    return (
         <Flex as="footer" p="20px" alignItems="center" justifyContent="center" bg='green.200' bottom="0">
            <Heading size="md" color='green.400'>Seguinos en Instagram</Heading>

            <Link to='https://www.instagram.com/happets_/'><ExternalLinkIcon m="10px"/></Link>
        </Flex>
    )
}