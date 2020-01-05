import React from 'react' 

import PopupCreateForm from '../index'

import {connect} from 'react-redux'
import {compose} from 'redux'
import {withRouter} from 'react-router-dom'
import {withFormik} from 'formik'

import {fetchUsers} from 'redux/reducers/users'
import {createProject, deleteProject} from 'redux/reducers/projects'

import {projectSchema} from '../validation'

class CreateProject extends React.Component {

    componentDidMount(){
        this.props.fetchUsers()
    }
    render() {
        return (
            <PopupCreateForm {...this.props}/>
        )
    }
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
        mapPropsToValues: (props) => ({
            idProject: props.idProject
        }),
    
        validationSchema: projectSchema,
    
        handleSubmit: ( values, {setSubmitting, props}) => {
            let buttonName = values.buttonName
            console.log(values)
            if(buttonName === 'next'){
                props.createProject(values).then( (status) => {
                    setSubmitting(false)
                    if(status === 200){
                        props.history.push('/tasks/add')
                    }
                })
                
            }   
                
            if(buttonName === 'create'){
                props.createProject(values).then( (status) => {
                    setSubmitting(false)
                    if(status === 200) {
                        setInterval( () => props.history.push('/'), 4000)
                    }
                })
                
            }

            if(buttonName === 'cancle'){
                //todo обратно на главную стр
                // props.showModal(false);
            } 
        }
    })
    
)(CreateProject)