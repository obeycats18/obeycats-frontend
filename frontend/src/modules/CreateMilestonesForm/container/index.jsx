import React from 'react' 

import CreateMilestone from '../index'

import {connect} from 'react-redux'
import {compose} from 'redux'
import {withFormik} from 'formik'
import {withRouter} from 'react-router-dom'

import {editProject} from 'redux/reducers/projects'
import {initTasksBoards} from 'redux/reducers/boards'

const mapStateToProps = ({projects, sprints}) => {
    
    return { 
        idProject: projects.idProject,
        idMilestone: sprints.idMilestones
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {
        editProject,
        initTasksBoards
    }),
    withFormik({
        handleSubmit: ( values, {setSubmitting, props}) => {
            setSubmitting(true)
            props.editProject({idProject: props.idProject, idMilestone: props.idMilestone}).then(data => {
                props.initTasksBoards(props.idProject).then(data => {
                    if(data.status === 200){
                        setSubmitting(false)
                        props.history.push(`/project?id=${props.idProject}`)
                    }
                })
            })
        }
    })
    
)(props => {
    return <CreateMilestone {...props}/>
})