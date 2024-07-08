import { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const useProductById = (id) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const productRef = doc(db, 'products', id);
        getDoc(productRef).then((querySnapshot) => {
            setProduct({ id: querySnapshot.id, ...querySnapshot.data() });
        }).catch((error) => console.error(error.message)).finally(() => {setLoading(false)});
    }, [id]);

    return { product, loading };
};

export default useProductById;
