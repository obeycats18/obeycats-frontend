import axios from 'axios'

// axios.defaults.baseURL ='https://obeycats.herokuapp.com';
// axios.defaults.headers.common['token'] = window.localStorage.getItem('token')

// axios.defaults.headers.post[''] = '*';

const axiosCreate = (token = '') => {
    return axios.create({
        baseURL:'https://obeycats.herokuapp.com',
        headers: {
            token,
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        withCredentials: true,

    })
} 

export default axiosCreate