import React, { useEffect } from 'react';
import Home from '../index';

import {connect} from 'react-redux'
import {getProjects} from 'redux/reducers/projects'

class HomeContainer extends React.Component{

    componentDidMount(){
        this.props.getProjects();
    }

    render() {
        return <Home data={this.props.projects}/>
    }

}

const mapStateToProps = (state) => {
    return {
        projects: state.projects.projects
    }
}

export default connect(mapStateToProps, {getProjects})(HomeContainer);