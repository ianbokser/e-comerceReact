import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const ItemDetailsComponent = ({ product }) => {
    // if (product.images.length === 0) {
    //     console.log("No images found")
    // }

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 h-full flex items-center justify-center">
                <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                    <div className="w-full h-96 m-0">
                        {product.images && product.images.length > 0 ? (
                            <img className="w-full h-full object-contain rounded-t-lg" src={product.images[0]} alt="product image" />) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-t-lg">
                                <span className="text-gray-500">No image available</span>
                            </div>
                        )}
                    </div>
                    <div className="px-5 pb-5">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                        <div className="flex items-center mt-2.5 mb-5">
                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: "#e5e7eb" }} />
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">4.0</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="font-bold text-xl">{product.description}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">{product.price}</span>
                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetailsComponent;
