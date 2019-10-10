import {login} from 'api/userAPI'


const SET_TOKEN = "SET_TOKEN";
const SET_AUTH = "SET_AUTH";

let initialState = {
    token: '',
    isAuth: false
}

const authReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_TOKEN : 
            return {
                ...state,
                token: action.token
            }
        case SET_AUTH : 
            return {
                ...state,
                isAuth: action.isAuth
            }
        default: 
            return state
    }
}


export const setToken = (token) => ({ type: SET_TOKEN, token })
export const setAuth = (isAuth) => ({ type: SET_AUTH, isAuth })


export const setData = (values) => (dispatch) => {
    return login( values ).then( (response) => {   
        if(response.data.status === 201){            
            dispatch(setToken (response.data.token) );
            dispatch(setAuth (true) );
        }
    } )
}

export default authReducer