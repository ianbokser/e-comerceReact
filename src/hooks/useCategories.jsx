import { useState, useEffect } from 'react';
import { getAllCategories } from '../services/productServices';

const useCategories = () => {
    const [categories, setCategories] = useState([]);
  
    useEffect(() => {
        getAllCategories()
        .then((res) => setCategories(res.data))
        .catch((err) => console.error(err.message));
    }, []);
  
    return { categories };
};

export default useCategories;
