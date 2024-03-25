import './ItemList.css';
import Item from '../Item/Item.jsx';

const ItemList = ( { products, loading }) => {
    return (
        <div className='container item-list'>
            <div className='row'>
                {
                    loading ? (
                        <div className="spinner-container">
                            <h2 className='title-main'>Actulizado lista de productos...</h2>
                            <div className="spinner-border text-success" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>           
                    )   :   (
                        products.map((product) => {
                            return <Item key={product.id} {...product}/>
                        })
                    )                 
                }
            </div>
        </div>
    )
}

export default ItemList;