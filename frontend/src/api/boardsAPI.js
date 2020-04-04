import axios from './settings'

export const boardsAPI = {
    getBoards: (idProject) => {
        return axios(window.localStorage.getItem('token')).get(`/boards?idProject=${idProject}`).then(response => response.data)
    },
    initBoards: (idProject) => {
        return axios(window.localStorage.getItem('token')).post(`/boards/init`, {idProject}).then(response => response.data)
    },
    initTasksBoards: (idProject) => {
        return axios(window.localStorage.getItem('token')).post(`/boards/init/tasks`, {idProject}).then(response => response.data)
    },
    createBoards: (value) => {
        return axios(window.localStorage.getItem('token')).post(`/boards/add`,  value).then(response => response.data)
    },
    replaceTask: (value) => {
        return axios(window.localStorage.getItem('token')).post(`/boards/replace/task`,  value).then(response => response.data)
    }
}