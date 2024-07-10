import React from 'react';
import NavBarComponent from '../components/NavBarComponent/NavBarComponent';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import CategoryComponent from '../components/CategoryComponent/CategoryComonent';
import useProducts from '../hooks/useProducts';
import LoaderComponent from '../components/LoaderComponent/LoaderComponent';

export const Home = () => {
    const { products, loading } = useProducts("products");

    return(
        <>
            <NavBarComponent />
            <div className="flex justify-between">
                <div className="container mx-auto p-4 flex flex-col items-center justify-center">
                    <h1 className="text-3xl flex items-center font-bold mb-4">Productos</h1>
                    {loading && <LoaderComponent />}
                    {!loading && <ItemListContainer products={products} />}
                </div>
                <div className="my-20 mx-8">
                    <CategoryComponent />
                </div>
            </div>
        </>
    );
};