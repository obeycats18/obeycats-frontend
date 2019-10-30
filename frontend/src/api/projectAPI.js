import axios from './settings'

export let projectAPI = {
    getAllProjects: ( ) => {
        return axios(window.localStorage.getItem('token')).get('/projects').then(response => response.data)
    },
    addProjects: ( values ) => {
        return axios(window.localStorage.getItem('token')).post('/projects/add', values).then(response => response.data)
    },

    addMilestone: ( values ) => {
        return axios(window.localStorage.getItem('token')).post('/milestone/add', values).then(response => response.data)
    },

    saveProject: ( values ) => {
        return axios(window.localStorage.getItem('token')).post('/projects/edit', values).then(response => response.data)
    }

}