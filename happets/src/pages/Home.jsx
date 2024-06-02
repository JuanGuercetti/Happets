import { Heading, Container } from '@chakra-ui/react'

export default function Home() {
    return (
        <Container h="100vh">
            <Heading 
                size='xl' 
                textAlign='center' 
                mt='10vh'
                color='green.200'>
                    Bienvenidos a Happets!
            </Heading>        
        </Container>
    )
}