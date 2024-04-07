import axios from "axios";

const URL = process.env.REACT_APP_BASEURL;
const tokenStorage = localStorage.getItem("userToken") ; 
const token = tokenStorage ? JSON.parse(tokenStorage)?.jwt : "";

const http = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  },
});

export default http;