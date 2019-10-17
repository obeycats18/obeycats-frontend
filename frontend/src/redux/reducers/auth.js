import {userAPI} from 'api/userAPI'
import { openNotification } from 'helpers/openNotifcation';
import {reduce} from 'lodash'

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


export let setData = (values) => {
    return dispatch => {
        return userAPI.login( values ).then( (data) => {   
            if(data.status === 201){
                dispatch(setToken (data.token) );
                dispatch(setAuth (true) ); 
            } if(data.status === 404) {
                openNotification('error', 'Пользователь не найден', 'Проверте правильность введенных данных')
            }
        })
        .catch( err => {console.log(err);
        } )
    }  
}

export let createUser = (values, history) => {

        let postData = reduce(values, ((result, value, key) => {
            if(key !== 'confirm_password'){
                result[key] = value
            }

            return result
            
        }), {})

        return userAPI.registration( postData ).then( (data) => {   
            if(data.status === 409) {
                openNotification('error', 'Пользователь уже существует', 'Введите другой e-mail')
            }else if(data.status === 201) {
                history.push('/registration/success')
                
            }
            
        })
        .catch( err => {console.log(err);
        } )
}



export default authReducer