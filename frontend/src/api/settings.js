import axios from 'axios'

axios.defaults.baseURL = window.location.origin;
axios.defaults.headers.common['token'] = window.localStorage.getItem('token')

export default axios