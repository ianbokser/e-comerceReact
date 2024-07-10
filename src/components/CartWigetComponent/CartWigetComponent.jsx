import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWigetComponent = () => {
    const { cart } = useContext(CartContext);
    const totalItems = cart.reduce((total, item) => total + (item.quantity || 0), 0);
    
    return (
        <Link to='/cart' className='text-gray-950 hover:text-gray-8'>
            <div>
                <FontAwesomeIcon icon={faCartShopping} className='text-white text-xl cursor-pointer hover:text-gray-950' />
                <span className='text-white ml-4'>{totalItems}</span>
            </div>
        </Link>
    );
};

export default CartWigetComponent;
