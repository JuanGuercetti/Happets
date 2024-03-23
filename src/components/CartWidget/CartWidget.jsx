import cartImage from './assets/cartImage.png';
import './CartWidget.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' className='btn-cart btn btn-outline-light'>
            <img src={cartImage} className='cartImg'/>
            { totalQuantity }
        </Link>
    )
}

export default CartWidget;