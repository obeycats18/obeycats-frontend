import React, { Component } from 'react';

import Project from '../index'
import {compose} from 'redux'
import {connect} from 'react-redux'

import { withRouter } from 'react-router-dom';
import {getProject} from 'redux/reducers/projects'


class ProjectContainer extends Component {

    id = this.props.location.search.split('=')[1]
 

    componentDidMount(){
        this.props.getProject(this.id);
    }

    render() {
        return (
            <Project {...this.props}/>
            // isFetching={this.props.isFetching} project={this.props.project}
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.projects.isFetching,
        project: state.projects.project,
        milestones: state.projects.milestones
    }
}

export default compose(
    connect (mapStateToProps, {getProject}),
    withRouter
)(ProjectContainer);