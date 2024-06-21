import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { CheckIcon, EmailIcon, HamburgerIcon } from '@chakra-ui/icons'

export default function HomeInstruction() {
    return (
        <Flex w="100%" bg="green.100" justify="space-around">
                <Box p="30px" textAlign="center">
                    <HamburgerIcon/>
                    <Heading size="md" mb="10px">Hace tu orden</Heading>
                    <Text>Mirá nuestra lista de productos y elegí tu compra</Text>
                </Box>

                <Box p="30px" textAlign="center">
                    <EmailIcon/>
                    <Heading size="md" mb="10px">Confirmación y pago</Heading>
                    <Text>Te vamos a estar contactando a la brevedad para coordinar la forma de pago</Text>
                </Box>

                <Box p="30px" textAlign="center">
                    <CheckIcon/>
                    <Heading size="md" mb="10px">Entrega</Heading>
                    <Text>Una vez realizado el pago, coordinamos la entrega</Text>
                </Box>
        </Flex>
    )
}