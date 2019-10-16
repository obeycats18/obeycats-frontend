import axios from './settings'


export let userAPI = {
    login: ( body ) => {
        return axios().post('/login', body).then(response => response.data)
    },

    registration: ( body ) => {
        return axios().post('/registration', body).then(response => response.data)
        
    },
}