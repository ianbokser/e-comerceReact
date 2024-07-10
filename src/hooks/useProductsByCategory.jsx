import { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

const useProductsByCategory = (category) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const productsCollection = collection(db, 'products'); 
        const q = query(productsCollection, where('category', '==', category));

        getDocs(q)
            .then((querySnapshot) => {
                const productsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProducts(productsList);
            })
            .catch((error) => console.error('Error fetching products by category:', error))
            .finally(() => setLoading(false));
    }, [category]);

    return { products, loading };
};

export default useProductsByCategory;
