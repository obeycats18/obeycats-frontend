import React, { useEffect } from 'react';

import Projects from '../index';

import {connect} from 'react-redux'
import {compose} from 'redux'
import { withRouter } from 'react-router';

import {getProjects} from 'redux/reducers/projects'

export default compose(
    withRouter,
    connect(  
        ({ projects}) => (
            {
                isFetching: projects.isFetching,
                projects: projects.projects,
            }
        ), {getProjects})
)( (props) => {
    
    const {
        getProjects, 
        history,
        isFetching,
        projects,
    } = props

    useEffect( () => {
        getProjects(history);
    }, [])

    return (
       
        <Projects 
            isFetching={isFetching} 
            projects={projects} 
        />
    )
});