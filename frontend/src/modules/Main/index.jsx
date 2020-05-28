import React, { useState }  from 'react';

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

import { Layout, Row, Col } from 'antd';

import './style.scss'

const { Sider, Content } = Layout;

const Main = () => {

    const [collapsed, setCollapsed] = useState(false)


    const collapseMenu = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div >
        <Layout style={{backgroundColor: '#F4F6FC'}}>
            <Header collapsed={collapsed} collapseMenu={collapseMenu}/>
            <Layout style={{backgroundColor: '#F4F6FC'}}>
                <Row style={{width: '100%', height: '100%'}}>
                    <Col xl={4} xxl={3} span={3}>
                        <Sider 
                            collapsedWidth={80}
                            trigger={null} 
                            breakpoint="xl"
                            collapsible 
                            collapsed={collapsed} 
                            width='100%' 
                            style={{height: "100%", backgroundColor: 'transparent'}} 
                            onBreakpoint={broken => {
                                broken
                                    ? setCollapsed(true)
                                    : setCollapsed(false)
                              }}
                        >
                            <Sidebar collapsed={collapsed}/>
                        </Sider>
                    </Col>
                    <Col xxl={21} xl={20} span={21}>
                        <Content
                            style={{
                                margin: '30px',
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
                                <Route exact path='/prtasks' render={() => <Tasks isDeveloper={true}/>} />
                                <Route exact path='/teams' component={Teams} />
                            </Switch>
                        </Content>
                    </Col>
                </Row>
               
                
            </Layout>
        </Layout>
        </div>
    );
};

export default Main;