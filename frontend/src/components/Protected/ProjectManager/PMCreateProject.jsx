import React, { useEffect } from 'react'

import {connect} from 'react-redux'

import { CredentialProvider } from "react-rbac-guard";
import {ProjectNanager} from 'hoc/RBAC/Guards' 

import { Empty } from 'antd';

import {CreateProjectBtn} from 'components'
import {setCredentials} from 'redux/reducers/users'

const Component = (props) => {

    const {
        credentials,
        setCredentials,
        isEmpty
    } = props

    useEffect( () => {
        if(!credentials) setCredentials()
    }, [credentials, setCredentials])

    let role = ""

    if(credentials){
        role = credentials.role.name
    }
    

    return (
        <CredentialProvider value={role || {}}>
            <ProjectNanager>
                {
                    (isEmpty)
                        ? <div className='empty-block'>
                            <Empty description='Проектов не существует'/>
                            <div className="home-button">
                                <CreateProjectBtn type='empty'/>
                            </div>
                        </div>
                        : <CreateProjectBtn />
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