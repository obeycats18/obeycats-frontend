import axios from './settings'

export let userAPI = {
    login: ( body ) => {
        return axios().post('/login', body).then(response => response.data)
    },

    registration: ( body ) => {
        return axios().post('/registration', body).then(response => response.data)
        
    },

    getUsers: () => {
        return axios(window.localStorage.getItem('token')).get('/user').then(response => response.data)
        
    },

    getMe: () => {
        return axios(window.localStorage.getItem('token')).get('/user/me').then(response => response.data)
        
    },

    
}