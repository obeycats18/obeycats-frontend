import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'components/Header/containers';
import Home from './Home/container';
import Project from './Project/containers'
import CreateProject from './CreateProject/container'
import CreateTasks from './CreateTasks/container'
import CreateMilestone from './CreateMilestone/container'
import Boards from './Boards'
import Tasks from './Tasks'



import { Layout } from 'antd';

import Sidebar from 'components/Sidebar';

import './style.scss' 

const { Sider, Content } = Layout;

const Main = props => {

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
                    minHeight: 280,
                    }}
                >
                    <Switch>
                        <Route exact path={["/", "/home"]} component={Home}/>
                        <Route exact path='/project' component={Project} />
                        <Route exact path='/project/add' component={CreateProject} />
                        <Route exact path='/tasks/add' component={CreateTasks} />
                        <Route exact path='/milestones/add' component={CreateMilestone} />
                        <Route exact path='/boards' component={Boards} />
                        <Route exact path='/prtasks' component={Tasks} />
                     </Switch>
                </Content>
            </Layout>
        </Layout>
    );
}


export default Main