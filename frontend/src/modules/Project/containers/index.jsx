import React, { useEffect }  from 'react';

import {compose} from 'redux'
import {connect} from 'react-redux'

import { withRouter } from 'react-router-dom';
import {getProject} from 'redux/reducers/projects'
import { ProjectClient, ProjectPM, ProjectDeveloper } from 'components/Protected'; 

const mapStateToProps = ({projects}) => {
    return {
        isFetching: projects.isFetching,
        project: projects.project,
        milestones: projects.milestones
    }
}

export default compose(
    connect (mapStateToProps, {getProject}),
    withRouter
)( (props) =>  {

    const {
        location,
        getProject,
        project
    } = props

    let id = location.search.split('=')[1]

    useEffect( () => {
        if(!project) getProject(id)
    }, [getProject, id, project])

    return (
        <>
             <ProjectClient {...props}/>
             <ProjectPM {...props}/>
             <ProjectDeveloper {...props}/>
        </>
     )
});