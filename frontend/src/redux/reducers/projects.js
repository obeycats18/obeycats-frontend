import {projectAPI} from 'api/projectAPI'

import { openNotification } from 'helpers/openNotifcation';

const SET_PROJECTS = "SET_PROJECTS";
const SET_PROJECT = "SET_PROJECT";

const SET_PROJECT_ID = "SET_PROJECT_ID";
const SET_FETCHING_STATUS = "SET_FETCHING_STATUS";
const UPDATE_PROJECTS_ARRAY = "UPDATE_PROJECTS_ARRAY";



let initialState = {
    idProject: '',
    projects: [],
    project: [],
    isFetching: false
}

const projectReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_PROJECTS: {
            return {
                ...state,
                projects : action.projects     
            }
        }
        case SET_PROJECT: {
            return {
                ...state,
                project : action.project     
            }
        }
        case SET_PROJECT_ID: {
            return {
                ...state, 
                idProject: action.id
            }
        }
        case SET_FETCHING_STATUS: {
            return {
                ...state, 
                isFetching: action.status
            }
        }
        case UPDATE_PROJECTS_ARRAY: {
            return {
                ...state, 
                projects: state.projects.filter((item) => action.id !== item._id)
            }
        }
        
        default: 
            return state
    }
}

export const setProjects = (projects) => ({ type: SET_PROJECTS, projects })
export const setProject = (project) => ({ type: SET_PROJECT, project })

export const setProjectId = (id) => ({ type: SET_PROJECT_ID, id })
export const setFetchingStatus = (status) => ({ type: SET_FETCHING_STATUS, status })
export const updateProjectsArray = (id) => ({ type: UPDATE_PROJECTS_ARRAY, id })


export let getProject = (id) => {
    return dispatch => {
        dispatch(setFetchingStatus(true))
        return projectAPI.getProject(id).then( (data) => {
            dispatch(setProject(data.project));
            dispatch(setFetchingStatus(false))
        })
        
    }  
}

export let getProjects = () => {
    return dispatch => {
        dispatch(setFetchingStatus(true));
        return projectAPI.getAllProjects().then( (data) => {   
            if(data.status === 200){
                dispatch(setFetchingStatus(false));
                dispatch(setProjects (data.project) );
            }
            if(data.status === 404){
                dispatch(setFetchingStatus(false));
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

export let deleteProject = (id) => {
    return dispatch => {
        return projectAPI.deleteProject(id).then( (data) => {   
            if(data.status === 200){
                dispatch(updateProjectsArray(id))
            }
            if(data.status === 404){
                openNotification('error', 'Проект не найдет', '')
            }

            return data
        })
        .catch( err => {console.log(err);
        } )
    } 
}


export default projectReducer