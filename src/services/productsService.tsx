
import { Products} from "../types/products.type";
import http from "./axiosClient";

export const getAll = async () => {
    return await http.get<Products[]>("/products");
};

export const getPopularProducts = async () => {
    return await http.get<Products[]>("/popular-products");
};

export const getSearchProducts = async (data: any) => {
    return await http.post<Products[]>("/search-products", data);
};

export const getFiltedProductByName = async (name: string) => {
    return await http.get<Products[]>(`/filter-products?name=${name}`);
};

export const getLatestProducts = async () => {
    return await http.get<Products[]>("/latest-products");
};

export const getById = async(id : number | string | undefined) => {
    return await http.get<Products>(`/products-show/${id}`);
};

const ProductsService = {
    getAll,
    getById,
    getPopularProducts,
    getLatestProducts,
    getSearchProducts,
    getFiltedProductByName
};

export default ProductsService;