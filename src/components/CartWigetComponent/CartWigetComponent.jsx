import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CartWigetComponent = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faCartShopping} className='text-white text-xl cursor-pointer hover:text-gray-950' />
            <span className='text-white ml-4'>0</span>
        </div>
    )
}

export default CartWigetComponent