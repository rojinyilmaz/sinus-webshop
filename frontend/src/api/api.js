const { default: axios } = require("axios")

const BASE_URL = 'http://localhost:5000/api/';
const REGISTER_URL = `${BASE_URL}register`

const post = async (url, obj) => {
    try {
        const response = await axios.post(url, obj)
        return response
        
    } catch (error) {
        console.log(error)
        
    }}


export { REGISTER_URL, post } 