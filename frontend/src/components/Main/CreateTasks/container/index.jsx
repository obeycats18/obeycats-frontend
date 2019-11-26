import React from 'react' 

import TasksForm from '../index'

import {connect} from 'react-redux'
import {compose} from 'redux'
import {withFormik} from 'formik'

import {fetchUsers} from 'redux/reducers/users'

import {projectSchema} from '../../CreateProject/validation'

class PopupCreate extends React.Component {

    componentDidMount(){
        this.props.fetchUsers()
    }

    render() {
       return <TasksForm />
    }
}

const mapStateToProps = ({users, projects}) => {
    return {
        users: users.users, 
        idProject: projects.idProject
    }
}

export default compose(
    connect(mapStateToProps, {
        fetchUsers
    }),
    withFormik({
        mapPropsToValues: (props) => ({
            idProject: props.idProject
        }),
    
        validationSchema: projectSchema,
    
        handleSubmit: ( values, {setSubmitting, props}) => {
            let buttonName = values.buttonName
            if(buttonName === 'finish'){
                props.createMilestone(values).then( (data) => {
                    setSubmitting(false)
                    if(data.status === 200){
                        props.switchModal(3)
                        setTimeout( () => props.showModal(false), 4000)
                    }
                })
            }
           

            if(buttonName === 'cancle'){
                props.deleteProject( values.idProject).then( (data) => {
                if(data.status === 200){
                    console.log('success')
                    setTimeout( () => props.showModal(false), 1000)
                    }
                })
            }
        }
    })
    
)(PopupCreate)