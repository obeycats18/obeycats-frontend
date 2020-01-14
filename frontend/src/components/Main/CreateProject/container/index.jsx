import React from 'react' 

import PopupCreateForm from '../index'

import {connect} from 'react-redux'
import {compose} from 'redux'
import {withRouter} from 'react-router-dom'
import {withFormik} from 'formik'

import {fetchUsers} from 'redux/reducers/users'
import {createProject, deleteProject} from 'redux/reducers/projects'

import {projectSchema} from '../validation'
import { useEffect } from 'react'

const CreateProject = props => {

    useEffect(() => {
        props.fetchUsers()
    }, [fetchUsers, props.users.lenght])
    return (
        <PopupCreateForm {...props}/>
    )
}

const mapStateToProps = ({users, projects}) => {
    return {
        users: users.users, 
        idProject: projects.idProject, 
        statusCreating: projects.statusCreating
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {
        fetchUsers, 
        createProject, 
        deleteProject
    }),
    withFormik({
    
        validationSchema: projectSchema,
    
        handleSubmit: ( values, {setSubmitting, props}) => {
            let buttonName = values.buttonName
            console.log(values)

            switch(buttonName) {
                case 'next' : 
                    props.createProject(values).then( (status) => {
                        setSubmitting(false)
                        if(status === 200){
                            props.history.push('/tasks/add')
                        }
                    })
                break

                case 'create' : 
                    props.createProject(values).then( (status) => {
                        setSubmitting(false)
                        if(status === 200) {
                            setInterval( () => props.history.push('/'), 4000)
                        }
                    })
                break

                case 'cancle' : props.history.push('/')
                break

                default: props.history.push('/')
                    
            }
        }
    })
    
)(CreateProject)