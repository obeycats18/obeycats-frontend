import axios from 'axios'

axios.defaults.baseURL = window.location.origin;
// axios.defaults.headers.common['token'] = window.localStorage.getItem('token')

const axiosCreate = (token = '') => {
    return axios.create({
        baseURL: window.location.origin,
        headers: {
            token
        }
    })
} 

export default axiosCreate