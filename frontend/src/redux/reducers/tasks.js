import {tasksAPI} from 'api/tasksAPI'

// import { openNotification } from 'helpers/openNotifcation';

let initialState = {
    idTask: '',
    tasks: [],
    isFetching: false
}

const tasksReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case "SET_TASK": {
            return {
                ...state,
                tasks : action.tasks    
            }
        }
        case "SET_ID_TASK": {
            return {
                ...state,
                idTask : action.id    
            }
        }
        default: 
            return state
    }
}

export const setTasksAction = (tasks) => ({ type: "SET_TASK", tasks }) 
export const setIdTasksAction = (id) => ({ type: "SET_ID_TASK", id }) 

export const setTasks = idProject => {
    return dispatch => {
        return tasksAPI.getTaskById(idProject).then( (data) => {   
            if(data.status === 200){
                dispatch(setTasksAction (data.tasks));
                dispatch(setIdTasksAction (data.idTask));
            }
        })
    }  
}

export const changeTask = (tasks) => {
    return dispatch => {
        dispatch(setTasksAction(tasks));
    }
}

export const fetchAddTask = value => {
    return dispatch => {
        return tasksAPI.addTasks(value)
            .then( data => data)
    }
} 

export default tasksReducer