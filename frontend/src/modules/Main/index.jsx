import React from 'react';

import { Switch, Route } from 'react-router-dom';

import {Header, Sidebar} from 'modules';
import {
    Home, 
    Project, 
    CreateProject, 
    CreateTasks, 
    CreateMilestones,
    Tasks,
    Teams
} from 'pages';

import { Layout } from 'antd';

import './style.scss'

const { Sider, Content } = Layout;

const Main = () => {
    return (
        <Layout style={{backgroundColor: '#F4F6FC'}}>
            <Header />
            <Layout style={{backgroundColor: '#F4F6FC'}}>
                <Sider width={250} style={{backgroundColor: 'transparent'}} >
                    <Sidebar />
                </Sider>
                <Content
                    style={{
                        margin: '24px 16px 0 16px',
                        minHeight: "100%",
                        overflowX: "initial"
                    }}
                >
                    <Switch>
                        <Route exact path={["/", "/home"]} component={Home}/>
                        <Route exact path='/project' component={Project} />
                        <Route exact path='/project/add' component={CreateProject} />
                        <Route exact path='/tasks/add' component={CreateTasks} />
                        <Route exact path='/milestones/add' component={CreateMilestones} />
                        <Route exact path='/prtasks' component={Tasks} />
                        <Route exact path='/teams' component={Teams} />
                        
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Main;