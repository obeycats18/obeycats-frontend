import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Login from './Login'
import './style.scss'

const Auth = () => {
    return (
        // router 
        <div className="auth">
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/registration' render={ () => 'Registration' }/>
            </Switch>
            
        </div>
    );
};

export default Auth;