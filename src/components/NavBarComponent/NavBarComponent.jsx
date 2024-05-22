import React from 'react'

const NavBarComponent = () => {
    return (
        <nav className="bg-gray-900 p-8 rounded-b-3xl">
            <ul className="list-none flex justify-between items-center h-16 ">
                <h1 className="text-white text-xl cursor-pointer hover:text-gray-950">eCommerce</h1>
                <li className="text-white text-xl cursor-pointer hover:text-gray-950">Home</li>
                <li className="text-white text-xl cursor-pointer hover:text-gray-950">Products</li>
                <li className="text-white text-xl cursor-pointer hover:text-gray-950">About</li>
                <li className="text-white text-xl cursor-pointer hover:text-gray-950">Contact us</li>
            </ul>
        </nav>
    )
}

export default NavBarComponent