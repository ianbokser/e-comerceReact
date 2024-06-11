import axios from "axios";

export const getAllProducts = () => {
    return axios.get("https://dummyjson.com/products")
}

export const getProductById = (id) => {
    return axios.get(`https://dummyjson.com/products/${id}`)
}

export const getProductsByCategory = (categories) => {
    return axios.get(`https://dummyjson.com/products/category/${categories}`);
}

export const getAllCategories = () => {
    return axios.get("https://dummyjson.com/products/categories")
}