import axios from 'axios'

const api = axios.create ({
    baseURL: "http://192.168.6.159:3002/"
})

export default api