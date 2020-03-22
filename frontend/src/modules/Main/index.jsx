import React from 'react';

import { Switch, Route } from 'react-router-dom';

import {Header, Sidebar} from 'modules';
import {Home, Project} from 'pages';
// import Project from './Project/containers'
// import CreateProject from './CreateProject/container'
// import CreateTasks from './CreateTasks/container'
// import CreateMilestone from './CreateMilestone/container'
// import Boards from './Boards'
// import Tasks from './Tasks/container'
// import Teams from './Teams/container'

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
                        margin: '24px 16px',
                        minHeight: "100%",
                        overflowX: "initial"
                    }}
                >
                    <Switch>
                        <Route exact path={["/", "/home"]} component={Home}/>
                        <Route exact path='/project' component={Project} />
                         {/* <Route exact path='/project/add' component={CreateProject} />
                        <Route exact path='/tasks/add' component={CreateTasks} />
                        <Route exact path='/milestones/add' component={CreateMilestone} />
                        <Route exact path='/boards' component={Boards} />
                        <Route exact path='/teams' component={Teams} />
                        <Route exact path='/prtasks' component={Tasks} /> */}
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Main;