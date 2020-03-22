import React from 'react';

import {Auth} from 'pages'
import {Main} from 'modules'

import {Route, Redirect, Switch} from 'react-router-dom'

import Connection from 'hoc/Connection'

const App = () => {

  return (
    <div className="app">
      <Switch>
        <Route exact path={[
            '/', 
            '/home', 
            '/project', 
            '/project/add', 
            '/tasks/add', 
            '/milestones/add', 
            '/boards',
            '/prtasks',
            '/teams'
          ]} render={ 
            () => (window.localStorage.getItem('token')) ? <Main /> : <Redirect to='/login'/>
          }/>
        <Route exact path={['/login', '/registration', '/registration/success']} render={ 
            () => (window.localStorage.getItem('token')) ? <Redirect to='/'/> : <Auth/>
          }/>     
      </Switch>
    </div>
    
  );
}

export default Connection(App)
