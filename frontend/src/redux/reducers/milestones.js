import {milestoneAPI} from 'api/milestonesAPI'

import { openNotification } from 'helpers/openNotifcation';

let initialState = {
    sprints: []
}

const sprintsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'SET_SPRINTS' : 
            return {
                ...state,
                sprints: action.sprints
            }
        default: 
            return state
    }
}

export const setSprints = (sprints) => ({ type: 'SET_SPRINTS', sprints })

export const fetchSprints = (idProject) => {
    return dispatch => {
        return milestoneAPI.getMilestones(idProject).then( data => {   
            if(data.status === 200){
                dispatch(setSprints( data.milestones.milestones ) );
            }
        })
        .catch( err => {console.log(err);
        } )
    }  
}

export const addSprints = value => {
    
    console.log('here')
    return milestoneAPI.addMilestone(value).then( (data) => {   
        if(data.status === 200){
            openNotification('success', 'Успешно', 'Sprint успешно создан')
            // dispatch(setSprints( data.milestones ) );
        }
    })
    .catch( err => {console.log(err);
    } )
    
    // return dispatch => {
       
    // }  
}

export default sprintsReducer