import React, { Component } from 'react';

import Project from '../index'
import {compose} from 'redux'
import {connect} from 'react-redux'

import { withRouter } from 'react-router-dom';
import {getProject} from 'redux/reducers/projects'
import { ProjectClient, ProjectPM, ProjectDeveloper } from 'components/Protected';


class ProjectContainer extends Component {

    id = this.props.location.search.split('=')[1]

    componentDidMount(){
        this.props.getProject(this.id);
    }

    render() {
        return (
           <>
                <ProjectClient {...this.props}/>
                <ProjectPM {...this.props}/>
                <ProjectDeveloper {...this.props}/>
           </>
        );
    }
}

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
)(ProjectContainer);