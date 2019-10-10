import axios from './settings'


export const login = ( body ) => {
    return axios().post('/login', body)
}
