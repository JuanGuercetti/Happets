import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts;

        asyncFunction(categoryId)
        .then(res => {
            setProducts(res);
            setLoading(false);
        })
        .catch(err => {
            console.log('Data loading error :' + error);
            setLoading(false);
        })
    }, [categoryId])

    return (
        <div>
            <h1 className='title-main'>{ greeting }</h1>

            <ItemList products={ products } loading={ loading }/>
        </div>
    )
}

export default ItemListContainer;