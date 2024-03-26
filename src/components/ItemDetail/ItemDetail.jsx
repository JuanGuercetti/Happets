import './ItemDetail.css';
import { useState, useContext } from "react";
import CountBtn from "../CountBtn/CountBtn";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({ id, name, category, img, price, stock, description }) => {

    const [ finish, setFinish ] = useState(false);
    const [quantity, setQuantity] = useState(0);

    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setFinish(true)
        const objProductToAdd = {
            id, name, img, price, quantity
        }
        setQuantity(quantity)
        addItem(objProductToAdd)
    }

    return (
        <div className='col-sm-4 mb-3 card-container'>
            <div className="card text-bg-success ">
                <img src={ img } className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"> { name } </h5>
                    <p className="card-text"> { description } </p>
                    <p className="card-text">Precio: ${ price } ARS </p>
                    <footer className='card-footer'>              
                        {
                            finish === false ? (
                                <ItemCount onAdd={ handleOnAdd } stock={ stock }/>
                            ) : (
                                <>
                                    <Link to='/cart' className='btn btn-outline-light'>Finalizar compra</Link>
                                    <Link to='/' className='btn btn-outline-light'>Ver otros productos</Link>
                                </>
                            )
                        }
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;