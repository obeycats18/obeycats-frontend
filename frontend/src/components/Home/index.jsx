import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Header from './Header';

const Home = () => {
    return (
        <div className='home'>
            <Header/>
         
            <Switch>
                <Route exact path={["/", "/home"]} render={()=>{ return <div>Home page</div>}}/>
            </Switch>
        </div>
    );
};

export default Home;