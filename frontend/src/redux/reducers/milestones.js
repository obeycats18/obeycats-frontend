import {milestoneAPI} from 'api/milestonesAPI'

import {setTasksAction} from './tasks'

import { openNotification } from 'helpers/openNotifcation';

let initialState = {
    sprints: [],
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
        default: 
            return state
    }
}

export const setFetching = (isFetching) => ({ type: "SET_FETCHING", isFetching }) 
export const setSprints = (sprints) => ({ type: 'SET_SPRINTS', sprints })

export const fetchSprints = (idProject) => {
    return dispatch => {
        // dispatch(setFetching(true))
        return milestoneAPI.getMilestones(idProject).then( data => {   
            if(data.status === 200){
                dispatch(setSprints( data.milestones.milestones ) );
                // dispatch(setFetching(false))
            }
        })
        .catch( err => {console.log(err);
        } )
    }  
}

export const changeSprint = (sprint) => {
    return dispatch => {
        dispatch(setSprints(sprint) );
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
            dispatch(setTasksAction( data.tasks.tasks) );
            dispatch(setFetching(false))

        })
        .catch( err => {console.log(err);
        } )
    }
}

export default sprintsReducer