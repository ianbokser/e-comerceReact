import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCategories from '../../hooks/useCategories';

const CategoryComponent = () => {
    const { categories } = useCategories();
    const navigate = useNavigate();

    const handleCategoryClick = (categorySlug) => {
        navigate(`/category/${categorySlug}`);
    };

    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg w-64">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Categories</h2>
            <ul className="space-y-2">
                {categories.map((category, index) => (
                    <li key={index} className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer" onClick={() => handleCategoryClick(category.slug)}>
                    {category.slug}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryComponent;
