import axios from './settings'

export let milestoneAPI = {

    getMilestones: (idProject) => {
        return axios(window.localStorage.getItem('token')).get(`/milestones?idProject=${idProject}`).then(response => response.data)
    },
    addMilestone: (value) => {
        return axios(window.localStorage.getItem('token')).post('/milestone/add', value).then(response => response.data)
    },
    editMilestone: (value) => {
        return axios(window.localStorage.getItem('token')).put('/milestone/edit', value).then(response => response.data)
    },
    // addProjects: ( values ) => {
    //     return axios(window.localStorage.getItem('token')).post('/projects/add', values).then(response => response.data)
    // },

    // addMilestone: ( values ) => {
    //     return axios(window.localStorage.getItem('token')).post('/milestone/add', values).then(response => response.data)
    // },

    // saveProject: ( values ) => {
    //     return axios(window.localStorage.getItem('token')).post('/projects/edit', values).then(response => response.data)
    // },

    // deleteProject: ( id ) => {
    //     return axios(window.localStorage.getItem('token')).delete(`/project?id=${id}`).then(response => response.data)
    // }

}