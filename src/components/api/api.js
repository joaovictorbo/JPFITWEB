import axios from 'axios'

const api = axios.create ({
    baseURL: "https://academia.jpafit.com.br/api/"
})

export default api