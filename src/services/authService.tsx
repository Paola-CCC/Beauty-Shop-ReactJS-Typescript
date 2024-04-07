import { UserDatas } from "../types/user.type";
import http from "./axiosClient";

export const register = async (data: UserDatas) => {
    return await http.post("/register", data);
};

export const login = async (data:UserDatas) => {
    return await http.post("/login",data);
};

export const getCurrentUserById = async ( id: number) => {
    return await http.get(`/clients-show/${id}`);
};

export const updateCurrentUserById = async ( id: number ,data :any) => {
    return await http.put(`/client-update/${id}`,data );
};

const authService = {
    register,
    login,
    getCurrentUserById
}

export default authService;