import React from 'react';

import {compose} from 'redux'
import {connect} from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom';

import {Header} from 'components/common';
import Home from './Home/container';
import Project from './Project/containers'

import {getProject} from 'redux/reducers/projects'
import './style.scss'

const Main = props => {
    return (
        <div className='main'>
            <div className='main-header'>
                <Header/>
            </div>
            <div className='main-content'>
                <Switch>
                    <Route exact path={["/", "/home"]} component={Home}/>
                    <Route exact path='/project' render={ () => <Project {...props} />}/>
                </Switch>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.projects.isFetching,
        project: state.projects.project
    }
}

export default compose(
    connect (mapStateToProps, {getProject}),
    withRouter
     
)(Main)