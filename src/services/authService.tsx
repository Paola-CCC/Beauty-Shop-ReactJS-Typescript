import { UserAuth } from "../types/user.type";
import http from "./axiosClient";

export const register = (data: UserAuth) => {
    return http.post("/register", data);
};

export const login =(data:UserAuth) => {
    // return http.get("/login",data);
    return http.get("/login");
};

const authService = {
    register,
    login
}

export default authService;