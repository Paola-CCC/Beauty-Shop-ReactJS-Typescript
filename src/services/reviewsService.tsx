import { Reviews } from "../types/reviews.type";
import http from "./axiosClient";


export const getAll = () => {
    console.log(" SARA");
    
    return http.get<Reviews[]>("/reviews");
};

export const getById = (id : number | string | undefined) => {
    return http.get<Reviews>(`/reviews/${id}`);
};

export const createReview = (data: Reviews) => {
    return http.post<Reviews>(`/reviews`, data);
};

export const updateReview = (id : string | number, data: Reviews) => {
    return http.post<Reviews>(`/reviews/${id}`, data);
};

export const reviewsService = {
    getAll,
    getById,
    createReview,
    updateReview
}