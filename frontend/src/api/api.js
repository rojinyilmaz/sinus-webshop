const { default: axios } = require("axios")

const BASE_URL = 'http://localhost:5000/api/';
const REGISTER_URL = `${BASE_URL}register`;
const ME_URL = `${BASE_URL}me`;

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

const removeToken = () => {
    axios.defaults.headers.common['Authorization']
    }


export { REGISTER_URL, ME_URL, post, get, removeToken } 