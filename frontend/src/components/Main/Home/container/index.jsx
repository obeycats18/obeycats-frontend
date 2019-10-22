import React, { useEffect } from 'react';
import Home from '../index';

import {connect} from 'react-redux'
import {getProjects} from 'redux/reducers/projects'

const HomeContainer = props => {

    const {getProjects, projects} = props;

    useEffect( () => {
        
        getProjects()
    }, [])
    
    
    return (
        <Home data={projects}/>
    );
};

const mapStateToProps = (state) => {
    return {
        projects: state.projects.projects
    }
}

export default connect(mapStateToProps, {getProjects})(HomeContainer);