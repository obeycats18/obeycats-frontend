import React, { useEffect } from 'react'

import {connect} from 'react-redux'

import {Button} from 'components/common'

import { CredentialProvider } from "react-rbac-guard";
import {ProjectNanager} from 'hoc/RBAC/Guards' 

import {setCredentials} from 'redux/reducers/users'

const Component = (props) => {

    const {
        credentials,
        setCredentials
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
                <Button text='Закрыть спринт' classname='button-sprint'></Button>
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