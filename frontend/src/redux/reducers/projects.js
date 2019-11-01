import {projectAPI} from 'api/projectAPI'

import { openNotification } from 'helpers/openNotifcation';

const SET_PROJECT = "SET_PROJECT";
const SET_PROJECT_ID = "SET_PROJECT_ID";
const SET_PROJECT_STATUS = "SET_PROJECT_STATUS";


let initialState = {
    idProject: '',
    projects: [],
    statusCreating: null
}

const projectReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_PROJECT: {
            return {
                ...state,
                projects : action.projects     
            }
        }
        case SET_PROJECT_ID: {
            return {
                ...state, 
                idProject: action.id
            }
        }
        case SET_PROJECT_STATUS: {
            return {
                ...state, 
                statusCreating: action.status
            }
        }
        default: 
            return state
    }
}

export const setProject = (projects) => ({ type: SET_PROJECT, projects })
export const setProjectId = (id) => ({ type: SET_PROJECT_ID, id })
export const setProjectStatus = (status) => ({ type: SET_PROJECT_STATUS, status })



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


export let createProject = (values) => {
    return dispatch => {
        return projectAPI.addProjects(values).then( (data) => {   
            if(data.status === 200){
                dispatch(setProjectId(data.id))
                
            }
            if(data.status === 409){  
                openNotification('error', 'Такой проект уже существует', 'Введите другое название')
            }
            return data
        })
        .catch( err => {    
            console.log(err);
        } )
    }
    
}

export let createMilestone = (values) => {
    return dispatch => {
        return projectAPI.addMilestone(values).then( (data) => {   
            if(data.status === 200){
                projectAPI.saveProject( {idProject: values.idProject, idMilestone: data.id} ).then( (data) => {   
                    if(data.status === 200){
                        console.log(data.message);
                    }
                })
                .catch( err => {                  
                    console.log(err);
                } )
            }
            if(data.status === 409){
                openNotification('error', 'Такой этап уже существует', 'Введите другое название')
            }

            return data
        })
        .catch( err => {console.log(err);
        } )
    } 
}


export default projectReducer