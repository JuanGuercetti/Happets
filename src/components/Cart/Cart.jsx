import './Cart.css';
import ItemCart from '../ItemCart/ItemCart';
import { CartContext } from "../../context/CartContext"
import { useContext } from 'react';

const Cart = () => {

    const { cart } = useContext(CartContext);

    return (
        <div className="row justify-content-center cart-container">
            <h1 className='cart-title'>Carrito de compras</h1>

            { cart.length === 0 ? 
                <h2>No tiene productos agregados a su carrito</h2>
                :
                <>
                    {cart.map((product) => {
                            return <ItemCart key={product.id} {...product}/>
                        })
                    }
                    <footer>
                        <p>Total: $</p>
                        <button>Finalizar compra</button>
                    </footer>
                </>     
            }
        </div>
    )
}

export default Cart;