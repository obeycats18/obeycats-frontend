import React from 'react' 

import CreateMilestone from '../index'

import {connect} from 'react-redux'
import {compose} from 'redux'
import {withFormik} from 'formik'
import {withRouter} from 'react-router-dom'

import {editProject} from 'redux/reducers/projects'


const CreateMilestoneContainer = props => {
    return <CreateMilestone {...props}/>
}


const mapStateToProps = ({projects, sprints}) => {
    
    return { 
        idProject: projects.idProject,
        idMilestone: sprints.idMilestones
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {
        editProject
    }),
    withFormik({
        handleSubmit: ( values, {setSubmitting, props}) => {
            setSubmitting(true)
            props.editProject({idProject: props.idProject, idMilestone: props.idMilestone}).then(data => {
                setSubmitting(false)
                props.history.push(`/project?id=${props.idProject}`)
            })
        }
    })
    
)(CreateMilestoneContainer)