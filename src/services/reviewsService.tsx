import { Reviews } from "../types/reviews.type";
import http from "./axiosClient";

export const getAll = async () => {    
    return await http.get<Reviews[]>("/reviews");
};

export const getById = async (id: number | string | undefined) => {
    return await http.get<Reviews>(`/reviews-show/${id}`);
};

export const createReview = async (data: Reviews) => {
    return await http.post<Reviews>(`/new-reviews`, data);
};

export const updateReview = async (id : string | number, data: Reviews) => {
    return await http.put<Reviews>(`/update-reviews/`, data);
};

export const reviewsService = {
    getAll,
    getById,
    createReview,
    updateReview
}