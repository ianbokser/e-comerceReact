import React from 'react'
import { getAllProducts } from '../services/productServices';

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      getAllProducts()
        .then((res) => setProducts(res.data.products))
        .catch((err) => console.error(err.message));
    }, []);

    return {products};
}

export default useProducts