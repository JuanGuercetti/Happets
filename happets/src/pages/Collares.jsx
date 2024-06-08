// import Card from "../components/Card"
import { SimpleGrid, GridItem, Heading, Card, CardBody, CardFooter, CardHeader, Text, Image } from "@chakra-ui/react"
import { getProducts } from "../asyncMock"
import { useState, useEffect } from "react";

export default function Collares() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsData = await getProducts();
            setProducts(productsData);
        };

        fetchProducts();
    }, []);
    
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

        {/* Todo este código de card debería pasarlo al componente Card mio con otro nombre
        para que no se pise con el componente de chakra para simplificarlo con props */}

            { products && products.map(
                product => (
                    <Card key={product.id}>
                        <Image src={ product.img } h='200px' w='200px'/>
                        <CardHeader>
                            <Text> { product.name } </Text>
                        </CardHeader>

                        <CardBody>
                            <Text> { product.description } </Text>
                        </CardBody>

                        <CardFooter>
                            <Text>Comprar!</Text>
                        </CardFooter>
                    </Card>
                    // <GridItem key={product.id} colSpan={1}>
                    //     <Card title={product.name} />
                    // </GridItem>
                )
            )}

            {/* <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/> */}
        </SimpleGrid>
    )
}