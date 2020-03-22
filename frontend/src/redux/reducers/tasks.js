import {tasksAPI} from 'api/tasksAPI'


let initialState = {
    idTask: '',
    tasks: [],
    backlog: [],
    isFetching: false,
    isEmpty: false
}

const tasksReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case "SET_TASK": {
            return {
                ...state,
                tasks : action.tasks    
            }
        }
        case "SET_BACKLOG": {
            return {
                ...state,
                backlog: action.backlog    
            }
        }
        case "SET_ID_TASK": {
            return {
                ...state,
                idTask : action.id    
            }
        }
        case "SET_FETCHING": {
            return {
                ...state,
                isFetching : action.isFetching    
            }
        }
        case "SET_EMPTY": {
            return {
                ...state,
                isEmpty : action.isEmpty    
            }
        }
        default: 
            return state
    }
}

export const setTasksAction = (tasks) => ({ type: "SET_TASK", tasks }) 
export const setIdTasksAction = (id) => ({ type: "SET_ID_TASK", id }) 
export const setBacklogAction = (backlog) => ({ type: "SET_BACKLOG", backlog }) 
export const setFetching = (isFetching) => ({ type: "SET_FETCHING", isFetching }) 
export const setEmpty = (isEmpty) => ({ type: "SET_EMPTY", isEmpty }) 



export const setTasks = (idProject, isDeveloper = false) => {
    return dispatch => {
        dispatch(setFetching(true))
        if(isDeveloper){
            return tasksAPI.getTasksByDeveloper().then( (data) => {   
                if(data.status === 200){
                    dispatch(setTasksAction (data.tasks));
                    dispatch(setIdTasksAction (data.idTask));
                }
                else if(data.status === 404) dispatch(setEmpty(true)) 
                dispatch(setFetching(false))
            })
        }
        return tasksAPI.getTaskById(idProject).then( (data) => {   
            if(data.status === 200){

                dispatch(setTasksAction (data.tasks));
                dispatch(setIdTasksAction (data.idTask));
            }
            else if(data.status === 404) dispatch(setEmpty(true)) 

            dispatch(setFetching(false))
        })
    }  
}


export const setBacklog = idProject => {
    return dispatch => {
        dispatch(setFetching(true))
        return tasksAPI.getBacklog(idProject).then( (data) => {   
            if(data.status === 200){
                if(!data.backlog) dispatch(setEmpty(true))
                
                dispatch(setBacklogAction (data.backlog));
                dispatch(setIdTasksAction (data.idTask));
            }
            else if(data.status === 404) dispatch(setEmpty(true)) 

            dispatch(setFetching(false))
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