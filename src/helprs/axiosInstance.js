import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

export const axiosInstance = axios.create({
    baseURL: baseURL,
    // withCredentials: false,
    headers: {
        // contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS',
        // 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    }
});