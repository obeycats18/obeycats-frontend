import {tasksAPI} from 'api/tasksAPI'

import { openNotification } from 'helpers/openNotifcation';

const SET_TASK = "SET_TASK";
const EDIT_TASK = "EDIT_TASK";
const SET_FETCHING_STATUS = "SET_FETCHING_STATUS";


let initialState = {
    tasks: null,
    isFetching: false
}

const tasksReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_TASK: {
            return {
                ...state,
                tasks : action.tasks     
            }
        }
        case EDIT_TASK: {
            return {
                ...state,
                project : action.project     
            }
        }
        case SET_FETCHING_STATUS: {
            return {
                ...state, 
                isFetching: action.status
            }
        }
        
        
        default: 
            return state
    }
}

export const setTasksAction = (tasks) => ({ type: SET_TASK, tasks }) 

export const setFetchingStatus = (status) => ({ type: SET_FETCHING_STATUS, status })


export let setTasks = () => {
    return dispatch => {
        dispatch(setFetchingStatus(true))
        return tasksAPI.getTasks().then( (data) => {
            
            let tasks = []

            data.set.forEach((item) => {
                item.forEach(item => {
                    item.tasks.forEach(item => {
                        tasks.push(item)
                    })                    
                })
            }) 

            dispatch(setTasksAction(tasks))
            dispatch(setFetchingStatus(false))
        })
        
    }  
}

export let addTasks = (value) => { 
    return dispatch => {
        return tasksAPI.addTasks(value).then( (data) => {
            console.log(value, data)
            if(data.status === 500) {
                openNotification('error', 'Ошибка создание', '')
            }

            return data.status
        })
        
    }  
}



export default tasksReducer