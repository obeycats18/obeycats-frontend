import React from 'react';

import {connect} from 'react-redux'

import Autherization from 'pages/Authorization'


const App = props => {

  const {isAuth} = props;  

  return (
    <div className="app">
      
      {
        (isAuth) 
          ? <div>Authorized!</div>
          : <Autherization/>
      }
      
    </div>
    
  );
}

export default connect( ({ auth }) => ({ isAuth: auth.isAuth }) )(App);
