import axios from 'axios'

const api = axios.create ({
    baseURL: "http://26.137.2.57:3002/"
})

export default api