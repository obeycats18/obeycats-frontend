import React from 'react' 

import TasksForm from '../index'

import {connect} from 'react-redux'
import {compose} from 'redux'
import {withFormik} from 'formik'

import {fetchUsers} from 'redux/reducers/users'
import {setTasks} from 'redux/reducers/tasks'

import {reduce} from 'lodash'

//import {projectSchema} from '../../CreateProject/validation'

class PopupCreate extends React.Component {

    render() {
       return <TasksForm {...this.props}/>
    }
}

const mapStateToProps = ({users, projects, tasks}) => {
    return {
        users: users.users, 
        idProject: projects.idProject,
    }
}

export default compose(
    connect(mapStateToProps, {
        fetchUsers,
        setTasks,
    }),
    withFormik({
        // mapPropsToValues: (props) => ({
        //     idProject: props.idProject
        // }),
    
        // validationSchema: projectSchema,
    
        handleSubmit: ( values, {setSubmitting, props}) => {
            // console.log(values)
            let buttonName = values.buttonName
            if(buttonName === 'create'){
                // console.log()
                let postData = values.tasks.map(item => {
                    return reduce(item, (result, value, key) => {
                        if(key !== '_id' && value !== '' && value !== null){
                            // console.log(key)
                            result[key] = value
                        }
                        return result
                    }, {})
                })
                console.log('postdata',postData)
                props.addTasks(postData).then( (data) => {
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