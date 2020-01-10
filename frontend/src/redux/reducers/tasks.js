import {tasksAPI} from 'api/tasksAPI'

// import { openNotification } from 'helpers/openNotifcation';

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

export const setTasks = idProject => {
    return dispatch => {
        return tasksAPI.getTaskById(idProject).then( (data) => {   
            if(data.status === 200){
                let tasks = []
                tasks = [...data.tasks.set.map(item => item.tasks)]
                // console.log(...tasks)
                // data.set.forEach(item => {
                //     item.map(item => tasks.push([]))
                // })
                dispatch(setTasksAction (...tasks));
            }
        })
    }  
}

export const fetchAddTask = value => {
    return dispatch => {
        return tasksAPI.addTasks(value)
            .then( data => data )
    }
} 

export default tasksReducer