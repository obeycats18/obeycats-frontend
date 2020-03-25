import React from 'react' 

import TasksForm from '../index'

import {connect} from 'react-redux'
import {compose} from 'redux'
import {withFormik} from 'formik'
import {withRouter} from 'react-router-dom'

import {fetchUsers} from 'redux/reducers/users'
import {fetchAddTask} from 'redux/reducers/tasks'

import {reduce} from 'lodash'

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
            let buttonName = values.buttonName

            switch(buttonName) {

                case 'create' : 
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
                break

                case 'cancle' : props.history.push('/')
                break

                default: props.history.push('/')
                    
            }
        }
    })
    
)( (props) => <TasksForm {...props}/>)