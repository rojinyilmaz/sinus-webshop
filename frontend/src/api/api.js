const { default: axios } = require("axios")

const BASE_URL = 'http://localhost:5000/api/';
const REGISTER_URL = `${BASE_URL}register`

const register = async (url, user) => {
    try {
        const response = await axios.post(url, user)
        return response
        
    } catch (error) {
        console.log(error)
        
    }}


export { REGISTER_URL, register } 