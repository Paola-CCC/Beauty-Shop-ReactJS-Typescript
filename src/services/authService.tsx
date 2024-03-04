import http from "./axiosClient";

export const register = (data: any) => {
    return http.get("/register", data);
};

export const login =(data:any) => {
    // return http.get("/login",data);
    return http.get("/login");
};

const authService = {
    register,
    login
}

export default authService;