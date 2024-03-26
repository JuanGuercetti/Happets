import './ItemCart.css';

const ItemCart = ({ id, name, img, price }) => {

    return (
        <div className="card text-bg-light col-md-7 m-2">
            <div className="row g-0 pt-1">
                <div className="col-md-4">
                    <img src={ img } className="card-img-top" alt="..."/>
                </div>
                    <div className="col-md-8 mt-3">
                        <h5 className="card-title"> { name } </h5>
                        <p className="card-text">Cantidad:  </p>
                        <p className="card-text">Precio: ${ price } ARS </p>
                        <p className="card-text">Total: $ ARS </p>
                        <button className='btn btn-success'>Eliminar</button>              
                    </div>
            </div>
        </div>
    )
}

export default ItemCart;