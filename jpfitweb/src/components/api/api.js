import axios from 'axios'

const api = axios.create ({
    baseURL: "http://25.60.158.203:3003/"
})

export default api