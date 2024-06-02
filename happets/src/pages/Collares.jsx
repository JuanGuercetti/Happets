import Card from "../components/Card/Card"
import { SimpleGrid, GridItem, Heading } from "@chakra-ui/react"

export default function Collares() {
    return (
        <SimpleGrid  
            columns={3} 
            spacing={10} 
            bg="gray.50"
            p="10px"
            width='100%'>

            <GridItem colSpan={3} width="100%">
                <Heading size='xl' textAlign='center'>Collares</Heading>
            </GridItem>

            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </SimpleGrid>
    )
}