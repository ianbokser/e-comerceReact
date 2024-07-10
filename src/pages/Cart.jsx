import React from 'react';
import NavBarComponent from '../components/NavBarComponent/NavBarComponent';
import { CartContext } from '../context/CartContext';
import CategoryComponent from '../components/CategoryComponent/CategoryComonent';

export const Cart = () => {
    const { cart, removeFromCart, deleteFromCart, addToCart } = React.useContext(CartContext);

    const handleRemoveOne = (item) => {
        removeFromCart(item, 1);
    };

    const handleAddOne = (item) => {
        addToCart(item, 1);
    };

    const handleDeleteItem = (item) => {
        deleteFromCart(item);
    };

    return (
        <>
            <NavBarComponent />
            <div className="flex">
                <div className="container mx-auto p-4">
                    <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex justify-center">Carrito de Compras</h1>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                        {cart.length === 0 ? (
                            <p className="text-gray-900 dark:text-white flex justify-center">El carrito está vacío.</p>
                        ) : (
                            cart.map((item, index) => (
                                <div key={index} className="flex items-center justify-between p-4 mb-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
                                    <div className="flex items-center space-x-4">
                                        <img className="w-24 h-24 object-cover rounded" src={item.images} alt="item image" />
                                        <div>
                                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h2>
                                            <p className="text-gray-700 dark:text-gray-300">Precio: ${item.price}</p>
                                            <p className="text-gray-700 dark:text-gray-300">Cantidad: {item.quantity}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <button onClick={() => handleRemoveOne(item)} className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
                                            -
                                        </button>
                                        <button onClick={() => handleAddOne(item, 1)} className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
                                            +
                                        </button>
                                        <button onClick={() => handleDeleteItem(item)} className="px-4 py-2 bg-red-700 hover:bg-red-800 text-white rounded-lg focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800">
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
                <div className="my-20 mx-8">
                    <CategoryComponent />
                </div>
            </div>
        </>
    );
};

export default Cart;
