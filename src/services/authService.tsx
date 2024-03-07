import { UserDatas } from "../types/user.type";
import http from "./axiosClient";

export const register = (data: UserDatas) => {
    return http.post("/register", data);
};

export const login =(data:UserDatas) => {
    // return http.get("/login",data);
    return http.get(`/users?email=${data.email}&password=${data.password}`);

};

export const getCurrentUserById = ( id: number) => {
    return http.get(`/users/${id}`);
};

export const updateCurrentUserById = ( id: number ,data :any) => {
    return http.put(`/users/${id}`,data );
};

const authService = {
    register,
    login,
    getCurrentUserById
}

export default authService;