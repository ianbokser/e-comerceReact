import React from 'react'
import CartWigetComponent from '../CartWigetComponent/CartWigetComponent'

const NavBarComponent = () => {

    return (
        <nav className="bg-gray-800 p-8 rounded-b-3xl">
            <ul className="list-none flex justify-between items-center h-16 ">
                <h1 className="text-black text-xl cursor-pointer font-bold">eCommerce</h1>
                <li className="text-white text-xl cursor-pointer font-bold hover:text-gray-950">Home</li>
                <li className="text-white text-xl cursor-pointer font-bold hover:text-gray-950">Products</li>
                <li className="text-white text-xl cursor-pointer font-bold hover:text-gray-950">About</li>
                <CartWigetComponent></CartWigetComponent>
            </ul>
        </nav>
    )
}

export default NavBarComponent