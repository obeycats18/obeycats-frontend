import axios from 'axios'


const axiosCreate = (header = '') => {
    return axios.create( {
        baseUrl: window.location.origin,
        header: {
            'token': header
        }
    })
}

export default axiosCreate