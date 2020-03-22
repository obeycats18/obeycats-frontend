import axios from './settings'

export const teamsAPI = {
    getTeams: () => {
        return axios(window.localStorage.getItem('token')).get('/teams').then(response => response.data)
    }

}