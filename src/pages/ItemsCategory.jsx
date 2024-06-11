import React, { useState, useEffect } from 'react';
import { useParams } from'react-router-dom'

import { getProductsByCategory } from '../services/productServices';
import NavBarComponent from '../components/NavBarComponent/NavBarComponent'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import CategoryComonent from '../components/CategoryComponent/CategoryComonent'

export const ItemsCategory = () => {
    const [categories, setCategories] = useState("");

    const { category } = useParams();

    return (
        <>
            <NavBarComponent></NavBarComponent>
            <div className="flex justify-between">
                <div className="container mx-auto p-4 flex flex-col items-center justify-center">
                    <h1 className="text-3xl flex items-center font-bold mb-4">Productos</h1>
                    <ItemListContainer category={category}/>
                </div>
                <div>
                    <CategoryComonent></CategoryComonent>
                </div>
            </div>
        </>
    )
}
