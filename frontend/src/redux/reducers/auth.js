import {userAPI} from 'api/userAPI'

import { openNotification } from 'helpers/openNotifcation';

import {reduce} from 'lodash'

const SET_TOKEN = "SET_TOKEN";

let initialState = {
    token: null,
    isAuth: false
}

const authReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_TOKEN : 
            return {
                ...state,
                token: action.token,
                isAuth: window.localStorage.isAuth
            }
        
        default: 
            return state
    }
}

export const setToken = (token) => ({ type: SET_TOKEN, token })

export const logout = () => {
    window.localStorage.removeItem('token')
    window.location.reload(true);
}


export let setData = (values, history) => {
    return dispatch => {
        return userAPI.login( values ).then( (data) => {   
            if(data.status === 201){
                window.localStorage.setItem('token', data.token)
                dispatch(setToken (window.localStorage.token) );
                history.push('/')
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