import axios from './settings'

export let projectAPI = {
    getAllProjects: ( ) => {
        return axios.get('/projects').then(response => response.data)
    }
}