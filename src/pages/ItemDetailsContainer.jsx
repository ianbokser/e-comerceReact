import React from 'react';
import NavBarComponent from '../components/NavBarComponent/NavBarComponent';
import ItemDetailsComponent from '../components/ItemDetailsComponent/ItemDetailsComponent';
import CategoryComponent from '../components/CategoryComponent/CategoryComonent';

import LoaderComponent from '../components/LoaderComponent/LoaderComponent';
import { useParams } from 'react-router-dom';
import useProductById from '../hooks/useProductById';

export const ItemDetailsContainer = () => {
    const { id } = useParams();
    const { product, loading } = useProductById(id);

    return (
        <>
            <NavBarComponent />
            <div className="flex justify-evenly p-8">
            {loading && <LoaderComponent />}
            {!loading && <ItemDetailsComponent product={product} />}
            <CategoryComponent/>
            </div>
        </>
    );
};
