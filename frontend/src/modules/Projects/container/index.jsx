import React, { useEffect } from 'react';

import Projects from '../index';

import {connect} from 'react-redux'
import {compose} from 'redux'
import { withRouter } from 'react-router';

import { ProjectDeveloper } from 'components/Protected';

import {getProjects} from 'redux/reducers/projects'

export default compose(
    withRouter,
    connect(  
        ({ projects, users}) => (
            {
                isFetching: projects.isFetching,
                projects: projects.projects,
                user: users.credentials
            }
        ), {getProjects})
)( (props) => {
    
    const {
        getProjects, 
        history,
        isFetching,
        projects,
        user
    } = props

    useEffect( () => {
        if(!projects.length) getProjects(history);
    }, [getProjects, history, projects])

    return (
        <>
            <ProjectDeveloper />
            <Projects 
                isFetching={isFetching} 
                data={projects} 
                user={user}
            />
        </>
    )
});