import {boardsAPI} from 'api/boardsAPI'

let initialState = {
    boards: [],
    isFetching: false
}

const boardsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case "SET_BOARDS": {
            return {
                ...state,
                boards : action.boards    
            }
        }
        case "REORDER_TASK_IN_BOARD": {
            return {
                ...state,
                boards : state.boards.map(board => {
                    console.log(board._id === action.value.idBoard)
                    if(board._id === action.value.idBoard){
                        return {
                            ...board,
                            tasks: action.value.tasks
                        }
                    }
                    return { ...board }    
                })
            }
        }
        default: 
            return state
    }
}

export const setBoardsAction = (boards) => ({ type: "SET_BOARDS", boards }) 
export const reorderTasksInBoardAction = (tasks, idBoard) => ({ type: "REORDER_TASK_IN_BOARD", value: {idBoard, tasks} }) 

export const setFetchingAction = (isFetching) => ({ type: "SET_FETCHING", isFetching }) 

export const getBoards = (idProject) => {
    return dispatch => {        
        dispatch(setFetchingAction(true))
        return boardsAPI.getBoards(idProject).then( (data) => {
            if(data.status === 200) {
                dispatch(setBoardsAction(data.boards.boards ))
            }
            dispatch(setFetchingAction(false))
        })
    }  
}

export const reorderTaskInBoard = (idBoard, tasks) => {
    return dispatch => {        
        dispatch(reorderTaskInBoard(idBoard, tasks))
    }  
}

export const replaceTask = (value) => {
    return dispatch => {        
        boardsAPI.replaceTask(value).then(data => {
            if(data.status === 200){
                dispatch(setBoardsAction(data.boards.boards))
            }
        })
    }  
}

export const initBoards = (idProject) => {
    return dispatch => {        
        boardsAPI.initBoards(idProject)
    }  
}


export const initTasksBoards = (idProject) => {
    return dispatch => {        
       return boardsAPI.initTasksBoards(idProject).then(data => data)
    }  
}

export default boardsReducer