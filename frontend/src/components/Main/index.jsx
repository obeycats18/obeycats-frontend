import React from 'react';

import { Switch, Route } from 'react-router-dom';

import {Header} from 'components/common';
import Home from './Home/container';
import Project from './Project/containers'
import CreateProject from './CreateProject/container'
import CreateTasks from './CreateTasks/container'



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
                    <Route exact path='/project' component={Project} />
                    <Route exact path='/project/add' component={CreateProject} />
                    <Route exact path='/tasks/add' component={CreateTasks} />
                </Switch>
            </div>
        </div>
    );
}


export default Main