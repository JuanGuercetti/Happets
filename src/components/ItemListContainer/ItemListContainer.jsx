import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts;

        asyncFunction(categoryId)
        .then(res => {
            setProducts(res);
        })
        .catch(err => {
            console.log('Data loading error :' + error);
        })
    }, [categoryId])

    return (
        <div>
            <h1 className='title-main'>{ greeting }</h1>

            <ItemList products={ products }/>

            {/* {
                products.length === 0 ? 
                    <ItemList products={ products }/>
                    :
                    <h1 className='title-main'>Cargando...</h1>
            } Esto no funciona   */}
        </div>
    )
}

export default ItemListContainer;