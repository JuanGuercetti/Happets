import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react";
    
export default function CarrouselItem({ img, description, title }) {
    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'>

            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={ img }
                alt=''/>

            <Stack>
                <CardBody>
                    <Heading size='md'>{ title }</Heading>
                    <Text py='2'>
                        { description }
                    </Text>
                </CardBody>

                <CardFooter>
                    <Button variant='solid' colorScheme='green'>
                        Ver producto
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    )
}