import React from 'react';

import { Switch, Route } from 'react-router-dom';

import {Header} from 'components/common';
import Home from './Home/container';
import Project from './Project'

import './style.scss'
const Main = () => {
    return (
        <div className='main'>
            <div className='main-header'>
                <Header/>
            </div>
            <div className='main-content'>
                <Switch>
                    <Route exact path={["/", "/home"]} component={Home}/>
                    <Route exact path='/project' component={Project}/>
                </Switch>
            </div>
        </div>
    );
};

export default Main;