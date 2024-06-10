import React from 'react';
import CartWigetComponent from '../CartWigetComponent/CartWigetComponent';
import { Link } from 'react-router-dom';


const NavBarComponent = () => {

    return (
        <nav className="bg-gray-800 p-8 rounded-b-3xl">
            <ul className="list-none flex justify-between items-center align-baseline h-16 ">
                <Link to="/" className="text-black text-xl cursor-pointer font-bold">
                    <h1 className="text-black text-xl cursor-pointer font-bold">eCommerce</h1>
                </Link>
                <Link to="/" className="text-white text-xl cursor-pointer font-bold hover:text-gray-950">
                    Home
                </Link>
                <Link to="/" className="text-white text-xl cursor-pointer font-bold hover:text-gray-950">
                    Products
                </Link>
                <Link to="/" className="text-white text-xl cursor-pointer font-bold hover:text-gray-950">
                    About
                </Link>
                <CartWigetComponent></CartWigetComponent>
            </ul>
        </nav>
    )
}

export default NavBarComponent