import React from 'react'

import {connect} from 'react-redux'

import { CredentialProvider } from "react-rbac-guard";
import {ProjectNanager} from 'hoc/RBAC/Guards' 

import {Tasks} from 'pages'

import {Boards} from 'modules'

import { Tabs } from 'antd';

const { TabPane } = Tabs

const Component = (props) => {

    const {
        credentials
    } = props

    let role = ""

    if(credentials){
        role = credentials.role.name
    }

    return (
        <CredentialProvider value={role || {}}>
            <ProjectNanager>
                <Tabs defaultActiveKey="1" animated={false}>
                    <TabPane tab="Задачи" key="1">
                        <Tasks {...props} isDeveloper/>
                    </TabPane>
                    <TabPane tab="Доски" key="2">
                        <Boards />
                    </TabPane>
                </Tabs>
            </ProjectNanager>
        </CredentialProvider>
        
    )
}

const mapStateToProprs = ({users}) => {
    return {
        credentials: users.credentials
    }
}

export default connect(mapStateToProprs, {})(Component)