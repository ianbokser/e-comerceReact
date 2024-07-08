import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/CartContext'

export const ItemDetailsComponent = ({ product }) => {
    const { addToCart, removeFromCart } = React.useContext(CartContext);
    return (
        <div className="p-5 h-full max-w-xl flex justify-center">
            <div className="w-full flex flex-col items-center justify-center">
                <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                    <div className="w-full h-96 m-0">
                        <img className="w-full h-full object-contain rounded-t-lg" src={product.images} alt="product image" />
                    </div>
                    <div className="px-5 pb-5">
                        <h2 className="flex justify-center font-bold text-4xl my-10">{product.title}</h2>
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                        <div className="flex items-center mt-2.5 mb-5">
                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                {Array.from({ length: Math.round(product.rating) }, (_, i) => (
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} key={i} />
                                ))}
                            </div>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{Math.round(product.rating)}</span>
                        </div>
                        <p className="font-bold text-2xl mb-10">{product.description}</p>
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                    </div>
                </div>
                <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5 flex justify-between items-center">
                    <button onClick={addToCart} className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">+</button>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
                    <button onClick={removeFromCart} className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">-</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetailsComponent;
