
import { Products } from "../types/products.type";
import http from "./axiosClient";

export const getAll = () => {
    return http.get<Products[]>("/products");
};
export const getPopularProducts = () => {
    return http.get<Products[]>("/popular-products");
};

export const getById = (id : number | string | undefined) => {
    return http.get<Products>(`/products/${id}`);
};

const ProductsService = {
    getAll,
    getById,
    getPopularProducts
};

export default ProductsService;