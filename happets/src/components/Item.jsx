import { Button, Card, CardBody, CardHeader, CardFooter, Divider, Heading, Image, Text } from "@chakra-ui/react"

export default function Item({ id, name, description, img }) {
    return (
        <Card bg='green.100' borderTopWidth="6px" borderTopStyle="solid" borderTopColor="green.500" align='center'>
            <CardHeader>
                <Heading size='md'> { name } </Heading>
            </CardHeader>

            <Image src={ img } h='200px' w='200px'/>

            <CardBody>
                <Text> { description } </Text>
            </CardBody>

            <Divider/>

            <CardFooter >
                <Button colorScheme='green'>Agregar al carrito</Button>
            </CardFooter>
        </Card>
    )
}