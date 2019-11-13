import React, { Component } from 'react';

import Project from '../index'

class ProjectContainer extends Component {

    id = this.props.location.search.split('=')[1]
 

    componentDidMount(){
        this.props.getProject(this.id);
    }

    render() {
        return (
            <Project isFetching={this.props.isFetching} project={this.props.project}/>
        );
    }
}

export default ProjectContainer;