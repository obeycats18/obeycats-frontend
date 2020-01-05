import { openNotification } from 'helpers/openNotifcation';
import axios from 'api/settings'
// const SET_TOKEN = "SET_TOKEN";

let initialState = {
    isDisconnect: false,
    isExpiredToken: false
}

const globalReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case "SET_CONNECTION" : 
            return {
                ...state,
                isDisconnect: action.isDisconnect
            }
        case "SET_EXPIRED_TOKEN" : 
            return {
                ...state,
                isExpiredToken: action.isExpiredToken
            }
        default: 
            return state
    }
}

export const setConnectionAction = (isDisconnect) => ({ type: "SET_TOKEN", isDisconnect })
export const setExpiredTokenAction = (isExpiredToken) => ({ type: "SET_EXPIRED_TOKEN", isExpiredToken })


export let setConnection = () => {
    return dispatch => {
        const webPing = setInterval( () => {
            axios.get('//google.com', {mode: 'no-cors'})
                .then( () => {
                    dispatch(setConnectionAction(false))
                    return clearInterval(webPing)
                })
                .catch( () => {
                    dispatch(setConnectionAction(true))
                })
        }, 2000)
    }  
}


export default globalReducer