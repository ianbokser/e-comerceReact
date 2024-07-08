import { useState, useEffect } from 'react';
import { getProductsByCategory } from '../services/productServices';


const useProductsByCategory = (category) => {
  const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await getProductsByCategory(category);
          setProducts(response.data.products);
        } catch (err) {
          console.error(err.message);
        }
      };
  
      fetchProducts();
    });
    return {products};
}

export default useProductsByCategory