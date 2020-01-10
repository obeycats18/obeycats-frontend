import React from 'react';
import Home from '../index';

import {connect} from 'react-redux'
import {compose} from 'redux'
import {getProjects} from 'redux/reducers/projects'
import { withRouter } from 'react-router';
// import Connection from 'hoc/Connection'


class HomeContainer extends React.Component{

    componentDidMount(){
        this.props.getProjects(this.props.history);
    }

    render() {
        return <Home isFetching={this.props.isFetching} data={this.props.projects}/>
    }

}

const mapStateToProps = (state) => {
    return {
        isFetching: state.projects.isFetching,
        projects: state.projects.projects
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {getProjects}),
    // Connection
    )(HomeContainer);