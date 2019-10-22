import {projectAPI} from 'api/projectAPI'

const SET_PROJECT = "SET_PROJECT";

let initialState = {
    projects: []
}

const projectReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_PROJECT: {
            return {
                ...state,
                projects : action.projects     
            }
        }
        default: 
            return state
    }
}

export const setProject = (projects) => ({ type: SET_PROJECT, projects })


export let getProjects = () => {
    return dispatch => {
        return projectAPI.getAllProjects().then( (data) => {   
            if(data.status === 200){
                dispatch(setProject (data.project) );
            }
            if(data.status === 404){
                console.log('Not Found')
            }
        })
        .catch( err => {console.log(err);
        } )
    }  
}


export default projectReducer