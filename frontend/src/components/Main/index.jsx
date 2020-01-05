import React, {useState} from 'react';

import { Switch, Route } from 'react-router-dom';

import {HeaderCommon} from 'components/common';
import Home from './Home/container';
import Project from './Project/containers'
import CreateProject from './CreateProject/container'
import CreateTasks from './CreateTasks/container'
import CreateMilestone from './CreateMilestone/index'


import { Layout, Menu, Icon } from 'antd';

import {Sidebar} from 'components/common';

import './style.scss' 

const { Header, Sider, Content } = Layout;

const Main = () => {

    const [collapsed, setCollapsed] = useState()

    const toggle = () => {
        setCollapsed({collapsed: !this.state.collapsed})    
    };

    return (

        <Layout style={{backgroundColor: '#F4F6FC'}}>
            <HeaderCommon />
            <Layout  style={{backgroundColor: '#F4F6FC'}}>
                <Sider width={250} style={{backgroundColor: 'transparent'}} >
                    <Sidebar />
                </Sider>
                <Content
                    style={{
                    margin: '24px 16px',
                    // background: 'transparent',
                    minHeight: 280,
                    }}
                >
                    <Switch>
                        <Route exact path={["/", "/home"]} component={Home}/>
                        <Route exact path='/project' component={Project} />
                        <Route exact path='/project/add' component={CreateProject} />
                        <Route exact path='/tasks/add' component={CreateTasks} />
                        <Route exact path='/milestones/add' component={CreateMilestone} />
                     </Switch>
                </Content>
            </Layout>
        </Layout>

        // <div className='main'>
        //     <div className='main-header'>
        //         <Header/>
        //     </div>
        //     <div className='main-content'>
        //         <Switch>
        //             <Route exact path={["/", "/home"]} component={Home}/>
        //             <Route exact path='/project' component={Project} />
        //             <Route exact path='/project/add' component={CreateProject} />
        //             <Route exact path='/tasks/add' component={CreateTasks} />
        //             <Route exact path='/milestones/add' component={CreateMilestone} />
        //         </Switch>
        //     </div>
        // </div>
    );
}


export default Main