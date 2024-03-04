
import { Products } from "../types/products.type";
import http from "./axiosClient";

export const getAll = () => {
    return http.get<Products[]>("/products");
};

export const getById = (id : number | string) => {
    return http.get(`/products/${id}`);
};

const ProductsService = {
    getAll,
    getById
};

export default ProductsService;