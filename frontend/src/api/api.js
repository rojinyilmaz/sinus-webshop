const { default: axios } = require("axios")

const BASE_URL = 'http://localhost:5000/api/';
const REGISTER_URL = `${BASE_URL}register`;
const ME_URL = `${BASE_URL}me`;
const AUTH_URL = `${BASE_URL}auth`;
const PRODUCTS_URL = `${BASE_URL}products`

const post = async (url, obj) => {
    try {
        const response = await axios.post(url, obj);
        return response;
        
    } catch (error) {
        console.log(error);
        
    }}

const get = async (url) => {
    try {
        const response = await axios.get(url);
        return response;
        
    } catch (error) {
        console.log(error);
        
    }}
const setToken = (token) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
const removeToken = () => {
    axios.defaults.headers.common['Authorization']
    }


export { AUTH_URL, REGISTER_URL, ME_URL, PRODUCTS_URL, post, get, removeToken, setToken } 