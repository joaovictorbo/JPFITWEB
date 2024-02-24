import axios from 'axios'

const api = axios.create ({
    baseURL: "http://192.168.1.9:3002/"
})

export default api