import {tasksAPI} from 'api/tasksAPI'

import { openNotification } from 'helpers/openNotifcation';

let initialState = {
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
        
        
        default: 
            return state
    }
}

export const setTasksAction = (tasks) => ({ type: "SET_TASK", tasks }) 

export const setTasks = () => {
    return dispatch => {
        return tasksAPI.getTasks().then( (data) => {   
            console.log(data)
            if(data.status === 200){
                let tasks = []
                data.set.forEach(item => {
                    item.map(item => {
                        tasks = [...item.tasks]
                    })
                })
                dispatch(setTasksAction (tasks));
            }
        })
    }  
}

export default tasksReducer