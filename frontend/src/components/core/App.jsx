import React from 'react';

import {connect} from 'react-redux'

import {Autherization, Main } from 'pages'

import {Route, Redirect, Switch} from 'react-router-dom'


const App = props => {

  const {isAuth} = window.localStorage.token || '';  

  return (
    <div className="app">
      <Switch>
        <Route exact path={['/', '/home', '/project', '/project/add', '/tasks/add']} render={ () => (window.localStorage.getItem('token')) ? <Main /> : <Redirect to='/login'/>}/>
        <Route exact path={['/login', '/registration', '/registration/success']} render={ () => (window.localStorage.getItem('token')) ? <Redirect to='/'/> : <Autherization/>}/>     
      </Switch>
    </div>
    
  );
}

export default connect( (state) => ({ isAuth: state.auth.isAuth }) )(App);
