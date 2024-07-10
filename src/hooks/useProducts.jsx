import { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';


const useProducts = (collectionName) => {
    const [products, setProducts] = useState([]);
    const [ loading, setLoading ] = useState(true);
    
    useEffect(() => {
      const db = getFirestore();
      const productsCollection = collection(db, collectionName);
      getDocs(productsCollection)
      .then((querySnapshot) => {
        setProducts(querySnapshot.docs.map((doc) => ({ id: doc.id , ...doc.data() })));
      }).catch((error) => console.log(error))
      .finally(() => {setLoading(false)})
    });
    return {products, loading};
}

export default useProducts