import axios from 'axios'

const api = axios.create({
    baseURL: "/api",
    timeout: 10000,
    headers: {
        "Content-type": "application/json"
    }
})
export default api;