import axios from "axios";

const URL = process.env.REACT_APP_BASEURL;
const tokenStorage = localStorage.getItem("tokenJWT"); 
const token = tokenStorage ? `${tokenStorage}` : "";

const http = axios.create({
  baseURL: URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  },
});

export default http;