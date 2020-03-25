import {userAPI} from 'api/userAPI'
import { openNotification } from 'helpers/openNotifcation';

const SET_USERS = "SET_USERS";
const SET_CREDENTIALS = "SET_CREDENTIALS";

let initialState = {
    users: [],
    credentials: null
}

const usersReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_USERS : 
            return {
                ...state,
                users: action.users
            }
        case SET_CREDENTIALS : 
            return {
                ...state,
                credentials: action.credentials
            }
        default: 
            return state
    }
}

export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCredentialsAC = (credentials) => ({ type: SET_CREDENTIALS, credentials })

export const setCredentials = () => {
    return dispatch => {
        return userAPI.getMe().then( (data) => {   
            
            if(data.status === 200){
                dispatch(setCredentialsAC ( data.user ) );
            }
        })
        .catch( err => {console.log(err);
        } )
    }  
}

export const fetchUsers = () => {
    return dispatch => {
        return userAPI.getUsers( ).then( (data) => {   
            if(data.status === 200){
                dispatch(setUsers ( data.users ) );
            } if(data.status === 404) {
                openNotification('error', 'Пользователь не найден', 'Проверте правильность введенных данных')
            }
        })
        .catch( err => {console.log(err);
        } )
    }  
}

export default usersReducer