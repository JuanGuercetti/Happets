import { Heading, Container } from '@chakra-ui/react'

export default function Home() {
    return (
        <Container>
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