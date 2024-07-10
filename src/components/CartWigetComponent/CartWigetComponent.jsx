import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';

const CartWigetComponent = () => {

    const { cart, addToCart } = useContext(CartContext);

    return (
        <Link to='/cart' className='text-gray-950 hover:text-gray-8'>
            <div>
                <FontAwesomeIcon icon={faCartShopping} className='text-white text-xl cursor-pointer hover:text-gray-950' />
                <span className='text-white ml-4'>{cart.quantity}</span>
            </div>
        </Link>
    )
}

export default CartWigetComponent