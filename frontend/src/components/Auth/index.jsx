import React from 'react';
import {Switch, Route} from 'react-router-dom'

import './style.scss'

import Login from './Login/containers/index'
import Registration from './Registration/containers';
import RegistrationSuccess from './RegistrationSuccess';

const Auth = () => {
    return (
        <div className="auth">
            <Switch>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/registration' component={Registration}/>
                <Route exact path='/registration/success' component={RegistrationSuccess}/>
            </Switch>
            
        </div>
    );
};

export default Auth;