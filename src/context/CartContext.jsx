import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity) => {
        setCart((prevCart) => {
            const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);
            if (existingProductIndex >= 0) {
                const newCart = [...prevCart];
                newCart[existingProductIndex] = {
                    ...newCart[existingProductIndex],
                    quantity: prevCart[existingProductIndex].quantity + quantity,

                };
                console.log(newCart, existingProductIndex)
                return newCart;
            } else {
                return [...prevCart, {...product, quantity}];
            }
        });
    };

    return <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>;
}