import axios from './settings'

export const tasksAPI = {
    getTasks: () => {
        return axios(window.localStorage.getItem('token')).get('/tasks').then(response => response.data)
    },
    addTasks: (value) => {
        console.log(value)
        return axios(window.localStorage.getItem('token')).post('/tasks/add', {tasks: value}).then(response => response.data)
    },

}