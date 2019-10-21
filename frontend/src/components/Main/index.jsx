import React from 'react';

import { Switch, Route } from 'react-router-dom';

import {Header} from 'components/common';
import Home from './Home';

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
                </Switch>
            </div>
        </div>
    );
};

export default Main;