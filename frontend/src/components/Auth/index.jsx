import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Login from './Login/containers/index'
import './style.scss'
import Registration from './Registration';

const Auth = () => {
    return (
        // router 
        <div className="auth">
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/registration' component={Registration}/>
            </Switch>
            
        </div>
    );
};

export default Auth;