import Item from "../components/Item"
import { SimpleGrid, GridItem, Heading } from "@chakra-ui/react"
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

            { products && products.map(
                product => (
                    <Item 
                        key={ product.id } 
                        name={ product.name } 
                        img={ product.img }
                        description={ product.description }> 
                    </Item>
            ))}
        </SimpleGrid>
    )
}