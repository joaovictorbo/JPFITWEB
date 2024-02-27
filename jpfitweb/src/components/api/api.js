import axios from 'axios'

const api = axios.create ({
    baseURL: "http://192.168.7.132:3002/"
})

export default api