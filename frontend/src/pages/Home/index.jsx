import React from 'react';

import {Content} from 'components'
import {PMCreateProject} from 'components/Protected'

import {Projects} from 'modules'

import './style.scss'

const Home = () => {
    
    return (
            <Content style={{margin: "50px", height: "100%"}}>
                <div className="content-header">
                    <h3>Мои проекты</h3>
                    <div className="home-button">
                        <PMCreateProject isEmpty={false}/>
                    </div>
                    
                </div>
                <div className="home">
                    <Projects />
                </div>
            </Content>
    )
}


export default Home;