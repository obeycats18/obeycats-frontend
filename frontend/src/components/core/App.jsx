import React from 'react';

import {connect} from 'react-redux'

import {Autherization} from 'pages'
import {Main} from 'pages';


const App = props => {

  // const {isAuth} = props;  

  return (
    <div className="app">
      
      {
        (window.localStorage.getItem('token')) 
          ? <Main/>
          : <Autherization/>
      }
      
    </div>
    
  );
}

export default connect( ({ auth }) => ({ isAuth: auth.isAuth }) )(App);
