import axios from './settings'

export const teamsAPI = {
    getTeams: () => {
        return axios(window.localStorage.getItem('token')).get('/teams').then(response => response.data)
    },
    getAllTeams: () => {
        return axios(window.localStorage.getItem('token')).get('/teams/all').then(response => response.data)
    },
    createTeam: (values) => {
        return axios(window.localStorage.getItem('token')).post('/teams/add', values).then(response => response.data)
    },
    getMembers: (idTeam) => {
        return axios(window.localStorage.getItem('token')).get(`/teams/members?idTeam=${idTeam}`, ).then(response => response.data)
    }


}