import {teamsAPI} from 'api/teamsAPI'

let initialState = {
    teams: [],
    isFetching: false
}

const teamsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case "SET_TEAMS": {
            return {
                ...state,
                teams : action.teams    
            }
        }
        case "SET_FETCHING": {
            return {
                ...state,
                isFetching : action.isFetching    
            }
        }
        default: 
            return state
    }
}

export const setTeamsAction = (teams) => ({ type: "SET_TEAMS", teams }) 
export const setFetchingAction = (isFetching) => ({ type: "SET_FETCHING", isFetching }) 

export const getAllTeams = () => {
    return dispatch => {
        
        dispatch(setFetchingAction(true))
        return teamsAPI.getAllTeams().then( (data) => {
            if(data.status === 200) {
                dispatch(setTeamsAction(data.teams ))
            }
            dispatch(setFetchingAction(false))
        })


    }  
}

export const setTeams = () => {
    return dispatch => {
        
        dispatch(setFetchingAction(true))
        return teamsAPI.getTeams().then( (data) => {
            if(data.status === 200) {
                dispatch(setTeamsAction(data.teams ))
            }
            dispatch(setFetchingAction(false))
        })


    }  
}

export const createTeam = (values) => {
    return dispatch => {   
        return teamsAPI.createTeam(values).then( (data) => {
            if(data.status === 200) {
                dispatch(setTeams())
            }
        })
    }  
}

export default teamsReducer