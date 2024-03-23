import './Item.css';
import { Link } from 'react-router-dom';

const Item = ( { id, name, img, price }) => {
    return (
        <div className='col-sm-4 mb-3'>
            <div className="card text-bg-success ">
                <img src={ img } className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"> { name } </h5>
                    <p className="card-text">Precio: ${ price } ARS </p>
                    <Link to={`/item/${id}`} className="btn btn-outline-light">Ver detalle</Link>
                </div>
            </div>
        </div>
    )
}

export default Item;