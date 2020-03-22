import React from 'react';

import {Content, Button} from 'components/common'

import { Tabs, List, Avatar, Typography} from 'antd';

import './style.scss'

const { TabPane } = Tabs;
const { Title } = Typography;

const Teams = props => {
    const {teams, isFetching} = props
    let renderTab = teams.map(team => {
        return (
            <TabPane tab={team.name} key={team._id}>
                <List
                    itemLayout="horizontal"
                    dataSource={team.members}
                    loading={isFetching}
                    renderItem={(member) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar style={{backgroundColor: "#A0B8FF", verticalAlign: 'middle'}}>{member.first_name.substring(0, 1)}</Avatar>}
                                title={<h3>{member.first_name} {member.last_name}</h3>}
                            />
                        </List.Item>
                )   }
                />
                
            </TabPane>
        )
    })

    return (
        <Content  type='create-block' classname="teams-page">
            <div className="teams-row">
                <Title level={3}>Команды</Title>
                <Button classname='login-form__button' text='Добавить команду'></Button>
            </div>
            <div className="teams">
                <Tabs type="card" defaultActiveKey="1">
                    {renderTab}
                </Tabs>
            </div>

        </Content>
    );
};

export default Teams;