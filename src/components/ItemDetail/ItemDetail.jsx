import { useState } from "react";
import CountBtn from "../CountBtn/CountBtn";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ id, name, category, img, price, stock, description }) => {
    const [ finish, setFinish ] = useState(false);

    const handleOnAdd = () => {
        setFinish(true)
        console.log("Llevado al carrito")
    }

    return (
        <div className='col-sm-4 mb-3'>
            <div className="card text-bg-success ">
                <img src={ img } className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"> { name } </h5>
                    <p className="card-text"> { description } </p>
                    <p className="card-text">Precio: { price } </p>
                    {/* <CountBtn title='Cantidad' stock={ stock }/>
                    <a href="#" className="btn btn-outline-light">Agregar al carrito</a> */}
                    <footer>              
                        {
                            finish === false ? (
                                <ItemCount onAdd={ handleOnAdd } stock={ stock }/>
                            ) : (
                                <Link to='/cart'>Finalizar compra</Link>
                            )
                        }
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;