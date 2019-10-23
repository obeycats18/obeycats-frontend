import axios from './settings'

export let projectAPI = {
    getAllProjects: ( ) => {
        return axios(window.localStorage.getItem('token')).get('/projects').then(response => response.data)
    }
}