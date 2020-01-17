import React, { useEffect } from 'react'

import {connect} from 'react-redux'

import { CredentialProvider } from "react-rbac-guard";
import {ProjectNanager} from 'hoc/RBAC/Guards' 

import { Empty } from 'antd';

import CreateProject from '../../Main/Home/CreateProject/'
import {setCredentials} from 'redux/reducers/users'

const Component = (props) => {

    const {
        credentials,
        setCredentials,
        isEmpty
    } = props

    useEffect( () => {
        setCredentials()
    }, [])

    let role = {}

    if(credentials){
        role = {
            project_manager: credentials.role.name
        }
    }
    

    return (
        <CredentialProvider value={role || {}}>
            <ProjectNanager>
                {
                    (isEmpty)
                        ? <div className='empty-block'>
                            <Empty description='Проектов не существует'/>
                            <div className="home-button">
                                <CreateProject type='empty'/>
                            </div>
                        </div>
                        : <CreateProject />
                }
            </ProjectNanager>
        </CredentialProvider>
        
    )
}

const mapStateToProprs = ({users}) => {
    return {
        credentials: users.credentials
    }
}

export default connect(mapStateToProprs, {setCredentials})(Component)