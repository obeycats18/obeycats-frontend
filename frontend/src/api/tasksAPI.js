import axios from './settings'

export const tasksAPI = {
    getTasks: () => {
        return axios(window.localStorage.getItem('token')).get('/tasks').then(response => response.data)
    },
    addTasks: (value) => {
        console.log(value)
        return axios(window.localStorage.getItem('token')).post('/tasks/add', {idProject: value.idProject, tasks: value.tasks}).then(response => response.data)
    },
    getTaskById: (idProject) => {
        return axios(window.localStorage.getItem('token')).get(`/tasks?idProject=${idProject}`).then(response => response.data)
    },
    getBacklog: (idProject) => {
        return axios(window.localStorage.getItem('token')).get(`/backlog?idProject=${idProject}`).then(response => response.data)
    }

}