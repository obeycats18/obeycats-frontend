import axios from 'axios'

// axios.defaults.baseURL ='https://obeycats.herokuapp.com';
// axios.defaults.headers.common['token'] = window.localStorage.getItem('token')

const axiosCreate = (token = '') => {
    return axios.create({
        baseURL:'https://obeycats.herokuapp.com',
        headers: {
            token
        }
    })
} 

export default axiosCreate