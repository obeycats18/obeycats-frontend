import {milestoneAPI} from 'api/milestonesAPI'

import {setBacklog} from './tasks'
import { openNotification } from 'helpers/openNotifcation';

let initialState = {
    sprints: [],
    idMilestones: '',
    isFetching: false
}

const sprintsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'SET_SPRINTS' : 
            return {
                ...state,
                sprints: action.sprints
            }
        case 'SET_FETCHING' : 
            return {
                ...state,
                isFetching: action.isFetching
            }
        case 'SET_ID_SPRINTS' : 
            return {
                ...state,
                idMilestones: action.idMilestone
            }
        case 'CHANGE_SPRINT_TASKS' : 
            return {
                ...state,
                sprints: state.sprints.map(sprint => {
                    if(sprint._id === action.value.idSprint){
                        return {
                            ...sprint,
                            tasks: action.value.tasks
                        }
                    }
                    return {
                        ...sprint
                    }
                })
            }
        default: 
            return state
    }
}

export const setFetching = (isFetching) => ({ type: "SET_FETCHING", isFetching }) 
export const setSprints = (sprints) => ({ type: 'SET_SPRINTS', sprints })
export const setIdMilestones = (idMilestone) => ({ type: 'SET_ID_SPRINTS', idMilestone })
export const changeSprintTasks = (idSprint, tasks) => ({ type: 'CHANGE_SPRINT_TASKS', value: {idSprint, tasks} } )

export const fetchSprints = (idProject) => {
    return dispatch => {
        dispatch(setFetching(true))
        return milestoneAPI.getMilestones(idProject).then( data => {   
            if(data.status === 200){
                dispatch(setSprints( data.milestones ) );
                dispatch(setIdMilestones(data.idMilestone))
            }
            dispatch(setFetching(false))
        })
        .catch( err => {console.log(err);
        } )
    }  
}

export const changeSprint = (idSprint, task) => {
    return dispatch => {
        dispatch(changeSprintTasks(idSprint, task) );
    }
}

export const addSprints = value => {
    return dispatch => {
        return milestoneAPI.addMilestone(value).then( (data) => {   
            if(data.status === 200){
                openNotification('success', 'Успешно', 'Sprint успешно создан')
                dispatch(setSprints( data.milestones.milestones) );
            }
        })
        .catch( err => {console.log(err);
        } )
    }
}

export const editSprints = value => {
    return dispatch => {
        dispatch(setFetching(true))
        return milestoneAPI.editMilestone(value).then( (data) => {
            dispatch(setSprints( data.milestones.milestones) );
            dispatch(setBacklog(value.idProject))
            dispatch(setFetching(false))
        })
        .catch( err => {console.log(err);
        } )
    }
}

export default sprintsReducer