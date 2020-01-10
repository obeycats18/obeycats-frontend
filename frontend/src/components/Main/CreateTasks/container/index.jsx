import React from 'react' 

import TasksForm from '../index'

import {connect} from 'react-redux'
import {compose} from 'redux'
import {withFormik} from 'formik'
import {withRouter} from 'react-router-dom'

import {fetchUsers} from 'redux/reducers/users'
import {fetchAddTask} from 'redux/reducers/tasks'

import {reduce} from 'lodash'

const PopupCreate = props => {
    return <TasksForm {...props}/>
}


const mapStateToProps = ({users, projects}) => {
    
    return {
        users: users.users, 
        idProject: projects.idProject,
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {
        fetchUsers,
        fetchAddTask,
    }),
    withFormik({
    
        handleSubmit: ( values, {setSubmitting, props}) => {
            console.log(values)
            let buttonName = values.buttonName
            if(buttonName === 'create'){
                let postData = {}
                postData.tasks = values.tasks.map(item => {
                    return reduce(item, (result, value, key) => {
                        if(key !== '_id' && value !== '' && value !== null){
                            result[key] = value
                        }
                        return result
                    }, {})
                })

                postData.idProject = props.idProject

                props.fetchAddTask(postData).then( data => {
                    setSubmitting(false)
                    if(data.status === 200){
                        props.history.push('/milestones/add')
                    }
                })
            }
           
            // if(buttonName === 'cancle'){
            //     props.deleteProject( values.idProject).then( (data) => {
            //     if(data.status === 200){
            //         console.log('success')
            //         setTimeout( () => props.showModal(false), 1000)
            //         }
            //     })
            // }
        }
    })
    
)(PopupCreate)