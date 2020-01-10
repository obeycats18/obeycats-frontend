import React from 'react';

import { Switch, Route } from 'react-router-dom';

import {HeaderCommon} from 'components/common';
import Home from './Home/container';
import Project from './Project/containers'
import CreateProject from './CreateProject/container'
import CreateTasks from './CreateTasks/container'
import CreateMilestone from './CreateMilestone/index'


import { Layout } from 'antd';

import {Sidebar} from 'components/common';

import './style.scss' 

const { Sider, Content } = Layout;

const Main = () => {

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
    );
}


export default Main