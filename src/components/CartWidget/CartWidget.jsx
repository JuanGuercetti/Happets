import cartImage from './assets/cartImage.png';
import './CartWidget.css';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
        <Link to='/cart' className='btn-cart btn btn-outline-light'>
            <img src={cartImage} className='cartImg'/>
            0
        </Link>
    )
}

export default CartWidget;